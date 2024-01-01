import { Routes, Route } from "react-router-dom";
import { AboutLayout } from "../assets/AboutLayout";
import { About } from "./About";
import { About1 } from "./About1";

/* 
    This component takes all the about routes and gives shorthand for the paths
    The layout allows you to link to those pages for the routes
*/
export function AboutRoutes() {
  return (
    <>
      <AboutLayout />
      <Routes>
        <Route index element={<About />} />
        <Route path=":id" element={<About1 />} />
        <Route path="new" element={<About1 />} />
      </Routes>
    </>
  );
}
