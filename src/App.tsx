import { Outlet } from "react-router-dom";
import Header from "./Components/Header/Header.tsx";

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
