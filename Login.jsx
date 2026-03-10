import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login(){

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [phone,setPhone] = useState("");
  const [address,setAddress] = useState("");
  const [image,setImage] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e)=>{

    e.preventDefault();

    const user = {
      name,
      email,
      phone,
      address,
      image
    };

    localStorage.setItem("user", JSON.stringify(user));

    // clear form
    setName("");
    setEmail("");
    setPhone("");
    setAddress("");
    setImage("");

    navigate("/profile");

  };

  return(

    <div className="container">

      <form onSubmit={handleLogin}>

        <h2>User Login</h2>

        <input
          placeholder="Enter Name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />

        <input
          placeholder="Enter Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          placeholder="Enter Phone Number"
          value={phone}
          onChange={(e)=>setPhone(e.target.value)}
        />

        <input
          placeholder="Enter Address"
          value={address}
          onChange={(e)=>setAddress(e.target.value)}
        />

        <input
          placeholder="Enter Profile Image URL"
          value={image}
          onChange={(e)=>setImage(e.target.value)}
        />

        <button type="submit">Login</button>

      </form>

    </div>

  );

}

export default Login;