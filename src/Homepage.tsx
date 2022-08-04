import React, {ChangeEvent, useState} from "react";
import {useNavigate} from "react-router-dom";

export default function Homepage(){
    const [name, setName] = useState("");
    const navigate = useNavigate();

return (
    <div>
    <p>Welcome to our Page!</p>
    <input type={"text"} value={name} onChange={(event: ChangeEvent<HTMLInputElement>)=> setName(event.target.value)}/>
    <button onClick={() => navigate(`/welcome/${name}`)}>go to your namepage</button>
    </div>
)
}