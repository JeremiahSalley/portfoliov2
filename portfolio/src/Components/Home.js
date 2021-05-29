import React from "react";
import ReactTypingEffect from "react-typing-effect";


function Home() {
  return (
    <>
      <div
        className="h-screen flex items-center justify-center "
        style={{
          background: "#0A192E",
        }}
        id="/"
      >
        <h1 className="text-2xl font-mono text-gray-300 sm:text-left md:text-6xl">Jeremiah Salley</h1>
        <ReactTypingEffect
          className="mt-56 text-xs font-mono text-gray-200 sm:text-left md: text-4xl"
          text={["Software Developer"]}
          speed={100}
          eraseDelay={700}
        />
      </div>
    </>
  );
}

export default Home;
