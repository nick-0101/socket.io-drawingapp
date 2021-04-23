import React from 'react';
// import styles from './DrawBar.module.css';

// Shared state
import useShareableState  from '../useShareableState'
import { useBetween } from "use-between";

const DrawBar = () => {
    const { sliderVal, setSliderVal, setColor, setErase } = useBetween(useShareableState);
    
    // Colour
    const handleColourChange = (e) => {
        setColor(e.target.value)
    }

    // Stroke
    const handleStrokeChange = (e) => {
        setSliderVal(e.target.value)
    }

    // Erase
    const handleErase = (e) => {
        setErase(e.target.checked)
    }


    return (
        // <div className="bg-gray-700 justify-center flex flex-row p-8">
        //     {/* Colour */}
        //     <div className="mx-2 md:mx-6 text-gray-100">
        //         <label className="mx-2">Color:</label>
        //         <input type="color" onChange={(e => handleColourChange(e))}/>
        //     </div>
        //     {/* Stroke weight */}
        //     <div className="mx-2 md:mx-6 text-gray-100">
        //         <label className="mx-2">Stroke:</label> 
        //         <select value={sliderVal} onChange={(e => handleStrokeChange(e))}>
        //             <option> 1 </option>
        //             <option> 5 </option>
        //             <option> 10 </option>
        //             <option> 15 </option>
        //             <option> 20 </option>
        //             <option> 25 </option>
        //             <option> 30 </option>
        //         </select>
        //     </div>
        //     {/* Erase */}
        //     <div className="mx-2 md:mx-6 text-gray-100">
        //         <label className="mx-2">Erase:</label> 
        //         <input type="checkbox" onClick={(e => handleErase(e))}/>
        //     </div>
        // </div>
        <header className='header bg-navbar text-gray-200 py-6 px-4'>
            <div className='header-content flex items-center flex-row'>
                  {/* Colour */}
                <div className="mx-2 md:mx-6 text-gray-200">
                    <label className="mx-2">Color:</label>
                    <input type="color" onChange={(e => handleColourChange(e))}/>
                </div>
                {/* Stroke weight */}
                <div className="mx-2 md:mx-6 text-gray-200">
                    <label className="mx-2">Stroke:</label> 
                    <select value={sliderVal} onChange={(e => handleStrokeChange(e))} className="text-gray-900">
                        <option> 1 </option>
                        <option> 5 </option>
                        <option> 10 </option>
                        <option> 15 </option>
                        <option> 20 </option>
                        <option> 25 </option>
                        <option> 30 </option>
                    </select>
                </div>
                {/* Erase */}
                <div className="mx-2 md:mx-6 text-gray-200">
                    <label className="mx-2">Erase:</label> 
                    <input type="checkbox" onClick={(e => handleErase(e))}/>
                </div>
            </div>
          </header>
    )
}

export default DrawBar;