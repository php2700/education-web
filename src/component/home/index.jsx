import { Banner } from "./banner";
import { OfferAndTrust } from "./offer";
import SubjectsAndServices from "./service";
import PricingAndHowItWorks from "./transparent";
import WhyChooseUs from "./whychoose";
import HowItWorks from "./work";

export const Home = () => {
  return (
    <>
      <WhyChooseUs />
      <SubjectsAndServices />
      <OfferAndTrust />
      <PricingAndHowItWorks />
      {/* <HowItWorks /> */}
    </>
  );
};
