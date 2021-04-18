import React from 'react';
import styles from './DrawBar.module.css';

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
        <div className={styles.palleteContainer}>
            {/* Colour */}
            <div className={styles.palleteItem}>
                <label className={styles.palleteLabel}>Color:</label>
                <input type="color" onChange={(e => handleColourChange(e))}/>
            </div>
            {/* Stroke weight */}
            <div className={styles.palleteItem}>
                <label className={styles.palleteLabel}>Stroke:</label> 
                <select value={sliderVal} onChange={(e => handleStrokeChange(e))}>
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
            <div>
                <label className={styles.palleteLabel}>Erase:</label> 
                <input type="checkbox" onClick={(e => handleErase(e))}/>
            </div>
        </div>
    )
}

export default DrawBar;