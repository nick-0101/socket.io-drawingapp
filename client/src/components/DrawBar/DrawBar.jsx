import React from 'react';
// import styles from './DrawBar.module.css';

// Shared state
import useShareableState  from '../useShareableState'
import { useBetween } from "use-between";

const DrawBar = () => {
    const { sliderVal, setSliderVal, setColor, erase, setErase, chatOpen, setChatOpen } = useBetween(useShareableState);
    
    // Colour
    const handleColourChange = (e) => {
        setColor(e.target.getAttribute('data-col'))
    }

    // Stroke
    let counter = 0
    const handleStrokeChange = () => {
        if(sliderVal >= 30) {
            counter = 0;
        } else {
           counter = sliderVal + 5;
        }
        setSliderVal(counter)
    }

    // Erase
    const handleErase = (e) => {
        setErase(!erase)
    }

    // Menu
    const handleChat = () => {
        setChatOpen(!chatOpen)
    }

    return (
        <header className='header bg-navbar text-gray-200 py-6 px-4 flex'>
            <div className='flex-1 items-center flex justify-start'>
                <div className="flex flex-wrap">
                    <div onClick={(e => handleColourChange(e))} className="m-1" data-col="#eb3434" style={{width:'30px', height:30, background: '#eb3434'}}></div>
                    <div onClick={(e => handleColourChange(e))} className="m-1" data-col="#eb8334" style={{width:'30px', height:30, background: '#eb8334'}}></div>
                    <div onClick={(e => handleColourChange(e))} className="m-1" data-col="#ebdf34" style={{width:'30px', height:30, background: '#ebdf34'}}></div>
                    <div onClick={(e => handleColourChange(e))} className="m-1" data-col="#80eb34" style={{width:'30px', height:30, background: '#80eb34'}}></div>
                    <div onClick={(e => handleColourChange(e))} className="m-1" data-col="#34ebb1" style={{width:'30px', height:30, background: '#34ebb1'}}></div>
                    <div onClick={(e => handleColourChange(e))} className="m-1" data-col="#34e8eb" style={{width:'30px', height:30, background: '#34e8eb'}}></div>
                    <div onClick={(e => handleColourChange(e))} className="m-1" data-col="#3446eb" style={{width:'30px', height:30, background: '#3446eb'}}></div>
                    <div onClick={(e => handleColourChange(e))} className="m-1" data-col="#9934eb" style={{width:'30px', height:30, background: '#9934eb'}}></div>
                    <div onClick={(e => handleColourChange(e))} className="m-1" data-col="#eb34df" style={{width:'30px', height:30, background: '#eb34df'}}></div>
                    <div onClick={(e => handleColourChange(e))} className="m-1" data-col="#ffffff" style={{width:'30px', height:30, background: '#ffffff'}}></div>
                    <div onClick={(e => handleColourChange(e))} className="m-1" data-col="#000000" style={{width:'30px', height:30, background: '#000000'}}></div>
                </div>
                {/* Stroke */}
                <div className="mx-2 text-gray-200">
                    <button onClick={(e => handleStrokeChange(e))} className="focus:outline-none py-3 px-3 bg-gray-800 rounded-lg text-gray-100 shadow-lg">
                        {sliderVal ? <div className="w-5 h-5">{sliderVal}</div> : 
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M3 21v-4a4 4 0 1 1 4 4h-4" />
                                <path d="M21 3a16 16 0 0 0 -12.8 10.2" />
                                <path d="M21 3a16 16 0 0 1 -10.2 12.8" />
                                <path d="M10.6 9a9 9 0 0 1 4.4 4.4" />
                            </svg>
                        }
                    </button>
                </div>
                {/* Erase */}
                <div className="my-2 md:mx-2 text-gray-200">
                    <button onClick={(e => handleErase(e))} className={erase ? "py-3 px-3 bg-gray-800 rounded-lg text-gray-100 shadow-lg focus:outline-none ring border-blue-300" : "focus:outline-none py-3 px-3 bg-gray-800 rounded-lg text-gray-100 shadow-lg"}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M19 19h-11l-4 -4a1 1 0 0 1 0 -1.41l10 -10a1 1 0 0 1 1.41 0l5 5a1 1 0 0 1 0 1.41l-9 9" />
                            <line x1="18" y1="12.3" x2="11.7" y2="6" />
                        </svg>
                    </button>
                </div>
            </div>
            {/* Close Menu */}
            <div className="mx-2 flex items-center flex justify-end text-gray-200">
                <button onClick={handleChat} className="py-3 px-3 bg-indigo-500 rounded-lg text-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
          </header>
    )
    
}

export default DrawBar;