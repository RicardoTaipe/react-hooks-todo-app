import React from "react";
import TodoList from "./components/TodoList";

function App() {
  const imgUrl = "/images/bg-mobile-dark.jpg";
  return (
    <div
      className="flex w-full h-screen bg-top bg-no-repeat"
      style={{
        backgroundImage: "url(" + imgUrl + ")",
        backgroundSize: "100% 33%",
      }}
    >
      <TodoList />
    </div>
  );
}

export default App;