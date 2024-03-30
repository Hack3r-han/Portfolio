import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";

const Banner = () => {
  return (
    <section
      id="About"
      className="w-full pt-10 pb-20 flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center font-titleFont"
    >
      <div className="flex flex-col xl:flex-row gap-10">
        <LeftBanner />
        <RightBanner />
      </div>
    </section>
  );
};

export default Banner;

