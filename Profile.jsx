import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProfileCard from "../components/ProfileCard";

function Profile(){

  const [user,setUser] = useState({});
  const navigate = useNavigate();

  useEffect(()=>{

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if(!storedUser){
      navigate("/login");   // redirect if not logged in
    }
    else{
      setUser(storedUser);
    }

  },[navigate]);

  return(

    <div className="container">

      <ProfileCard user={user}/>

    </div>

  );

}

export default Profile;