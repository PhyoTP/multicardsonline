import React, { useState, useEffect, useRef } from "react";
import Card from "./Card";

const Flashcards = ({ cards, questionSides, answerSides }) => {
  const [maxHeight, setMaxHeight] = useState(100); // Start with a default minimum height
  const [dunnoCards, setDunnoCards] = useState([]);
  const [allCards, setAllCards] = useState([...cards]);
  const [doneCards, setDoneCards] = useState([]);
  const resetHeightRef = useRef(false); // Ref to track when to reset height

  // Handle the empty stack condition
  useEffect(() => {
    if (allCards.length === 0) {
      console.log("All cards are done!");
      
      // Set the flag to reset height on next render
      resetHeightRef.current = true;
      
      if (dunnoCards.length === 0) {
        // All cards known
        const restart = window.confirm("Do you want to restart?");
        if (restart) {
          setAllCards(cards);
          setDoneCards([]);
        } else {
          window.location.reload();
        }
      } else {
        // Some cards unknown
        console.log("Restarting");
        const restartWithUnknown = window.confirm("Do you want to restart with unknown cards?");
        if (restartWithUnknown) {
          setAllCards([...dunnoCards]);
          setDunnoCards([]);
          setDoneCards([]);
        } else {
          setAllCards(cards);
          setDoneCards([]);
          setDunnoCards([]);
        }
      }
    }
  }, [allCards.length]);

  // Separate effect to handle height reset after cards are updated
  useEffect(() => {
    if (resetHeightRef.current && allCards.length > 0) {
      // Reset height after cards have been repopulated
      setMaxHeight(100);
      resetHeightRef.current = false;
    }
  }, [allCards]);

  const add = (know) => {
    if (allCards.length === 0) return; // Guard clause

    const newElement = allCards[allCards.length - 1];
    
    setAllCards((prevCards) => prevCards.slice(0, -1));
    
    if (!know) {
      setDunnoCards((prevCards) => [...prevCards, newElement]);
    }
    
    setDoneCards((prevCards) => [...prevCards, [newElement, know]]);
  };

  const undo = () => {
    if (doneCards.length === 0) return; // Guard clause

    // Get the last element without mutating the array
    const lastElement = doneCards[doneCards.length - 1];
    
    setDoneCards((prevCards) => prevCards.slice(0, -1));
    
    if (!lastElement[1]) {
      setDunnoCards((prevCards) => prevCards.slice(0, -1));
    }
    
    setAllCards((prevCards) => [...prevCards, lastElement[0]]);
  };

  return (
    <div>
      <h2>Flashcards</h2>
      <section id="flashcards" style={{height: `${maxHeight + 100}px`}}>
        <div className="spacer"/>
        <button 
          id="know" 
          className="flashcard-buttons" 
          onClick={() => add(true)}
          disabled={allCards.length === 0}
        >
          Know
        </button>
        <div className="spacer"/>
        <div id="stack">
          {allCards.map((card, index) => (
            <Card 
              key={`card-${index}-${resetHeightRef.current}`} 
              card={card} 
              questionSide={questionSides} 
              answerSide={answerSides} 
              maxHeight={maxHeight} 
              setMaxHeight={setMaxHeight} 
            />
          ))}
        </div>
        <div className="spacer"/>
        <button 
          id="dunno" 
          className="flashcard-buttons" 
          onClick={() => add(false)}
          disabled={allCards.length === 0}
        >
          Don't know
        </button>
        <div className="spacer"/>
      </section>
      <div style={{display: "flex", flexDirection: "row"}}>
        <div className="spacer"/>
        {doneCards.length > 0 && 
          <button id="flashcards-undo" onClick={undo}>Undo</button>
        }
        <div className="spacer"/>
      </div>
    </div>
  );
};

export default Flashcards;