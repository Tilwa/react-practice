import { useContext } from "react";
import { AppContext } from "../components/LecNo8";

import LecNo9 from "../components/LecNo9";

const Menu = () => {
  const { username } = useContext(AppContext);
  return (
    <div>
      This is you home page {username}
      <LecNo9 />
    </div>
  );
};

export default Menu;
