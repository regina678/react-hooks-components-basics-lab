import React from "react";

function NavBar() {
  return (
    <nav>
      <a href="#home">I'm a link!</a>
    </nav>
  );
}

function Home() {
  return (
    <div id="home">
      <h1>Home</h1>
    </div>
  );
}

// ✅ Write an <About> component here
function About() {
  return (
    <div id="about">
      <h1>About</h1>
    </div>
  );
}

function App() {
  return (
    <div>
      <NavBar />
      {/* ✅ Add the <Home> component here */}
      <Home />
      {/* ✅ Add your <About> component here */}
      <About />
    </div>
  );
}

export default App;
