import { Suspense, useState } from "react";
import "./App.css";
import Navbar from "./component/navbar/Navbar";
import PricingOption from "./component/navbar/pricing/PricingOption";

const pricingPromise = fetch("pricingData.json").then((res) => res.json());

function App() {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Suspense>
          <PricingOption pricingPromise={pricingPromise}></PricingOption>
        </Suspense>
      </main>
    </>
  );
}

export default App;
