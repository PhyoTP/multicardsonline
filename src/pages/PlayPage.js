import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import Loader from "./Loader";
import Error from "./Error";
const PlayPage = () => {
    const { id } = useParams();
    const { data, loading, error } = useFetch(`https://phyotp.pythonanywhere.com/api/multicards/set/${id}`);

  // Handle loading and error states
    if (loading) {
        return <Loader />;
    }

    if (error) {
        return <Error error={error} />;
    }

  // Safely handle cards data
    const cards = data?.cards || [];

    return (
        <h2>Play</h2>
    );
};
    
export default PlayPage;