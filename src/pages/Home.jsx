import Banner from "../components/Banner.jsx";
import BestSeller from "../components/BestSeller.jsx";
import Categories from "../components/Categories.jsx";

import SmallBanner from "../components/SmallBanner.jsx";

export const Home = () => {
  return (
    <div>
      <Banner />
      <Categories />
      <BestSeller />
      <SmallBanner />
    </div>
  );
};
