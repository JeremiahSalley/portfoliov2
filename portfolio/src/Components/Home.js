import React from "react";
import ReactTypingEffect from "react-typing-effect";

function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-6xl font-mono">Jeremiah Salley</h1>
      <ReactTypingEffect
        className="mt-40 text-4xl font-mono"
        text={["Software Engineer"]}
        speed={100}
        eraseDelay={700}
      />
    </div>
  );
}

export default Home;
