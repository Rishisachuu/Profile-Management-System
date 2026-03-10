import { useState } from "react";

function EditProfile() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Profile Updated");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Profile</h2>

      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      <input
        type="text"
        placeholder="Phone"
        onChange={(e) => setPhone(e.target.value)}
      />

      <br /><br />

      <button type="submit">Save</button>
    </form>
  );
}

export default EditProfile;
