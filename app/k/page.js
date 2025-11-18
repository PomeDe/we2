"use client";
import { useState } from "react";

export default function Home() {
  const [grade, setGrade] = useState(0);
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [school, setSchool] = useState("");
  const [students, setStuds] = useState([]);
  const Subm = () => {
    if(name !=""&& lastname!=""&&school!=""&&grade!=0){
       const S = {
      name,
      lastname,
      school,
      grade,
    };
    setStuds([...students, S]);
    setName("");
    setGrade("");
    setSchool("");
    setLastname("");
    }
    else{
      alert("fill all of the input boxes please?!");
    }
  };
  return (
    <div className="p-20 flex-col flex space-y-10 w-full justify-center items-center">
      <h2 className="text-blue-300 text-2xl font-bold">Student Info Form</h2>

      <input
        type="text"
        placeholder="Firstname"
        value={name}
        className="border-2 rounded-md "
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Lastname"
        value={lastname}
                className="border-2 rounded-md"
        onChange={(e) => setLastname(e.target.value)}
      />
      <input
        type="number"
        placeholder="Grade"
        value={grade}
                className="border-2 rounded-md"
        onChange={(e) => setGrade(e.target.value)}
      />
      <input
        type="text"
        placeholder="School"
        value={school}
                className="border-2 rounded-md"
        onChange={(e) => setSchool(e.target.value)}
      />
      <button onClick={() => Subm()} className="text-green-500 hover:cursor-pointer border-4 rounded-md border-black w-20 h-8">Submit</button>
      <ul className="flex flex-row space-x-10">
        {students.map((e,i)=>(
            <div className="">
            <li key={i}>
                <p>Name: {e.name + " "+ e.lastname}</p>
                <p>Grade: {e.grade}</p>
                <p>School: {e.school}</p>
            </li>
            </div>
 
        ))

        }
      </ul>
    </div>
  );
}
