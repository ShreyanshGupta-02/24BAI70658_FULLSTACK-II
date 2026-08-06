import React from "react";
import { UserContext } from "../Hooks/UserContext";
import { useContext } from "react";
function Userinfo({name,email,location}){
    const value=useContext(UserContext);
    return(
        <div>
            <div>
                <p>Name:{name}</p>
                <p>Email:{email}</p>
                <p>Location:{location}</p>
            </div>
            <div>
                <p>Name: {value.name}</p>
                <p>Email: {value.email}</p>
                <p>Location: {value.location}</p>
            </div>
        </div>
    )
};
export default Userinfo;