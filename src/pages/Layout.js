import { Outlet, Link } from "react-router-dom";
import "./styles.css";
import { useState } from "react";

const Layout = () => {
  const [checked, setChecked] = useState(false);
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
  }
  return (
    <>
    <header>
    <div class="container">
        <input type="checkbox" id="label-check" class="label-check" 
          checked={checked}
          onChange={handleChange}
        />
        <label class="hamburger-label" for="label-check">
          <div class="line1"></div>
          <div class="line2"></div>
          <div class="line3"></div>  
        </label>  
      </div>
      <h1 style={{display: "inline"}}>Multicards Online</h1>
      <span class="spacer"></span>
    </header>
    
    <Sidebar />
    <div style={{height: "15vh"}}></div>
    <Outlet />
    </>
  )
};

export default Layout;