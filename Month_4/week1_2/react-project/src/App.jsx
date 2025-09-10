import "./App.css";

// import the Hero function from the Hero.jsx file
// inside of the component folder
import Hero from "./components/Hero";

function App() {
  const name = "Tony";

  // the function should return something
  return (
    <div>
      <p>Hello World</p>

      <Hero />
      {/* Conditional Statements go into the curly braces */}
    </div>
  );
}

export default App;
