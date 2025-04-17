import { React, lazy, Suspense } from "react";
import "./App.css";
import Usecallback from "./components/Callback/Usecallback";
import Vlist from "./components/List/Vlist";
import Counter from "./components/Memo/Counter";
import Usememo from "./components/Usememo/Usememo";

const AboutCom = lazy(() => import("./components/Lazy/About"));

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <Usememo /> */}
      {/* <Usecallback /> */}
      <Vlist />
      {/* <Suspense fallback="loading....">
        <AboutCom />
      </Suspense> */}
    </div>
  );
}

export default App;
