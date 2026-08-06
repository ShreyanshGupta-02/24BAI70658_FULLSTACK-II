import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import { UserContext } from './Hooks/UserContext';
import Home from './components/Home';
const user = {
  name: "Rahul Sharma",
  email: "rahul@gmail.com",
  location: "Chandigarh"
};

function App() {

  return (
    <>
      <div>
        <Navbar user={user}/>
        <div>
            <UserContext.Provider value={user}>
              <Home user={user}/>
            </UserContext.Provider>
        </div>
      </div>
    </>
        
  )
}

export default App;
