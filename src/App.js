import React, { useEffect, useState } from "react";
import { url } from "./data/links.js";

import Navigation from "./components/Navigation";
import Search from "./components/Search";
import Results from "./components/Results.jsx";
import ToTop from "./components/ToTop.jsx";

const App = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const [loding, setLoding] = useState(false);
  const [resultsList, setResultsList] = useState([]);

  const fetchUrl = async (term) => {
    try {
      let response = await fetch(`${url}${term}`);
      let data = await response.json();
      let results = data.query.search;

      // result for term search == 0
      if (results.length < 1) {
        setErrorMsg("No matching results. Please try again");
        setLoding(false);
        return [];
      }
      // result for term search == 0
      setLoding(false);
      setErrorMsg("");
      return results;
    } catch (error) {
      console.log("fetchUrl ~ error:", error);
      setErrorMsg("There was an error...");
      setLoding(true);
      return [];
    }
  };

  const getSearchTerm = async (term) => {
    if (term !== "") {
      setResultsList([]);
      setLoding(true);
      setErrorMsg("");
      let arrayOfResults = await fetchUrl(term);
      setResultsList(arrayOfResults);
    }
  };

  return (
    <>
      <Navigation />
      <Search getSearchTerm={getSearchTerm} />
      <Results results={resultsList} errorMsg={errorMsg} loding={loding} />
      <ToTop />
    </>
  );
};

export default App;
