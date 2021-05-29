import React from "react";
// import profilepic from "../images/profilepic.JPG";

function About() {
  return (
    <>
    
      <div
        className=" h-screen flex items-center justify-center"
        style={{
          background: "#0A192E",
        }}
        id="/about"
      >
        <div className="border-double border-4 border-white text-white p-10 text-xl animate-pulse">
          <h4 className="mb-3">Hey there,</h4>
          <h1 className="mb-3">I'm Jeremiah Salley</h1>
          <h3 className="mb-3">
            Full Stack Web <u>Developer</u>{" "}
          </h3>
          <p>
            I'm currently in the Army National Guard I do hold a secret
            clearance I'm a full stack web developer. <br />I have a passion for
            programming. I graduated from General Assembly, which I build upon
            previous skills
            <br />
            and develope new skills and concepts.
          </p>
          <ol className="list-disc mt-6 grid justify-center grid-cols-2  lg:grid-cols-4 ">
            <li>Html</li>
            <li>Css</li>
            <li>JavaScript es6</li>
            <li>React</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySql</li>
            <li>Python</li>
          </ol>
        </div>
        {/* <div className="border-double border-4 border-white ml-6 lg: visible">
          <img src={profilepic} alt="profilepic" className="float-right w-72 " />
        </div> */}
      </div>
    </>
  );
}

export default About;
