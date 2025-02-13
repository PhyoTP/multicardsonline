import React from 'react';
import styled from 'styled-components';

const Card = () => {
  const flip = (event) => {
    event.currentTarget.classList.toggle('active'); // Ensure the button is toggled
    console.log('flip');
  };

  return (
    <StyledWrapper>
      <button onClick={flip} className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <p className="title">FLIP CARD</p>
            <p>Hover Me</p>
          </div>
          <div className="flip-card-back">
            <p className="title">BACK</p>
            <p>Leave Me</p>
          </div>
        </div>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .flip-card {
    background-color: transparent;
    width: 190px;
    height: 254px;
    perspective: 1000px;
    font-family: sans-serif;
    border: none;
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

  .flip-card-front, .flip-card-back {
    box-shadow: 0 8px 14px 0 rgba(0, 0, 0, 0.2);
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border: 1px solid #e4941b;
    border-radius: 1rem;
  }

  .flip-card-front {
    background: linear-gradient(120deg, #3b2400 60%, #3b2400 88%, rgb(255, 211, 195) 40%, #e4941b 48%);
    color: #e4941b;
  }

  .flip-card-back {
    background: linear-gradient(120deg, #e4941b 30%, #e4941b 88%, bisque 40%, #3b2400 78%);
    color: #3b2400;
    transform: rotateY(180deg);
  }
`;

export default Card;
