import React from "react";
import styled from "styled-components";

const Search = ({ query, onSearch }) => {
  return (
    <StyledWrapper>
      <div className="InputContainer">
        <input
          placeholder="Search.."
          id="input"
          className="input"
          name="text"
          type="text"
          value={query}
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .InputContainer {
  width: 95vw;
  height: 10vmin;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to bottom,rgb(227, 213, 255),rgb(255, 231, 231));
  border-radius: 10vmin;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.075);
}

.input {
  width: 90vw;
  height: 8vmin;
  border: none;
  outline: none;
  caret-color: rgb(255, 81, 0);
  background-color: rgb(255, 255, 255);
  border-radius: 10vmin;
  padding-left: 15px;
  letter-spacing: 0.8px;
  color: rgb(19, 19, 19);
  font-size: inherit;
}

`;

export default Search;
