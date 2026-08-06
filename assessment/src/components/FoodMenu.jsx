import React from "react";
import Userinfo from './UserInfo';
function FoodMenu({name,email,location}){
    return(
        <div>
            <Userinfo name={name} email={email} location={location}>
                
            </Userinfo>
        </div>
    )
}
export default FoodMenu;