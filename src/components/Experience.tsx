import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";
import Title from "./Title";

const Experience = () => {
  return (
    <section
        id="Experience"
    >
    <div className="flex justify-center items-center text-center">
     <Title title="QUALIFICATIONS" des="My Experience" />
    </div>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lg:flex-row gap-10 lg:gap-20"
    >
      {/* EDUCATION */}
      <div className="lg:w-1/2 p-8">
        <div className="py-6 lg:py-12 flex flex-col gap-4">
          <p className="text-sm tracking-[4px] font-mono text-orange-400">2014 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold font-mono text-sky-600">Education</h2>
        </div>
        <div className="mt-6 lg:mt-14 w-full h-[1000px] border-l-[6px] border-l-sky-600 border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Full Stack Web Development"
            subTitle="Factoría F5 (Oct - present)"
            place="MADRID"
            des="A comprehensive 6-month bootcamp which covered the latest skills in web development, by tackling front-end and back-end projects"
          />
          <ResumeCard
            title="Google IT Automation with Python (112 hrs)"
            subTitle="Scholarship with SomosF5 (Jul - Sept)"
            place="MADRID"
            des="An introduction to essential Python programming skills and automation techniques to streamline processes and enhance efficiency in IT operations."
          />
          <ResumeCard
            title="BA Foreign Languages, Literacy, and Linguistics"
            subTitle="University of Liverpool (2016 - 2020)"
            place="2:1"
            des="Specialized in French. Through immersive study, cultural exploration, and linguistic analysis, I developed a deep understanding of the intricacies of  language, enabling effective communication and cultural appreciation."
          />
        </div>
      </div>
     
      {/* EXPERIENCE */}
      <div className="lg:w-1/2 p-8">
        <div className="py-6 lg:py-12 flex flex-col gap-4">
          <p className="text-sm tracking-[4px] font-mono text-orange-400">2020 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold font-mono text-sky-600">Job Experience</h2>
        </div>
        <div className="mt-6 lg:mt-14 w-full h-[1000px] border-l-[6px] border-l-sky-600 border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="EN-FR-SP Translator"
            subTitle="Fever (2024 - Present)"
            place="MADRID"
            des="I play a pivotal role in bridging linguistic gaps, facilitating seamless communication, and enhancing user experiences on the platform."
          />
          <ResumeCard
            title="Layout Editor and Copywriter"
            subTitle="Domestika (2021 - 2023)"
            place="MADRID"
            des="Improved the written content of courses in EN and FR. Uploaded all the content to the web and organised it in
            an aesthetic manner. Collaborated with an international team in Spanish."
          />
          <ResumeCard
            title="English Teaching Assistant"
            subTitle="IES Vicente Aleixandre (2020 - 2021)"
            place="SEVILLA"
            des="Delivered interactive classes in a bilingual college in Seville, spanning a variety of themes, including History, Music, Biology and Technology."
          />
        </div>
      </div>
    </motion.div>
    </section>
  );
};

export default Experience;