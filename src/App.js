import React from "react";
import "./styles.css";
import "./components/css/bootstrap.css";

import TopWrap from "../src/components/topWrap/topWrap";
import LeftNav from "../src/components/leftNav/leftNav";

export default function App() {
  return (
    <div>
      <TopWrap />
      <LeftNav />
    </div>
  );
}
