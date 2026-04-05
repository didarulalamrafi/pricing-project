import React, { use } from "react";
import PricingCard from "./PricingCard";

const PricingOption = ({ pricingPromise }) => {
  const pricingData = use(pricingPromise);
  //   console.log(pricingData);
  return (
    <div>
      <h1 className="text-6xl">Get our primium Membership</h1>

      <div className="m-6">
        {pricingData.map((pricing) => (
          <PricingCard key={pricing.id} pricing={pricing}></PricingCard>
        ))}
      </div>
    </div>
  );
};

export default PricingOption;
