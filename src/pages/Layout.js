import { Outlet, Link } from "react-router-dom";
import "./styles.css";
//import { useState } from "react";
import {ReactComponent as Icon} from "./icon.svg";
import { jwt } from "./PhyoID";

const Layout = () => {
  /*const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(!checked);
  };
  const Sidebar = () => {
    if (checked) {
      return (
        <div style={{display: "flex", flexDirection: "column"}}>
        <nav style={{flexGrow: 1}}>
          <Link to="/">Home</Link>
        </nav>
        </div>
      )
    }else {
      return null
    }
  }*/
  return (
    <>
    <header >
      {/*<div class="container">
        <input type="checkbox" id="label-check" class="label-check" 
          checked={checked}
          onChange={handleChange}
        />
        <label class="hamburger-label" for="label-check">
          <div class="line1"></div>
          <div class="line2"></div>
          <div class="line3"></div>  
        </label>  
      </div>*/}
      <Link to="/">
        <Icon id="icon"/>
        <h1 style={{display: "inline"}}>Multicards</h1>
      </Link>
      <span className="spacer"></span>
      
        <nav>
          <Link to="/about">About</Link>
          {jwt==="" ? (
            <>
              <a href="https://auth.phyotp.dev/#/login/multicards">Login</a>
              <a href="https://auth.phyotp.dev/#/register/multicards">Register</a>
            </>
          ) : (<div />)}
        </nav>
    </header>
    
    {/*<Sidebar />*/}
    <div style={{height: "15vh"}}></div>
    <Outlet />
    </>
  )
};

export default Layout;