import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const PlayButton = ({id}) => {
  return (
    <StyledWrapper>
      <Link to={`/set/${id}/play`} className="button-with-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          id="Play"
          className="icon"
        >
          <path
            d="M12 39c-.549 0-1.095-.15-1.578-.447A3.008 3.008 0 0 1 9 36V12c0-1.041.54-2.007 1.422-2.553a3.014 3.014 0 0 1 2.919-.132l24 12a3.003 3.003 0 0 1 0 5.37l-24 12c-.42.21-.885.315-1.341.315z"
            fill="#ffffff"
            className="color000000 svgShape"
          />
        </svg>
        <span className="text">Play</span>
      </Link>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .button-with-icon {
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #3b2400;
  letter-spacing: 1px;
  padding: 0 12px;
  text-align: center;
  width: 120px;
  height: 40px;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: normal;
  border-radius: 3px;
  outline: none;
  user-select: none;
  cursor: pointer;
  transform: translateY(0px);
  position: relative;
  box-shadow:
    inset 0 30px 30px -15px rgba(255, 255, 255, 0.1),
    inset 0 0 0 1px rgba(255, 255, 255, 0.3),
    inset 0 1px 20px rgba(0, 0, 0, 0),
    0 3px 0 #3b2400,
    0 3px 2px rgba(0, 0, 0, 0.2),
    0 5px 10px rgba(0, 0, 0, 0.1),
    0 10px 20px rgba(0, 0, 0, 0.1);
  background: #e4941b;
  color: white;
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3);
  transition: 150ms all ease-in-out;
}

.button-with-icon .icon {
  margin-right: 8px;
  width: 24px;
  height: 24px;
  transition: all 0.5s ease-in-out;
}

.button-with-icon:active {
  transform: translateY(3px);
  box-shadow:
    inset 0 16px 2px -15px rgba(0, 0, 0, 0),
    inset 0 0 0 1px rgba(255, 255, 255, 0.15),
    inset 0 1px 20px rgba(0, 0, 0, 0.1),
    0 0 0 #0f988e,
    0 0 0 2px rgba(255, 255, 255, 0.5),
    0 0 0 rgba(0, 0, 0, 0),
    0 0 0 rgba(0, 0, 0, 0);
}

.button-with-icon:hover .text {
  transform: translateX(80px);
}
.button-with-icon:hover .icon {
  transform: translate(23px);
}

.text {
  transition: all 0.5s ease-in-out;
}

`;

export default PlayButton;
