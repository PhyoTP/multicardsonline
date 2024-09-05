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
        <nav>
          <Link to="/">Home</Link>
        </nav>
      )
    }else {
      return null
    }
  }
  return (
    <>
    <header>
      <h1 style={{display: "inline"}}>Multicards Online</h1>
      <span class="spacer"></span>
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
    </header>
    
    <Sidebar />
    <div style={{height: "15vh"}}></div>
    <Outlet />
    </>
  )
};

export default Layout;