import { useState } from "react";

export default function ChangeText () {
    const [text, setText] = useState("");

    const handleChange = (e) => {
        setText(e.target.value);
    };

    return (
        <div>
            <input
            type="text"
            value={text}
            onChange={handleChange}
           />
       
        <p>Bạn nhập: {text}</p>
        
        </div>
    )
}




