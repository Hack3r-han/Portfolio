import Title from "./Title";
import ProjectsCard from "./ProjectCard";
import Apolliculture from "../assets/Apolliculture.png";
import Ecoders from "../assets/Ecoders.jpeg";
import ChewbaGames from "../assets/ChewbaGames.png";
import eCollectic from "../assets/eCollectic.jpeg";
import Bizaar from "../assets/Bizaar.jpeg";
import Arboretum from "../assets/Arboretum.png";

const Projects = () => {
  return (
    <section
      id="Projects"
      className="w-full py-20"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="VISIT MY PORTFOLIO" des="My Projects" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <a href="" target="_blank" rel="noopener noreferrer">
          <ProjectsCard
            title="Apolliculture eCommerce"
            des="The name Apolliculture merges the idea of ​​the Greek God, Apollo, with 
            apiculture, creating a connection between the divinity of the sun and honey 
            production. At Apolliculture, we have cultivated a community where a passion 
            for bees and beekeeping flourishes. Beyond simply being a marketplace, our 
            platform is a home for those who share a deep love for nature. Through our 
            digital hive, we offer an abundance of treasures inspired by the world of 
            beekeeping, from exquisite honey to natural beauty products. Somos el Apolo 
            a tu Aristeo - We are the Apollo to your Aristaeus."
            src={Apolliculture}
            githubLink="https://github.com/DenisseNavarro/Apolliculture"
            canvaLink="https://www.canva.com/design/DAF-fh6M-f0/qv_qNkuOqzkVqXINPFFflA/view?utm_content=DAF-fh6M-f0&utm_campaign=designshare&utm_medium=link&utm_source=editor#1"
          />
        </a>
        <a href="" target="_blank" rel="noopener noreferrer">
          <ProjectsCard
            title="Star Wars Roulette"
            des="The FIRST ORDER will not rest until the last Jedi has been destroyed. 
            In an effort to retaliate, Rebel spies have stolen the secret plans for the Empire's 
            ultimate weapon, the DEATH BUG. With the support of the REPUBLIC, Princess Laudy leads a brave 
            RESISTANCE. She is desperate to find her brother and enlist his help in restoring 
            peace to the galaxy. Laudy has sent her most daring pilot, Hana-Solo, 
            with his faithful ally Neybacca, to the planet Stack Overflow, where 
            a clue to Skywalker's whereabouts has been discovered... Who will be the chosen ones
            to assist in this mission? Let's see what the roulette decides…"
            src={ChewbaGames}
            githubLink="https://github.com/Hack3r-han/StarWars-Roulette"
            canvaLink="https://www.canva.com/design/DAGA-Vmj5Cs/jMw_Sg3byoDkEC4sVIBZrA/view?utm_content=DAGA-Vmj5Cs&utm_campaign=designshare&utm_medium=link&utm_source=editor"
          />
        </a>
        <a href="" target="_blank" rel="noopener noreferrer">
          <ProjectsCard
            title="Arboretum Todo List"
            des="An arboretum-inspired task manager. This unique productivity tool transforms mundane chores 
            into a lush botanical oasis. As you check off your list, your virtual garden will flourish. With 
            each completed task, witness the beauty of your accomplishments blossom before your eyes. Thanks 
            to this task manager, you'll cultivate not only a thriving garden but also a sense of fulfillment 
            and achievement."
            src={Arboretum}
            githubLink="https://github.com/Hack3r-han/Arboretum-TDL"
            canvaLink=""
          />
        </a>
        <a href="" target="_blank" rel="noopener noreferrer">
          <ProjectsCard
            title="eCollectic Dashboard"
            des="Until now, you've been idly bumbling through life, inadvertently submitting yourself 
            to an inferior plane of existence.  No more! With eCollectic, say goodbye to your worn and 
            outdated cardigan and replace it with the Golden Fleece. Because you deserve the best. 
            Peruse our site to discover the eclectic range of items on offer. Find products that will 
            redefine convenience and provide your life with new meaning. eCollectic, connecting buyers 
            and sellers globally. Click and Collect now!"
            src={eCollectic}
            githubLink="https://github.com/Hack3r-han/eCollectic"
            canvaLink="https://www.canva.com/design/DAGA-BH5k2I/VKFfj8-50vQmqczFKrkmkg/view?utm_content=DAGA-BH5k2I&utm_campaign=designshare&utm_medium=link&utm_source=editor"
          />
        </a>
        <a href="" target="_blank" rel="noopener noreferrer">
          <ProjectsCard
            title="Bizaar eCommerce"
            des="Here are the results of my first hackathon! During this intensive event, our team crafted 
            an e-commerce platform: Your Bazaar for All Things Bizarre. With a mission to celebrate the 
            extraordinary and eclectic, we embarked on a whirlwind of coding, design, and collaboration to 
            bring this vision to life. From quirky gadgets to unique treasures, our platform showcases a 
            kaleidoscope of miscellaneous items, inviting users to explore the unexpected. "
            src={Bizaar}
            githubLink="https://github.com/GitNinja0/Hackathon_Proyect"
            canvaLink="https://docs.google.com/presentation/d/e/2PACX-1vSlaxzaSJj-Nc3keJdnUhlU_hfMfdIQP76wcArah7GthcMw-ZmsEnNJgW7CEBn0mEOqkunNlE5iBLeZ/pub?start=false&loop=false&delayms=3000&slide=id.p"
          />
        </a>
        <a href="" target="_blank" rel="noopener noreferrer">
          <ProjectsCard
            title="ECODERS"
            des="This project marks my debut in web development. It stands as a testament 
            to my commitment to sustainable technology solutions. ECODERS (eco-coders) 
            is not just a project, it's a vision. We are a consultancy dedicated to 
            empowering local businesses and enterprises to embrace eco-friendly digital 
            practices. From resource optimization to implementing green technologies, the 
            ECODERS team works tirelessly to deliver innovative solutions that not only 
            drive business growth but also contribute to the planet's well-being."
            src={Ecoders}
            githubLink="https://github.com/Hack3r-han/ECO-DERS"
            canvaLink="https://www.canva.com/design/DAGA-b3wnyU/QhwRCLilSKBl82olNLH-Tw/view?utm_content=DAGA-b3wnyU&utm_campaign=designshare&utm_medium=link&utm_source=editor"
          />
        </a>
      </div>
    </section>
  );
};

export default Projects;
