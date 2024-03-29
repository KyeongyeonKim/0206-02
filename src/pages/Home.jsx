import React from "react";
import Header from "../components/Header";
import Input from "../components/Input";
import TodoList from "../components/TodoList";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Input></Input>
      <TodoList isDone={true}></TodoList>
      <TodoList isDone={false}></TodoList>
      <Footer></Footer>
    </div>
  );
};

export default Home;
