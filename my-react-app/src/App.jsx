
import React, {useState,useEffect} from "react";
import "./App.css";
import Axios from 'axios'
function App()
{
const[rollno,setRollno]= useState("");
const[name,setStudentName]= useState("");
const[branch,setBranch]= useState("");
const[promoted,setStatus]= useState("");
const[credits,setCredits]= useState("");
const submitReview=()=>
{
Axios.post('http://localhost:9000/students',
{rollno:rollno,
name:name,
branch:branch,
promoted:promoted,
credits:credits}).then(()=>
{
alert("success");
});
};
return (
<div className="App">
<h1>CRUD Application Demo</h1>
<div className="information">
<label><b>Student Rollno</b></label>
<input
type="number"
name="rollno"
onChange={(e)=>{
setRollno(e.target.value);
}}
required/>
<label><b>Student Name</b></label>
<input
type="text"
name="name"
onChange={(e)=>{
setStudentName(e.target.value);
}}
required/>
<label><b>Branch</b></label>
<input
type="text"
name="branch"
onChange={(e)=>{
setBranch(e.target.value);
}}
required/>
<label><b>Status</b></label>
<input
type="boolean"
name="promoted"
onChange={(e)=>{
setStatus(e.target.value);
}}
required/>
<label><b>Student Credits</b></label>
<input
type="number"
name="credits"
onChange={(e)=>{
setCredits(e.target.value);
}}
required/>
<button onClick={submitReview}><b>Submit</b></button>
</div>
</div>);
}
export default App;


