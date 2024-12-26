import Footer from "./Components/Home/Footer";
import Navbar from "./Components/Home/Navbar";
import { Outlet } from "react-router-dom";
import userContext from "./Context/userContext";
import UserContextProvider from "./Context/userContextProvider";
function App() {
  return (
    <UserContextProvider>
      <Navbar />
      <Outlet />
      <Footer />
    </UserContextProvider>
  );
}

export default App;
