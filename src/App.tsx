import React, { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
import "./App.css";
export interface IState {
  people: {
    name: string;
    age: number;
    bio: string;
  }[];
}
const App = () => {
  const [people, setPeople] = useState<IState["people"]>([
    { name: "anh tuan", age: 22, bio: "chơi" },
  ]);
  return (
    <div className="container">
      <Form people={people} setPeople={setPeople} />
      <List people={people} />
    </div>
  );
};

export default App;
