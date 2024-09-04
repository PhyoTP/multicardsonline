import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
    <header>
      <h1>Multicards Online</h1>
      <nav>
        <Link to="/">Home</Link>
      </nav>

    </header>
    
    <Outlet />
    </>
  )
};

export default Layout;