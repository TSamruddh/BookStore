import React from "react";
import Header from "../../components/Header/Header";
import { Outlet } from "react-router-dom";
import HomeScreen from "../../components/HomeScreen/HomeScreen";
import { useLocation } from "react-router-dom";


const Home = () => {
  const location = useLocation();
  console.log("location", location);
  return (
    <main>
      <Header />
      {location.pathname == "/" && <HomeScreen />}
      <Outlet />
    </main>
  );
};

export default Home;
