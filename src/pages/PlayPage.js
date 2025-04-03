import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import Loader from "./Loader";
import Error from "./Error";
import { useState, useEffect } from "react";
import Flashcards from "./Flashcards";
import { jwt } from "./PhyoID";

const PlayPage = () => {
    const { id } = useParams();
    const [secureData, setSecureData] = useState(null);
    const [secureLoading, setSecureLoading] = useState(false);
    const [secureError, setSecureError] = useState(null);

    const { data, loading, error } = useFetch(`https://api.phyotp.dev/multicards/set/${id}`);

    // Move all hooks to the top level to avoid conditional hook issues
    const [mode, setMode] = useState("");
    const [questionSides, setQuestionSides] = useState([]);
    const [answerSides, setAnswerSides] = useState([]);

    const options = [
        "Flashcards",
        //"Match",
        //"Write"
    ];


    useEffect(() => {
        if (error && jwt) {
            console.log("Fetching user sets...");
            setSecureLoading(true);
            fetch(`https://api.phyotp.dev/phyoid/userdata/sets`, {
                headers: { Authorization: `Bearer ${jwt}` },
            })
            .then((res) => res.json())
            .then((data) => {
                console.log("Fetched user sets:", data);
                setSecureData(data);
            })
            .catch((err) => {
                console.error("Error fetching user sets:", err);
                setSecureError(err);
            })
            .finally(() => setSecureLoading(false));
        }
    }, [error, id]);
    
    
      if (loading || secureLoading) return <Loader />;
      if (error && !secureData) return <Error error={error} />;
      if (secureError) return <Error error={secureError} />;
    
      const finalData = secureData.filter((set) => set.id === id)[0] || data.filter((set) => set.id === id)[0];
      const cards = finalData?.cards || [];
    console.log(cards)
    // Extract unique keys from card sides
    let keys = [];
    for (let card of cards) {
        for (let key in card.sides) {
            if (!keys.includes(key)) {
                keys.push(key);
            }
        }
    }
    const onOptionChangeHandler = (event) => {
        setMode(event.target.value);
        console.log("User Selected Value - ", event.target.value);
        console.log(cards)
    };
    const onQuestionSidesChange = (event) => {
        const selectedOptions = Array.from(event.target.selectedOptions, option => option.value);
        setQuestionSides(selectedOptions);
        console.log("Question Sides Selected - ", selectedOptions);
    };

    const onAnswerSidesChange = (event) => {
        const selectedOptions = Array.from(event.target.selectedOptions, option => option.value);
        setAnswerSides(selectedOptions);
        console.log("Answer Sides Selected - ", selectedOptions);
    };

    return (
        <div>
            {finalData ? (
                <div>
                    <h2>Play</h2>
                    <div className="stuff">
                        <select value={mode} onChange={onOptionChangeHandler}>
                            <option value="" disabled>Select Mode</option>
                            {options.map((option, index) => (
                                <option key={index} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                        <section style={{display: "flex", flexDirection: "row"}}>
                            <div>
                                <label>Choose Question Sides:</label><br />
                                <select
                                    multiple
                                    value={questionSides}
                                    onChange={onQuestionSidesChange}
                                >
                                    {keys.map((key, index) => (
                                        <option key={index} value={key}>
                                            {key}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <hr style={{margin: "1vw"}}></hr>
                            <div>
                                <label>Choose Answer Sides:</label><br />
                                <select
                                    multiple
                                    value={answerSides}
                                    onChange={onAnswerSidesChange}
                                >
                                    {keys.map((key, index) => (
                                        <option key={index} value={key}>
                                            {key}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </section>
                        <footer>Hold Ctrl or Cmd to select more than one</footer>
                    </div>
                    {questionSides.length > 0 && answerSides.length > 0 && (
                        <>
                            {mode === "Flashcards" && (
                                <Flashcards cards={cards} questionSides={questionSides} answerSides={answerSides} />
                            )}
                            {/* Add more modes here */}
                        </>
                    )}

                </div>
            ) : <Error error="Unknown"/>}
        </div>
    );
};

export default PlayPage;
