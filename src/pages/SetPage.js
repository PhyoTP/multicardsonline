import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const SetPage = () => {
  // Extract the 'id' from the URL parameters
  const { id } = useParams();
  const { data, loading, error } = useFetch(`https://phyotp.pythonanywhere.com/api/multicards/set/${id}`);

  // Handle loading and error states
  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  // Safely handle cards data
  const cards = data?.cards || [];

  return (
    <div>
      {data && (
        <div>
          <div key={data.id}>
            <h3>{data.name || "No name provided"}</h3>
            <p>By {data.creator || "Unknown creator"}</p>
            <p>Public: {data.isPublic ? "Yes" : "No"}</p>
          </div>
          <table className="stuff">
            <thead>
              <tr>
                {/* Headers for keys in `sides` will be dynamic */}
                {cards.length > 0 && Object.keys(cards[0].sides).map((key) => (
                  <th key={key}>{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {cards.length > 0 ? (
                cards.map((card) => (
                  <tr key={card.id}>
                    {/* Render values for each key in `sides` dynamically */}
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
