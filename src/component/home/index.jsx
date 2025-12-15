import { useLocation } from "react-router-dom";
import { Banner } from "./banner";
import { OfferAndTrust } from "./offer";
import SubjectsAndServices from "./service";
import Pricing from "./transparent";
import { Trust } from "./trust";
import WhyChooseUs from "./whychoose";
import HowItWorks from "./work";
import { useEffect } from "react";

export const Home = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const timer = setTimeout(() => {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [hash]);
  return (
    <>
      <WhyChooseUs />
      <SubjectsAndServices />
      <OfferAndTrust />
      <Trust />
      <Pricing />
      <HowItWorks />
    </>
  );
};
