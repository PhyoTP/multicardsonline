import React from "react";
import styled from "styled-components";

const Error = ({ error }) => {
    const reload = () => {
        window.location.reload();
    }
  return (
    <StyledWrapper>
      <div className="error">
        <div className="error__icon">
          <svg
            fill="none"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m13 13h-2v-6h2zm0 4h-2v-2h2zm-1-15c-1.3132 0-2.61358.25866-3.82683.7612-1.21326.50255-2.31565 1.23915-3.24424 2.16773-1.87536 1.87537-2.92893 4.41891-2.92893 7.07107 0 2.6522 1.05357 5.1957 2.92893 7.0711.92859.9286 2.03098 1.6651 3.24424 2.1677 1.21325.5025 2.51363.7612 3.82683.7612 2.6522 0 5.1957-1.0536 7.0711-2.9289 1.8753-1.8754 2.9289-4.4189 2.9289-7.0711 0-1.3132-.2587-2.61358-.7612-3.82683-.5026-1.21326-1.2391-2.31565-2.1677-3.24424-.9286-.92858-2.031-1.66518-3.2443-2.16773-1.2132-.50254-2.5136-.7612-3.8268-.7612z"
              fill="#393a37"
            />
          </svg>
        </div>
        <div className="error__title">Error: {error}</div>
        <button className="error__close" onClick={reload}>
        <svg
            height="20"
            viewBox="0 0 25 25"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.5 2c-5.288 0-9.649 3.914-10.377 9h-3.123l4 5.917 4-5.917h-2.847c.711-3.972 4.174-7 8.347-7 4.687 0 8.5 3.813 8.5 8.5s-3.813 8.5-8.5 8.5c-3.015 0-5.662-1.583-7.171-3.957l-1.2 1.775c1.916 2.536 4.948 4.182 8.371 4.182 5.797 0 10.5-4.702 10.5-10.5s-4.703-10.5-10.5-10.5z"
              fill="#3B2400"
            />
          </svg>
        </button>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  @font-face {
    font-family: 'AvenirMedium';
    src: url('AvenirMedium.ttf') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  .error {
  font-family: AvenirMedium;
  width: 320px;
  padding: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  background: #E4941B;
  border-radius: 8px;
  box-shadow: 0px 0px 5px -3px #111;
}

.error__icon {
  width: 20px;
  height: 20px;
  transform: translateY(-2px);
  margin-right: 8px;
}

.error__icon path {
  fill: #3B2400;
}

.error__title {
  font-weight: 500;
  font-size: 14px;
  color: white;
}

.error__close {
  width: 20px;
  height: 20px;
  border: none;
  background: none;
  margin-left: auto;
  cursor: pointer;
}

.error__close path {
  fill: #71192F;
}
`;

export default Error;
