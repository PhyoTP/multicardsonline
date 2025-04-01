import { jwt } from "./PhyoID";
import useFetch from "./useFetch";
import { Link } from "react-router-dom";
import Loader from "./Loader";
import Error from "./Error";
import Search from "./Search";
const Library = () =>{
    if (jwt===""){
        return <h2>Please log in again</h2>
    }else{
        return (
            <h2>Library</h2>
        )
    }
}
export default Library;