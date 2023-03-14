import { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
import Login from "./components/Login";
import ListLogin from "./components/ListLogin";
import "./App.css";
export interface IState {
  people: {
    name: string;
    age: number;
    bio: string;
  }[];
}
export interface IUser {
  user: {
    name: string;
    pass: number;
  }[];
}
const App = () => {
  const [people, setPeople] = useState<IState["people"]>([
    { name: "anh tuan", age: 22, bio: "chơi" },
  ]);
  const [user_, setUser_] = useState<IUser["user"]>([
    { name: "tuan dep zai", pass: 123 },
  ]);
  return (
    <>
      <div className="container">
        <Form people={people} setPeople={setPeople} />
        <List people={people} />
      </div>
      <div className="wrap_login">
        <Login user={user_} setUser={setUser_} />
        <ListLogin user={user_} />
      </div>
    </>
  );
};

export default App;
