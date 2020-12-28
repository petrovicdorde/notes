import React, { useEffect, useState } from "react";
import "./Add.sass";

function AddProblem() {
  const [problems, setProblems] = useState([]);
  const [pas, setPas] = useState({ problem: "", solution: "" });

  useEffect(() => {
    let data = [];

    if (localStorage.data) {
      data = JSON.parse(localStorage.data);
    }

    setProblems(data);
  }, []);

  const addIntoProblems = (pas) => {
    pas.id = Math.floor(Math.random() * (100 - 10) - 10);
    localStorage.data = JSON.stringify([...problems, pas]);
    setProblems([...problems, pas]);
  };

  const addSolution = () => {
    addIntoProblems(pas);
    setPas({problem: "", solution: ""});
  }

  return (
    <div className="add">
      <p>Problem name:</p>
      <input type="text" name="problem" value={pas.problem} onChange={(event) => {setPas({...pas,problem:event.target.value})}}/>
      <p>Solution:</p>
      <input type="text" name="solution" value={pas.solution} onChange={(event) => {setPas({...pas,solution:event.target.value})}} />
      <button
        onClick={() => {
          addSolution();
        }}
      >
        Add
      </button>
    </div>
  );
}

export default AddProblem;
