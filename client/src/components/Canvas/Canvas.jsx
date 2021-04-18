import React, { useRef, useEffect, useState, useContext } from 'react';
import {SocketContext} from '../../context/socket';


// Shared state
import useShareableState  from '../useShareableState'
import { useBetween } from "use-between";

import './Canvas.module.css';

const Canvas = () => {
    // State
    const { sliderVal, colour, erase } = useBetween(useShareableState);
    const [mouse, setMouse] = useState({
        x: 0,
        y: 0,
        lastX: 0,
        lastY: 0,
        click: false
    });
    // Sockets io
    const socket = useContext(SocketContext);

    // Draw
    const canvasRef = useRef(null)

    const draw = (e) => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        const bounds = canvas.getBoundingClientRect();

        setMouse({
            ...mouse,
            x: e.pageX - bounds.left - window.scrollX,
            y: e.pageY - bounds.top - window.scrollY,
            lastX: mouse.x,
            lastY: mouse.y
        })
        ctx.lineWidth = sliderVal;
        ctx.lineJoin = "round";
        ctx.lineCap = "round";
        ctx.strokeStyle = colour;

        if (mouse.click) {
            if(erase) {
                ctx.strokeStyle = '#fff';
                ctx.beginPath();
                ctx.moveTo(mouse.lastX, mouse.lastY);
                ctx.lineTo(mouse.x, mouse.y);
                ctx.closePath();
                ctx.stroke();
            } else {
                ctx.beginPath();
                ctx.moveTo(mouse.lastX, mouse.lastY);
                ctx.lineTo(mouse.x, mouse.y);
                ctx.closePath();
                ctx.stroke();
            }
            // Convert the drawing to a image and emit it through socket
            const base64ImageData = canvas.toDataURL("image/png");
            socket.emit("drawing", base64ImageData);
            
        }
    }

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        ctx.canvas.width = window.innerWidth;
        ctx.canvas.height = window.innerHeight;
        canvas.style.cursor = "crosshair";

        // When the socket recives a drawing event it draws an image on the canvas.
       socket.on("drawing", function(data){
            const image = new Image();
            image.onload = function() {
                ctx.drawImage(image, 0, 0);
            };
            image.src = data;
        })
    }, [socket])

    
  return ( 
    <>
        <div id="sketch">
            <canvas 
                id="paint" 
                onMouseDown={() => setMouse({ ...mouse, click: true })}
                onMouseMove={(e) => draw(e)}
                onMouseUp={() => setMouse({ ...mouse, click: false })}
                ref={canvasRef}            
            />
        </div>
    </>
  );
};

export default Canvas;
