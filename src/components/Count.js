import React, { useState } from 'react';

export default function Count() {

    const [count, setCount] = useState(0);
    
    const increase = () => setCount(prev => prev + 1);
    const decrease = () => setCount(prev => prev - 1);

    const [isOn, setIsOn] = useState(false);

    const handleToggle = () => {
        setIsOn (prev => !prev);
    }
    //Toggle đảo trạng thái

    return (
        <div style={{textAlign: "center"}}>
            <h2>Counter</h2>
            <p>Số hiện tại: {count}</p>

            <div style={{display: "flex", justifyContent: "center", gap: "10px"}}> 
                <button onClick={increase}>+</button>
                <button onClick={decrease}>-</button>

                <button onClick={() => setCount(0)}>Reset</button>
            </div>

            <div>
                <p>Status: {isOn ? "ON" : "OFF"}</p>
                <button onClick={handleToggle}>Toggle</button>
            </div>
        </div>
        
    )

}
