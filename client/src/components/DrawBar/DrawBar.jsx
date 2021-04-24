import React from 'react';
// import styles from './DrawBar.module.css';

// Shared state
import useShareableState  from '../useShareableState'
import { useBetween } from "use-between";

const DrawBar = () => {
    const { sliderVal, setSliderVal, setColor, setErase, chatOpen, setChatOpen } = useBetween(useShareableState);
    
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

    // Menu
    const handleChat = () => {
        setChatOpen(!chatOpen)
    }

    return (
        <header className='header bg-navbar text-gray-200 py-6 px-4 flex'>
            <div className='flex-1 items-center flex justify-start w-96'>
                <div className="flex">
                    <div className="mx-1" style={{width:'30px', height:30, background: '#eb3434'}}></div>
                    <div className="mx-1" style={{width:'30px', height:30, background: '#eb8334'}}></div>
                    <div className="mx-1" style={{width:'30px', height:30, background: '#ebdf34'}}></div>
                    <div className="mx-1" style={{width:'30px', height:30, background: '#80eb34'}}></div>
                    <div className="mx-1" style={{width:'30px', height:30, background: '#34ebb1'}}></div>
                    <div className="mx-1" style={{width:'30px', height:30, background: '#34e8eb'}}></div>
                    <div className="mx-1" style={{width:'30px', height:30, background: '#3446eb'}}></div>
                    <div className="mx-1" style={{width:'30px', height:30, background: '#9934eb'}}></div>
                    <div className="mx-1" style={{width:'30px', height:30, background: '#eb34df'}}></div>
                    <div className="mx-1" style={{width:'30px', height:30, background: '#fff'}}></div>
                    <div className="mx-1" style={{width:'30px', height:30, background: '#000000'}}></div>
                </div>
                {/* <div className="mx-2 md:mx-6 text-gray-200">
                    <label className="mx-2">Color:</label>
                    <input type="color" onChange={(e => handleColourChange(e))}/>
                </div> */}
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
                <div className="mx-2 md:mx-6 text-gray-200">
                    <label className="mx-2">Erase:</label> 
                    <input className="form-checkbox" type="checkbox" onClick={(e => handleErase(e))}/>
                </div>
            </div>
            {/* Close Menu */}
            <div className="flex items-center flex justify-end text-gray-200">
                <button onClick={handleChat} className="py-3 px-3 bg-indigo-500 rounded-lg text-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
          </header>
    )
}

export default DrawBar;