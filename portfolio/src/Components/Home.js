import React from "react";
import ReactTypingEffect from "react-typing-effect";

function Home() {
  return (
    <div className="h-screen flex items-center justify-center"
    style={{
        background: '#0A192E'
    }}>
      <h1 className="text-6xl font-mono text-gray-300">Jeremiah Salley</h1>
      <ReactTypingEffect
        className="mt-40 text-4xl font-mono text-gray-200"
        text={["Full Stack Web Developer"]}
        speed={100}
        eraseDelay={700}
      />
    </div>
  );
}

export default Home;
