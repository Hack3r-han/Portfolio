import { useState } from "react";
import ContactLeft from "./ContactLeft";
import Title from "./Title";
import starryBackground from "../assets/Starry_bg.jpg";

const Contact = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const emailValidation = (email: string) => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSend = (e: any) => {
    e.preventDefault();
    if (username === "") {
      setErrMsg("Name is required!");
    } else if (phoneNumber === "") {
      setErrMsg("Phone number is required!");
    } else if (email === "") {
      setErrMsg("Please give your Email!");
    } else if (!emailValidation(email)) {
      setErrMsg("Give a valid Email!");
    } else if (subject === "") {
      setErrMsg("Please give your Subject!");
    } else if (message === "") {
      setErrMsg("Message is required!");
    } else {
      setSuccessMsg(
        `Thank you ${username}, Your message has been sent successfully!`
      );
      setErrMsg("");
      setUsername("");
      setPhoneNumber("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
  };

  return (
    <section
      id="contact"
      className="w-full py-20"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" des="Get in Touch" />
      </div>
      <div className="w-full flex flex-col lg:flex-row justify-center items-start lg:items-center gap-6 lg:gap-14">
        <ContactLeft />
        <div className="w-full lg:w-[60%] py-10 bg-gradient-to-r from-[#0B1120] to-[#0B1120] flex flex-col gap-8 p-4 lg:p-8 rounded-lg shadow-shadowOne"
             style={{ backgroundImage: `url(${starryBackground})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <form className="w-full flex flex-col gap-4">
            {errMsg && (
              <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                {errMsg}
              </p>
            )}
            {successMsg && (
              <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                {successMsg}
              </p>
            )}
            <div className="w-full flex flex-col lg:flex-row gap-10">
              <div className="w-full lg:w-1/2 flex flex-col gap-4">
                <p className="text-sm text-yellow-400 uppercase tracking-wide">
                  Your name
                </p>
                <input
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                  className={`${
                    errMsg === "Username is required!" &&
                    "outline-designColor"
                  } contactInput rounded-md`}
                  type="text"
                />
              </div>
              <div className="w-full lg:w-1/2 flex flex-col gap-4">
                <p className="text-sm text-yellow-400 uppercase tracking-wide">
                  Phone Number
                </p>
                <input
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  value={phoneNumber}
                  className={`${
                    errMsg === "Phone number is required!" &&
                    "outline-designColor"
                  } contactInput rounded-md`}
                  type="text"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-sm text-yellow-400 uppercase tracking-wide">
                Email
              </p>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className={`${
                  errMsg === "Please give your Email!" &&
                  "outline-designColor"
                } contactInput rounded-md`}
                type="email"
              />
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-sm text-yellow-400 uppercase tracking-wide">
                Subject
              </p>
              <input
                onChange={(e) => setSubject(e.target.value)}
                value={subject}
                className={`${
                  errMsg === "Please give your Subject!" &&
                  "outline-designColor"
                } contactInput rounded-md`}
                type="text"
              />
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-sm text-yellow-400 uppercase tracking-wide">
                Message
              </p>
              <textarea
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                className={`${
                  errMsg === "Message is required!" && "outline-designColor"
                } contactTextArea rounded-md`}
                cols={30}
                rows={8}
              ></textarea>
            </div>
            <div className="w-full">
              <button
                onClick={handleSend}
                className="w-full h-12 bg-orange-400 rounded-lg text-base text-red-700 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-orange-600 border-orange-400 border"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;