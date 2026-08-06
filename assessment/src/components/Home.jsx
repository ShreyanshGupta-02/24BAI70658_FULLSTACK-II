import React from "react";
import Restaurent from "./Restaurant";      
function Home({user}){
    return(
        <div>
            <Restaurent name={user.name} email={user.email} location={user.location} />
        </div>
    )
}
export default Home;