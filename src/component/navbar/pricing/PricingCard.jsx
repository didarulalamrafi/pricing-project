import { CircleCheckBig } from "lucide-react";
import React from "react";

const PricingCard = ({ pricing }) => {
  // console.log(pricing);
  const {name, price, currency, duration, features} = pricing;
  return (
    <div className="border-2 bg-green-800 p-4 m-6 rounded-lg flex flex-col">
      <h1 className="text-5xl">{name}</h1>
      <span className="flex gap-1"><h3>{price}</h3> <p>{currency}</p></span> 
     
      <div className="bg-green-600 p-2 rounded-xl my-2 flex-1">
        <p>{duration}</p>
          {
            features.map((feature, index)=> <p key={index} className="flex gap-2 items-center"> <CircleCheckBig></CircleCheckBig> {feature}</p>)
          }
      </div>
      <button className="btn w-full mt-4">Subscribe</button>
    </div>
  );
};

export default PricingCard;
