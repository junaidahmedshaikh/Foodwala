import Footer from "./Components/Home/Footer";
import { sidebarHandleFunction } from "./utils/Helper.jsx";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Header } from "./Components/Layout/Header";
import { SideBar } from "./Components/Layout/SideBar";
import Navbar from "./Components/Home/Navbar.jsx";
import store from "./Store/store.js";
import { Provider } from "react-redux";
function App() {
  const [sidebarOpen, setSidebarOpen] = useState();
  const [isSidebarVisible, setSidebarVisible] = useState();
  const [userSearchData, setUserSearchData] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const sidebarHandle = sidebarHandleFunction(location.pathname);
    setSidebarVisible(sidebarHandle);
    // console.log(isSidebarVisible);
  }, [location]);
  // console.log();
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-50">
        {!isSidebarVisible ? (
          <>
            <Header
              onSearch={(data) => setUserSearchData(data)}
              toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
            />
            <SideBar isOpen={sidebarOpen} />
          </>
        ) : (
          <Navbar />
        )}

        <div className={!isSidebarVisible ? "lg:pl-64" : "lg:pl-0"}>
          <main className="max-w-7xl mx-auto">
            <Outlet context={{ userSearchData }} />
          </main>
        </div>

        <Footer />
      </div>
    </Provider>
  );
}

export default App;
