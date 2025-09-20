// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import { invoke } from "@tauri-apps/api/core";
import "./App.scss";
import Welcome from "./pages/welcome";
import SourceSelect from "./pages/sourceSelect";
import Storage from "./pages/storage";
import Home from "./pages/home";
import { Component, useState } from "react";
const steps = [
  { key: "welcome", Component: Welcome },
  { key: "sources", Component: SourceSelect },
  {key: "storage", Component: Storage}
];
function App() {
  const [index, setIndex] = useState(0);
  const [finished, setFinished] =useState(false);
  
  if (finished){
    return(
      <main className="container">
        <Home />
      </main>
    );
  }
  const Current = steps[index].Component;

  const goNext = () => {
    if (index < steps.length - 1) {
      setIndex(index + 1);
    } else {
      setFinished(true); // reached last step, go to Home
    }
  };

  const goBack = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <main className="container">
      <Current onNext={goNext} onBack={goBack} />
    </main>
  );
}


export default App;
