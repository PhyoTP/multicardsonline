import ReactDOM from "react-dom/client";
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import SetPage from "./pages/SetPage";
import PlayPage from "./pages/PlayPage";
import About from "./pages/About";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="set/:id" element={<SetPage />} />
          <Route path="set/:id/play" element={<PlayPage />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
