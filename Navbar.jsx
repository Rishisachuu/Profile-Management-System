import { Link, useNavigate } from "react-router-dom";

function Navbar(){

const navigate = useNavigate();

const logout = () =>{
localStorage.removeItem("user");
navigate("/login");
};

return(

<nav>

<Link to="/">Home</Link>
<Link to="/login">Login</Link>
<Link to="/profile">Profile</Link>
<Link to="/edit">Edit Profile</Link>

<button onClick={logout}>Logout</button>

</nav>

);
}

export default Navbar;