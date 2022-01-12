import React from "react";
export default function App() {
  const [response, setResponse] = React.useState([]);
  const fetchData = async (id) => {
    const response = await fetch(`http://localhost:4000/movies?id=${id}`);
    const responseData = await response.json();
    setResponse([...responseData.data]);
  };
  console.log(response);
  return (
    <div className="App">
      <div>
        <button
          onClick={() => {
            fetchData(1);
          }}
        >
          1
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            fetchData(2);
          }}
        >
          2
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            fetchData(3);
          }}
        >
          3
        </button>
      </div>
      {response.length > 0 && (
        <div>
          <h1>{response[0].name}</h1>
          <h2>{response[0].rating}</h2>
        </div>
      )}
    </div>
  );
}
