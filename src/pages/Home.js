import useFetch from "./useFetch";
import { Link } from "react-router-dom";
import Loader from "./Loader";
import Error from "./Error";

const Home = () => {
  const { data, loading, error } = useFetch("https://phyotp.pythonanywhere.com/api/multicards/sets");

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Error error={error} />;
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
