// import { useState } from "react";
// import "./App.css";

// function KennanHelpApp() {
//   const [counter, setCounter] = useState(0);

//   console.log("Component rendered");

//   return (
//     <div>
//       <h1>{counter}</h1>
//       <button
//         onClick={() => {
//           console.log("increment pressed");
//           setCounter(counter + 1);
//         }}
//       ></button>
//     </div>
//   );
// }

// function RonanApp() {
//   // const key = "AIzaSyBEhstCgYZewz3HlAldtxVVIawMqMX5ONI";
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch(
//       "https://www.googleapis.com/civicinfo/v2/representatives?key=AIzaSyBEhstCgYZewz3HlAldtxVVIawMqMX5ONI&address=135%Lantern%20Lane.%20North%20Kingstown%20RI"
//     )
//       .then((response) => response.json())
//       .then((json) => setData(json))
//       .catch((error) => console.error(error));
//   }, []);

//   return (
//     <div>
//       {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : "Loading..."}
//     </div>
//   );
// }

// function Counter() {
//   const [count, setCount] = useState(0);

//   const increment = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={increment}>Increment</button>
//     </div>
//   );
// }

// export default Counter;

//
