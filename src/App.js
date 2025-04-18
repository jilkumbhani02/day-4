import { React, lazy, Suspense } from "react";
import "./App.css";
import Load from "./Assignment/Load";
import Performation from "./Assignment/Performation";
import Usecallback from "./components/Callback/Usecallback";
import Vlist from "./components/List/Vlist";
import Counter from "./components/Memo/Counter";
import Usememo from "./components/Usememo/Usememo";

const AboutCom = lazy(() => import("./components/Lazy/About"));

const Loader = lazy(() => import("./Assignment/Load"));

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <Usememo /> */}
      {/* <Usecallback /> */}
      {/* <Suspense fallback="loading....">
        <AboutCom />
      </Suspense> */}
      {/* <Vlist /> */}

      <Performation />
    </div>
  );
}

export default App;
