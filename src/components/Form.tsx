import React, { useState } from "react";
import "../css/Form.css";
import { IState as Props } from "../App";

interface IProps {
  people: Props["people"];
  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>;
}
const Form = ({ people, setPeople }: IProps) => {
  const [inputdata, setInputdata] = useState({ name: "", age: 0, bio: "" });
  const onchange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setInputdata({ ...inputdata, [e.target.name]: e.target.value });
  };
  const onsubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setPeople([
      ...people,
      {
        name: inputdata.name,
        age: Number(inputdata.age),
        bio: inputdata.bio,
      },
    ]);
    setInputdata({ name: "", age: 0, bio: "" });
  };
  return (
    <div className="form-container">
      <h1>Form</h1>
      <form onSubmit={onsubmit}>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="name"
          onChange={onchange}
          value={inputdata.name}
        />
        <input
          type="number"
          name="age"
          id="age"
          placeholder="age"
          onChange={onchange}
          value={inputdata.age}
        />
        <textarea
          name="bio"
          id="bio"
          placeholder="Bio Description"
          onChange={onchange}
          value={inputdata.bio}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
