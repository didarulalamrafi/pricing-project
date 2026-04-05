import React from "react";

const PricingCard = ({ pricing }) => {
  console.log(pricing);
  return (
    <div className="border-2 bg-amber-300 p-4 m-6">
      <h1 className="text-5xl">{pricing.name}</h1>
      <h3>{pricing.price}</h3>
    </div>
  );
};

export default PricingCard;
