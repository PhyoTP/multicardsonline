import useFetch from "./useFetch";
import { Link } from "react-router-dom";
import Loader from "./Loader";
import Error from "./Error";
import Search from "./Search";
import { useState } from "react";

const Home = () => {
  const { data, loading, error } = useFetch("https://api.phyotp.dev/multicards/sets");
  const [ query, searchNew ] = useState("");

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Error error={error} />;
  }

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <>
      <h2>Home</h2>
      <Search query={query} onSearch={searchNew} />
      <main className="feed">
      {data && 
        filteredData.map((item) => (
          <Link to={`/set/${item.id}`} key={item.id} className="square">
            <h3>{item.name}</h3>
            <p>By {item.creator || "Deleted User"}</p>
            <p>{item.cardCount} terms</p>
          </Link>
        ))
      }
      </main>
    </>
  );
};

export default Home;
