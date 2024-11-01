import React, { useState, useEffect, useRef } from "react";
import { Container, Form } from "react-bootstrap";

const Search = ({ getSearchTerm }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    getSearchTerm(searchTerm);
    setSearchTerm("");
  };

  return (
    <>
      <Container className="mb-5">
        <form onSubmit={handleSubmit}>
          <Form.Control
            type="text"
            id="inputPassword5"
            placeholder="What are you looking for today...?"
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
            value={searchTerm}
            className="form-input"
            ref={inputRef}
          />
          <button type="submit" className="form-btn">
            <i class="bi bi-search"></i>
          </button>
        </form>
      </Container>
    </>
  );
};

export default Search;
