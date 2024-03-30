// import SpaceShuttle from "./SpaceShuttle";
import SpaceMan from "./SpaceMan";
import starryBackground from "../assets/Starry_bg.jpg";


const ContactLeft = () => {
  return (
    <div
    className="w-full lgl:w-[35%] h-full p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center"
    style={{ backgroundImage: `url(${starryBackground})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <SpaceMan
        className="w-full h-64 object-cover rounded-lg mb-2"
        title="LEGO Space Guy 1980"
        src="https://sketchfab.com/models/5bd15ef2dfaa4098b7b28ac10cf145f7/embed"
      />
      <div className="flex flex-col gap-4 lg:w-[90%] pl-12">
        <h3 className="text-3xl font-bold text-orange-400">🚀 Hannah Phillips 🚀</h3>
        <p className="text-lg font-normal text-yellow-400">
          Providing ★STELLAR★ solutions
        </p>
        <p className="text-base text-white tracking-wide">
        As a full stack developer, I traverse the vast expanse of cyberspace, launching 
        new projects into orbit with innovation and determination. Equipped with the 
        latest tech, I craft stellar solutions. Join me on this cosmic journey, and 
        together, we'll reach new heights in the digital galaxy.
        </p>
        <p className="text-base text-white flex items-center gap-2">
          ☎ <span className="text-white">+34 643 489 956</span>
        </p>
        <p className="text-base text-white flex items-center gap-2">
          ✉ <span className="text-lightText">hannahphillips170@yahoo.com</span>
        </p>
      </div>
    </div>
  );
};

export default ContactLeft;