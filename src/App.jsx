import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Nav from "./Nav";
import Word from "./Prop";
import Posts from "./components/Posts";
import PostLoadingComponent from "./components/PostLoading";

function App() {
  return (
    <div className="w-screen min-h-screen bg-[#24272B] text-white">
      <Nav />
      <Posts />
      <PostLoadingComponent />
    </div>
  );

  // return <Posts {...data} />;
}

export default App;
