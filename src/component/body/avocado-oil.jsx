import React, { useState, useEffect } from "react";

import ReasonForUse from "./reason-for-use/reason-for-use";
import ObjectOfUse from "./object of use/object-of-use";
import Endow from "./endow/endow";
import FeedBack from "./feedback/feedback";
import Footer from "../footer/footer";
import Body1 from "./body1/body1";

// import OrderModal from "./modal/order-modal";
// import Link from "next/link";

export default function AvocadoOil() {
  const calculateTimeLeft = () => {
    const difference = +new Date("2024-12-31") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="w-full h-screen">
      <div
        className="bg-cover bg-center bg-no-repeat h-screen "
        style={{ backgroundImage: `url(${require("./background.png")})` }}
      >
        <Body1 />
      </div>

      <div>
        <ReasonForUse />
      </div>
      <div>
        <ObjectOfUse />
      </div>
      <div>
        <Endow />
      </div>
      <div>
        <FeedBack />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
