import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import useFetch from "./useFetch";
import Loader from "./Loader";
import Error from "./Error";
import PlayButton from "./PlayButton";
import { jwt } from "./PhyoID"; // Assume you have a function to retrieve the JWT

const SetPage = () => {
  const { id } = useParams();
  const [secureData, setSecureData] = useState(null);
  const [secureLoading, setSecureLoading] = useState(false);
  const [secureError, setSecureError] = useState(null);

  const { data, loading, error } = useFetch(`https://api.phyotp.dev/multicards/set/${id}`);

  useEffect(() => {
    if (error && jwt) {
      console.log("user")
      setSecureLoading(true);
      fetch(`https://api.phyotp.dev/phyoid/userdata/sets`, {
        headers: { Authorization: `Bearer ${jwt}` },
      })
        .then((res) => res.json())
        .then(setSecureData)
        .catch(setSecureError)
        .finally(() => setSecureLoading(false));
    }
  }, [error, id]);

  if (loading || secureLoading) return <Loader />;
  if (error && !secureData) return <Error error={error} />;
  if (secureError) return <Error error={secureError} />;

  const finalData = secureData?.filter((set) => set.id === id)[0] || data;
  const cards = finalData?.cards || [];
  return (
    <div>
      {finalData && (
        <div>
          <div key={finalData.id} className="stuff">
            <h3>{finalData.name || "No name provided"}</h3>
            <nav><Link to={`/user/${finalData.creator}`}>By {finalData.creator || "Deleted User"}</Link></nav>
            <PlayButton id={finalData.id} />
          </div>
          <table className="stuff">
            <thead>
              <tr>
                {cards.length > 0 &&
                  Object.keys(cards[0].sides).map((key) => <th key={key}>{key}</th>)}
              </tr>
            </thead>
            <tbody>
              {cards.length > 0 ? (
                cards.map((card) => (
                  <tr key={card.id}>
                    {Object.keys(cards[0].sides).map((key) => (
                      <td key={key}>{card.sides[key] || "No Value"}</td>
                    ))}
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={Object.keys(cards[0]?.sides || {}).length + 1}>No cards available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default SetPage;
