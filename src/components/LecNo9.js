import { useContext, useState } from "react";
import { AppContext } from "../components/LecNo8";

const LecNo9 = () => {
  const { setUsername } = useContext(AppContext);

  const [newUsername, setNewUsername] = useState("");

  return (
    <div>
      <input
        onChange={event => {
          setNewUsername(event.target.value);
        }}
      />
      <br />
      <button
        onClick={() => {
          setUsername(newUsername);
        }}
      >
        Change Name
      </button>
    </div>
  );
};

export default LecNo9;
