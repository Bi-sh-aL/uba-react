import React from "react";
import { Outlet } from "react-router-dom";
import {Header} from "./Index.ts";

function App() {
 
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
