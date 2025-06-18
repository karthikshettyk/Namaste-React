import { useState } from "react";
const ContactUs = () => {
  const [name,setName]=useState("");
  const [mobileNo,setMobileNo]=useState("");
  const [emailId,setEmailId]=useState("");

  return (
    <div>
      <div>Contact Us</div>
      <br></br>
      <label>Name:</label>
      <input type="text" placeholder="name" value={name} onChange={(e)=>{
        setName(e.target.value);
      }}></input>
      <br></br>
      <label>Mobile Number:</label>
      <input type="text" placeholder="mobileno" value={mobileNo} onChange={(e)=>{
        setMobileNo(e.target.value);
      }}></input>
      <br></br>
      <label>Email Id:</label>
      <input type="text" placeholder="email" value={emailId} onChange={(e)=>{
        setEmailId(e.target.value);
      }}></input>
      <br></br>
      <button>Submit</button>
    </div>
  );
};

export default ContactUs;
