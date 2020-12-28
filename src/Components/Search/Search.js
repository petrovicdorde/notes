import React, { useEffect, useState } from "react";

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
      item.problem.includes(value)
    );
    setData(filteredData);
  };

  return (
    <div className="search">
      <p>Search Problem</p>
      <input type="text" onChange={handleSearchChange} />
      <table>
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
      </table>
    </div>
  );
};

export default Search;
