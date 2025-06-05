import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "../components/LayOut";
import Login from "../Pages/Login";
import ToDoList from "../Pages/ToDoList";
import Home from "../Pages/Home";

function AppRouter() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/todolist" element={<ToDoList />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AppRouter;
