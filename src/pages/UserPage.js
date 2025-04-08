import { useParams, Link } from 'react-router-dom';
import useFetch from './useFetch';
import Loader from './Loader';
import Error from './Error';
const UserPage = () => {
    const { name } = useParams();
    const { data, loading, error } = useFetch(`https://api.phyotp.dev/phyoid/user/${name}`);
    if (loading) return <Loader />;
    if (error) return <Error error={error} />;

    return (
        <>
            <h1>{name}'s Profile</h1>
            <h2>User Sets</h2>
            <div className="feed">
            {data.sets.user ? 
                data.sets.user.map((item) => (
                    <Link to={`/set/${item.id}`} key={item.id} className="square">
                        <h3>{item.name}</h3>
                        {item.cardCount && <p>{item.cardCount} terms</p>}
                    </Link>
                )) : <p>No user sets</p>
            }
            </div>
            <h2>Saved Sets</h2>
            <div className="feed">
            {data.sets.saved ?
                data.sets.saved.map((item) => (
                    <Link to={`/set/${item.id}`} key={item.id} className="square">
                        <h3>{item.name}</h3>
                        <p>By {item.creator || "Deleted User"}</p>
                        {item.cardCount && <p>{item.cardCount} terms</p>}
                    </Link>
                )) : <p>No saved sets</p>
            }
            </div>
        </>
    );
}
export default UserPage;