import { useState } from "react";
import "../css/Login.css";
import { IUser } from "../App";

interface ILogin {
  user: IUser["user"];
  setUser: React.Dispatch<React.SetStateAction<IUser["user"]>>;
}
function Login({ user, setUser }: ILogin) {
  const [stateUser, setStateUser] = useState({
    name: "",
    pass: 0,
  });
  const change = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setStateUser({ ...stateUser, [e.target.name]: e.target.value });
  };
  const submit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setUser([
      ...user,
      {
        name: stateUser.name,
        pass: stateUser.pass,
      },
    ]);
  };
  return (
    <div className="login">
      <form onSubmit={submit}>
        {/* <label className="login_item">name</label> */}
        <input
          className="login_input"
          type="text"
          name="name"
          id="name"
          // value="name1"
          value={stateUser.name}
          onChange={change}
        ></input>
        {/* <label className="login_item">password</label> */}
        <input
          className="login_input"
          type="number"
          name="pass"
          id="pass"
          // value="pass"
          value={stateUser.pass}
          onChange={change}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
