import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState, useRef } from "react";
import Todos from "./Todos";

function App() {
  // useRef Example

  // const [inpVal, setInpVal] = useState("");
  // const prevInpVal = useRef("");
  // const count = useRef(0);
  // useEffect(() => {
  //   count.current = count.current + 1;
  // });
  // return (
  //   <div className="App">
  //     <input
  //       type="text"
  //       value={inpVal}
  //       onChange={(e) => setInpVal(e.target.value)}
  //     />
  //     <h1>Count: {count.current}</h1>
  //   </div>
  // );

  // const inputEle = useRef();
  // const focusInput = () => {
  //   inputEle.current.focus();
  // };

  // return (
  //   <>
  //     <input type="text" ref={inputEle} />
  //     <button onClick={focusInput}>Focus Input</button>
  //   </>
  // );

  // useEffect(() => {
  //   prevInpVal.current = inpVal;
  // }, [inpVal]);

  // return (
  //   <>
  //     <input
  //       type="text"
  //       value={inpVal}
  //       onChange={(e) => setInpVal(e.target.value)}
  //     />
  //     <h2>Current Value: {inpVal}</h2>
  //     <h2>Prev Value: {prevInpVal.current}</h2>
  //   </>
  // );

  // Memo Example

  // const [count, setCount] = useState(0);
  // const [todos, setTodos] = useState(["Todo 1", "Todo 2"]);

  // const increment = () => {
  //   setCount(count + 1);
  // };

  // return (
  //   <>
  //     <Todos todos={todos} />
  //     <hr />
  //     <div>
  //       Count: {count}
  //       <button onClick={increment}>Increment</button>
  //     </div>
  //   </>
  // );

  // useMemo Example

  // const [count, setCount] = useState(0);
  // const calculation = useMemo(() => {
  //   expensiveCalculation(count);
  // }, [count]);

  // const expensiveCalculation = (num) => {
  //   console.log("Calculating...");
  //   for (let i = 0; i < 1000000000; i++) {
  //     num += 1;
  //   }
  //   return num;
  // };

  // return (
  //   <>
  //     <hr />
  //     <div>
  //       Count: {count}
  //       <button onClick={increment}>Increment</button>
  //     </div>
  //     <h2>Expensive Calculation: {calculation}</h2>
  //   </>
  // );

  // Counter Program

  // const [count, setCount] = useState(0);

  // const increment = () => {
  //   setCount(count + 1);
  // };

  // const decrement = () => {
  //   setCount(count - 1);
  // };

  // return (
  //   <>
  //     <hr />
  //     <div>
  //       <button onClick={increment}>Increment</button>
  //       Count: {count}
  //       <button onClick={decrement} disabled={count === 0}>
  //         Decrement
  //       </button>
  //     </div>
  //   </>
  // );

  // Fetch API Program

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos");
        const resData = await res.json();
        setData(resData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data.length > 0 ? (
        <div>
          {data.map((item) => {
            return (
              <div key={item?.id}>
                <h2>{item?.title}</h2>
              </div>
            );
          })}
        </div>
      ) : (
        <div>Data are not available</div>
      )}
    </div>
  );
}

export default App;
