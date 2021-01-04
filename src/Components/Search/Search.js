import React, { useEffect, useState } from "react";
import { Form, InputGroup, Table } from "react-bootstrap";

const Search = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    let tempData = [];

    if (localStorage.data) {
      tempData = JSON.parse(localStorage.data);
    }

    setData(tempData);
  }, []);

  const handleSearchChange = (e) => {
    const value = e.target.value;

    const filteredData = JSON.parse(localStorage.data).filter((item) =>
      item.problem.toLowerCase().includes(value.toLowerCase())
    );
    setData(filteredData);
  };

  return (
    <div className="search">
      <Form onChange={handleSearchChange}>
        <Form.Group>
          <Form.Label>Search Problem</Form.Label>
          <Form.Control placeholder="Search"></Form.Control>
        </Form.Group>
      </Form>
      <Table striped bordered hover size="lg" variant="dark">
        <thead>
          <tr>
            <th>Problem</th>
            <th>Solution</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr>
                <td>{item.problem}</td>
                <td><a href={item.solution} target="_blank">{item.solution}</a></td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Search;
