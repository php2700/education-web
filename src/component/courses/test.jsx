import ActTestPrep from "./subTestPrep/act";
import AmcTestPrep from "./subTestPrep/amc";
import ElaPage from "./subTestPrep/ela";
import ISEE from "./subTestPrep/isee";
import MathKangarooTestPrep from "./subTestPrep/kangaroo";
import CogatTestPrep from "./subTestPrep/kogat";
import AccuplacerPrep from "./subTestPrep/lacer";
import PsatTestPrep from "./subTestPrep/psat";
import SatTestPrep from "./subTestPrep/sat";
import SBACPrep from "./subTestPrep/sbac";
import ScatTestPrep from "./subTestPrep/scat";
import SHSAT from "./subTestPrep/shsat";
import SsatTestPrep from "./subTestPrep/ssat";
import STBPrep from "./subTestPrep/stb";
import backgroundImage from "../../assets/math-bg.png";

export const Test = () => {
  return (
    <div className="bg-[#F0F8FF]" style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "contain",
      backgroundPosition: "center",
    }}>

      <SatTestPrep />
      <PsatTestPrep />
      <SsatTestPrep />
      <SHSAT />
      <ISEE />
      <ElaPage />
      <ScatTestPrep />
      <AmcTestPrep />
      <MathKangarooTestPrep />
      <ActTestPrep />
      <CogatTestPrep />
      <SBACPrep />
      <AccuplacerPrep />
      <STBPrep />
    </div>
  );
};
