function ProfileCard({user}){

return(

<div className="profile-card">

<img
src={user.image || "https://i.pravatar.cc/120"}
className="avatar"
/>

<h2>{user.name}</h2>

<p><b>Email:</b> {user.email}</p>
<p><b>Phone:</b> {user.phone}</p>
<p><b>Address:</b> {user.address}</p>

</div>

);

}

export default ProfileCard;
