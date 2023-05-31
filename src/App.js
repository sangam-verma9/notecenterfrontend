import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Notes from "./components/Notes";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Create from "./components/Create";
import Updatenotes from "./components/Updatedotes";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  console.log(search);
  return (
    <>
      <Header setSearch={setSearch} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notes" element={<Notes search={search} />} />
        <Route path="/notes/:id" element={<Updatenotes />} />
        <Route path="/create" element={<Create />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
