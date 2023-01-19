import React from "react";
import Header from "./components/ui/header/header";
import Footer from "./components/ui/footer/footer";
import MainLayout from "./layout/mainLayout";
const App = () => {
  return (
    <>
      <div>
        <Header></Header>
        <MainLayout></MainLayout>
        <Footer />
      </div>
    </>
  );
};

export default App;
