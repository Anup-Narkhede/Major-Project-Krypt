import React from "react";
import {
  Navbar,
  Welcome,
  Loader,
  Transactions,
  Services,
  Footer,
} from "./components";
import Prices from "./components/marketcoin";

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Prices />
      <Transactions />
      <Footer />
    </div>
  );
};

export default App;
