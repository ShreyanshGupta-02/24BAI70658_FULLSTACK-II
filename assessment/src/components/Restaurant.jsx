import React from "react";
import FoodMenu from './FoodMenu';
function Restaurent({name,email,location}){
    return(
        <div>
            <FoodMenu name={name} email={email} location={location}>
                
            </FoodMenu>
        </div>
    )
}
export default Restaurent;