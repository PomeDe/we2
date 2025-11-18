"use client";
import { useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);
  const [sum, setSum] = useState(0);
  const [max, setMax] = useState(0);
  const [average, setAv] = useState(0);
  let n1, n2, n3,n4,n5,n6,n7,n8, name;
  const Sum = function (a, b) {
    setSum(a + b);
  };
  const Max = function (a, b, c) {
    if (a > b && a > c) {
      setMax(a);
    } else if (b > a && b > c) {
      setMax(b);
    } else {
      setMax(c);
    }
  };
  const Avg = function (a, b, c) {
    setAv((a + b + c) / 3);
  };
  function Calc() {
    n1 = parseFloat(document.getElementById("num1").value);
    n2 = parseFloat(document.getElementById("num2").value);
    n3 = parseFloat(document.getElementById("num3").value);
    n4 = parseFloat(document.getElementById("num4").value);
    n5 = parseFloat(document.getElementById("num5").value);
    n6 = parseFloat(document.getElementById("num6").value);
    n7 = parseFloat(document.getElementById("num7").value);
    n8 = parseFloat(document.getElementById("num8").value);
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("num3").value = "";
   document.getElementById("num4").value= "";
    document.getElementById("num5").value= "";
    document.getElementById("num6").value= "";
    document.getElementById("num7").value="";
    document.getElementById("num8").value="";
    name = document.getElementById("name").value;
     document.getElementById("name").value = "";
    data.push({ name });
    Sum(n1, n2);
    Max(n3, n4, n5);
    Avg(n6, n7, n8);
  }
  console.log(data);
  return (
    <div className="w-screen h-screen bg-white flex-col justify-center items-center ">
      <div className="w-full flex-col justify-around">
          <input
        type="text"
        placeholder="Enter name"
        className="p-2 m-2 border-2"
        id="name"
      />
      <div className="flex-row justify-between h-20">
        <input
          type="number"
          placeholder="Enter first number"
          className="p-2 m-2 border-2"
          id="num1"
        />
        <input
          type="number"
          placeholder="Enter first number"
          className="p-2 m-2 border-2"
          id="num2"
        />
      </div>
      <div className="flex-row justify-between h-20">
        <input
          type="number"
          placeholder="Enter first number"
          className="p-2 m-2 border-2"
          id="num3"
        />
        <input
          type="number"
          placeholder="Enter first number"
          className="p-2 m-2 border-2"
          id="num4"
        />
        <input
          type="number"
          placeholder="Enter first number"
          className="p-2 m-2 border-2"
          id="num5"
        />
      </div>
      <div className="flex-row justify-between h-20">
        <input
          type="number"
          placeholder="Enter first number"
          className="p-2 m-2 border-2"
          id="num6"
        />
        <input
          type="number"
          placeholder="Enter first number"
          className="p-2 m-2 border-2"
          id="num7"
        />
        <input
          type="number"
          placeholder="Enter first number"
          className="p-2 m-2 border-2"
          id="num8"
        />
      </div>
      </div>
    

      <button className="p-2 m-2 bg-blue-500 text-white" onClick={() => Calc()}>
        Submit
      </button>
      <div className="m-4 p-4 border space-x-3">
        <h2 className="text-xl font-bold">Results:</h2>
        <span>Sum: {sum}</span>
        <span>Max: {max}</span>
        <span>Average: {average}</span>
      </div>
      <p>Names:</p>
      {data.map((item, index) => (
        <li key={index}>{item.name}</li>
      ))}
    </div>
  );
}
