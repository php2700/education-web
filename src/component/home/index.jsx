import { Banner } from "./banner";
import { OfferAndTrust } from "./offer";
import SubjectsAndServices from "./service";
import Pricing from "./transparent";
import WhyChooseUs from "./whychoose";
import HowItWorks from "./work";

export const Home = () => {
  return (
    <>
      <WhyChooseUs />
      <SubjectsAndServices />
      <OfferAndTrust />
      <Pricing />
      <HowItWorks />
    </>
  );
};
