import React, { useState } from "react";
import "./MultistepForm.scss";


function MultistepForm() {
 const [form, setForm] = useState({
   email: "",
   name: "",
   password: "",
 });
 const [count, setCount] = useState(1);


 const updateForm = (e) => {
   setForm({
     ...form,
     [e.target.name]: e.target.value,
   });
 };


 return (
   <div className="App">
     <h1>Step {count} of 3</h1>
     <StepIndicator count={count} />
     <FormStep count={count} form={form} updateForm={updateForm} />
     <button
       className="btn btn-dark"
       type="submit"
       onClick={() => setCount(count - 1)}
       disabled={count < 2}
     >
       Back
     </button>
     <button
       className="btn btn-light"
       type="submit"
       onClick={() => setCount(count + 1)}
       disabled={count > 2}
     >
       Next
     </button>
   </div>
 );
}


function FormStep({ count, form, updateForm }) {
 switch (count) {
   case 1:
     return (
       <div className="form-group">
         <label>Email</label>
         <input
           type="email"
           className="form-control"
           name="email"
           onChange={updateForm}
           value={form.email}
         />
       </div>
     );
   case 2:
     return (
       <div className="form-group">
         <label>Name</label>
         <input
           type="text"
           className="form-control"
           name="name"
           onChange={updateForm}
           value={form.name}
         />
       </div>
     );
   case 3:
     return (
       <div className="form-group">
         <label>Password</label>
         <input
           type="password"
           className="form-control"
           name="password"
           onChange={updateForm}
           value={form.password}
         />
         <button className="btn btn-primary" type="submit">
           Submit
         </button>
       </div>
     );
   default:
     return null;
 }
}


function StepIndicator({ count }) {
 const dots = [
   { id: 1, active: count === 1 },
   { id: 2, active: count === 2 },
   { id: 3, active: count === 3 },
 ];


 return (
   <div className="step-indicator">
     {dots.map((dot) => (
       <div
         key={dot.id}
         className={`step-dot${dot.active ? " active" : ""}`}
       ></div>
     ))}
   </div>
 );
}


export default MultistepForm;
