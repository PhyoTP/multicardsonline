import useFetch from "./useFetch";
import { Link } from "react-router-dom";

const Home = () => {
  const { data, loading, error } = useFetch("https://phyotp.pythonanywhere.com/api/multicards/sets");

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  return (
    <>
      <h2>Home</h2>
      {data && 
        data.map((item) => (
          <Link to={`/set/${item.id}`} key={item.id} className="stuff">
            <h3>{item.name}</h3>
            <p>By {item.creator}</p>
          </Link>
        ))
      }
    </>
  );
};

export default Home;
