import "./App.css";
import Counter from "./context/Counter";
import { MyProvider } from "./context/MyProvider";
import Counter_Local from "./components/Counter_Local";

// import Counter from "./components/Counter_Local";
// import Timer from "./components/Timer";
// import Avatar from "./components/Avatar";

// import { MyProvider } from "./context/MyProvider";
// import Event from "./components/Event";

function App() {
  // the function should return something
  return (
    <div>
      <MyProvider>
        <Counter_Local />
        <Counter />

        <Counter />
      </MyProvider>
    </div>
  );
}

export default App;
