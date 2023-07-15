import React, { useEffect } from "react";
import { actions, useStore } from "./redux-state";

const Person = () => {
  const person = useStore((s) => s.person);
  useEffect(() => {
    console.log("Person rendered!");
  });
  return (
    <div>
      {Math.random()}
      <div>
        First Name:
        <input
          value={person.firstName}
          onChange={(event) => {
            const firstName = event.target.value;
            actions.setFirstname(firstName);
          }}
        />
      </div>
      <div>
        Last Name:
        <input
          value={person.lastName}
          onChange={(event) => {
            const lastName = event.target.value;
            actions.setLastname(lastName);
          }}
        />
      </div>
      <div>
        Age:
        <input
          value={person.age}
          onChange={(event) => {
            const age = Number(event.target.value) || 0;
            actions.setAge(age);
          }}
        />
      </div>
    </div>
  );
};

export default Person;
