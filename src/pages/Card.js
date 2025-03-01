import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Card = ({ card, questionSide, answerSide, maxHeight, setMaxHeight }) => {
  const [flipped, setFlipped] = useState(false);
  const cardRef = useRef(null);
  const flip = () => {
    setFlipped((prev) => !prev);
  };

  // Update the max height based on this card's content
  useEffect(() => {
    if (cardRef.current) {
      setMaxHeight((prev) => Math.max(prev, cardRef.current.scrollHeight));
      console.log(maxHeight);
    }
  }, [questionSide, answerSide]);

  return (
    <StyledWrapper onClick={flip}>
      <div className={`flip-card ${flipped ? "active" : ""}`} style={{height: `${maxHeight + 50}px`}}>
        <div ref={cardRef} className="flip-card-inner">
          <div className="flip-card-front">
            {questionSide.map((side, index) => (
              <div key={index}>
                <p className="title">{card.sides[side]}</p>
                <p>{side}</p>
              </div>
            ))}
          </div>
          <div className="flip-card-back">
            {answerSide.map((side, index) => (
              <div key={index}>
                <p className="title">{card.sides[side]}</p>
                <p>{side}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .flip-card {
    background-color: transparent;
    width: 190px;
    perspective: 1000px;
    font-family: sans-serif;
    border: none;
    cursor: pointer;
    display: inline-flex; /* Ensures it expands properly */
    flex-direction: column;
  }

  .title {
    font-size: 1.5em;
    font-weight: 900;
    text-align: center;
    margin: 0;
  }

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }

  .flip-card.active .flip-card-inner {
    transform: rotateY(180deg);
  }

  .flip-card-front,
  .flip-card-back {
    box-shadow: 0 8px 14px 0 rgba(0, 0, 0, 0.2);
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    min-height: inherit; /* Uses dynamic height */
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border: 1px solid #e4941b;
    border-radius: 1rem;
    height: 100%;
  }

  .flip-card-front {
    background: linear-gradient(
      120deg,
      #3b2400 60%,
      #3b2400 88%,
      rgb(255, 211, 195) 40%,
      #e4941b 48%
    );
    color: #e4941b;
  }

  .flip-card-back {
    background: linear-gradient(
      120deg,
      #e4941b 30%,
      #e4941b 88%,
      bisque 40%,
      #3b2400 78%
    );
    color: #3b2400;
    transform: rotateY(180deg);
  }
`;

export default Card;
