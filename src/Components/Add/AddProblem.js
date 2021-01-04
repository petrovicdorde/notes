import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./Add.sass";

function AddProblem() {
  const [problems, setProblems] = useState([]);
  const [pas, setPas] = useState({ problem: "", solution: "" });
  const [errors, setErrors] = useState({
    problem: [],
    solution: [],
  });

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
    setErrors({
      problem: pas.problem === "" ? ["Obavezno polje"] : [],
      solution: pas.solution === "" ? ["Obavezno polje"] : [],
    });

    if (pas.problem === "" || pas.solution === "") return;

    addIntoProblems(pas);
    setPas({ problem: "", solution: "" });
  };

  return (
    <Form
      onChange={(event) => {
        setPas({ ...pas, [event.target.id]: event.target.value });
      }}
      className="add"
    >
      <Form.Group controlId="problem">
        <Form.Label>Problem</Form.Label>
        <Form.Control placeholder="Unesite Problem" value={pas.problem} />
        <Form.Text className={`${errors.problem.length ? "invalid" : "valid"}`}>
          {errors.problem.map((error) => (
            <div>{error}</div>
          ))}
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="solution">
        <Form.Label>Solution</Form.Label>
        <Form.Control placeholder="Solution" value={pas.solution} />
        <Form.Text
          className={`${errors.solution.length ? "invalid" : "valid"}`}
        >
          {errors.solution.map((error) => (
            <div>{error}</div>
          ))}
        </Form.Text>
      </Form.Group>
      <Button
        variant="primary"
        type="button"
        onClick={() => {
          addSolution();
        }}
      >
        Add
      </Button>
    </Form>
  );
}

export default AddProblem;
