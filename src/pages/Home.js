import { useContext } from "react";
import { AppContext } from "../components/LecNo8";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const Home = () => {
  const { data: catData, isLoading, isError, refetch } = useQuery(["cat"], () => {
    return axios.get("https://catfact.ninja/fact").then(res => res.data);
  });

  const { username } = useContext(AppContext);

  if (isError) {
    return <p>Error!!!</p>
  }

  if (isLoading) {
    return <p>Loading Please Wait....</p>
  }
  return (
    <div>
      This is you home page {username}
      <br/><br/>
      <h4>Cat Quotes</h4>
      <p>{catData?.fact}</p>
      <button onClick={refetch}>Refetch</button>
    </div>
  );
};

export default Home;
