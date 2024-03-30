import profileImg from "../assets/profileImg.jpg";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <img
        className="rounded-full w-80 object-cover"
        src={profileImg}
        alt="profileImg"
      />
    </div>
  );
};

export default RightBanner;
