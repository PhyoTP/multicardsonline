import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import Loader from "./Loader";
import Error from "./Error";
import { useState } from "react";
import Flashcards from "./Flashcards";

const PlayPage = () => {
    const { id } = useParams();
    const { data, loading, error } = useFetch(`https://api.phyotp.dev/multicards/set/${id}`);

    // Move all hooks to the top level to avoid conditional hook issues
    const cards = data?.cards || [];
    const [mode, setMode] = useState("");
    const [questionSides, setQuestionSides] = useState([]);
    const [answerSides, setAnswerSides] = useState([]);

    const options = [
        "Flashcards",
        "Match",
        "Write"
    ];

    const onOptionChangeHandler = (event) => {
        setMode(event.target.value);
        console.log("User Selected Value - ", event.target.value);
    };

    // Handle loading and error states
    if (loading) {
        return <Loader />;
    }

    if (error) {
        return <Error error={error} />;
    }

    // Extract unique keys from card sides
    let keys = [];
    for (let card of cards) {
        for (let key in card.sides) {
            if (!keys.includes(key)) {
                keys.push(key);
            }
        }
    }

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
            {data && (
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
                    {mode === "Flashcards" && (
                        <Flashcards
                            cards={cards}
                            questionSides={questionSides}
                            answerSides={answerSides}
                        />
                    )}
                </div>
            )}
        </div>
    );
};

export default PlayPage;
