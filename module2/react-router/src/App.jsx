import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { AboutRoutes } from "./pages/AboutRoutes";

/* 
  Route demo - Route must be wrapped in a Routes component
  Multiple Routes component can be shown
  Instead of making anchor tags to other pages, you can make Link or NavLink
  Navlink is similar to link but provides and active class, isActive, isPending properties
*/
function App() {
  return (
    <>
      <Routes>
        <Route path="/about" element={<h1>Extra Content</h1>} />
      </Routes>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about/1">About</Link>
          </li>
        </ul>
      </nav>

      {/* 
        Routes can be rolled into a barrel component like `AboutRoutes`
        / defines root, while * defines not found 
      */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about/*" element={<AboutRoutes />}/>
        <Route path="*" element={<h1>Not found</h1>} />
        <Route />
      </Routes>
    </>
  );
}

export default App;
