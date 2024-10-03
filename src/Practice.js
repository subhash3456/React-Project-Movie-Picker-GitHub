import { useEffect, useState } from "react";

const Practice = () => {
  const [count, setCount] = useState(100);

  const [emp, setEmp] = useState({ empId: 1, empRollNo: 123 });

  const handleClick = () => setCount(count + 1);

  function handleClick2() {
    setCount(count - 1);
  }

  const handleEmp = (e) => {
    setEmp({
      ...emp,
      empId: e.target.value,
    });
  };

  const handleEmpRoll = (e) => {
    setEmp({
      ...emp,
      empRollNo: e.target.value,
    });
  };

  useEffect(() => {
    document.title = "you are " + count + " fucking idiot";
  });

  // useEffect(() => {
  //   fetch("http://localhost:3500/allMovies")
  //     .then((response) => response.json())
  //     .then((json) => {
  //       setData(json);
  //     })
  //     .catch((error) => console.error("Error: ", error));
  // }, []);

  const [data, setData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("http://localhost:3500/allMovies");

  //       const result = await response.json();
  //       console.log("setting the data here");
  //       setData(result);
  //     } catch (error) {
  //       console.error("Error: ", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3500/allMovies");
        setData(response.data);
      } catch (e) {
        console.error("Error: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      State variable is {count}
      <div>
        <button onClick={handleClick}>increment</button>
        <button onClick={handleClick2}>decrement</button> <br />
        Update the details here <br />
        <button value="12" onClick={handleEmp}>
          update Emp
        </button>
        <button value="234554" onClick={handleEmpRoll}>
          {" "}
          update roll No
        </button>
        <p>employees empId details are {emp.empId}</p>
        <p>empRoll number changed to {emp.empRollNo}</p>
      </div>
      <ul>
        {data.map((d) => (
          <li key={d.id}>
            <h1> {d.name}</h1>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Practice;
