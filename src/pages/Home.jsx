import Banner from "../components/Banner.jsx";
import BestSeller from "../components/BestSeller.jsx";
import Categories from "../components/Categories.jsx";

import SmallBanner from "../components/SmallBanner.jsx";
import Testonimoal from "./Testonimoal.jsx";

export const Home = () => {
  return (
    <div>
      <Banner />
      <Categories />
      <BestSeller />
      <SmallBanner />
      <Testonimoal/>
    </div>
  );
};
