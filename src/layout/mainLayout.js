import { createContext, useEffect, useState } from "react";
import Header from "../components/ui/header/header";
import Footer from "../components/ui/footer/footer";
import { Outlet } from "react-router-dom";
export const UserContext = createContext();
const MainLayout = ()=> {
  const [user, setUser] = useState("Olaitan");
  const [count, setCount] = useState(0);
  const handledClick = () => {
    setUser("makinde")

  }
  return (
    <>
      <UserContext.Provider value={{ user, count,handledClick }}>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </UserContext.Provider>
      
    </>
  );
};

export default MainLayout;
