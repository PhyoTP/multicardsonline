import { jwt } from "./PhyoID";
import useFetch from "./useFetch";
import { Link } from "react-router-dom";
import Loader from "./Loader";
import Error from "./Error";
import Search from "./Search";
import { useState } from "react";
const Library = () =>{
    const { data, loading, error } = useFetch("https://api.phyotp.dev/phyoid/userdata/sets", {
        headers: {
            Authorization: `Bearer ${jwt}`,
        },
    });
    const [ query, searchNew ] = useState("");
    if (jwt===""){
        return <h2>Please log in again</h2>
    }else{
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
                <h2>Library</h2>
                <Search query={query} onSearch={searchNew} />
                <main id="feed">
                {data && 
                    filteredData.map((item) => (
                    <Link to={`/set/${item.id}`} key={item.id} className="square">
                        <h3>{item.name}</h3>
                        <p>By {item.creator || "Deleted User"}</p>
                    </Link>
                    ))
                }
                </main>
            </>
        )
    }
}
export default Library;