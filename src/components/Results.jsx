import React from "react";

const Results = ({ results, errorMsg, loding }) => {
  return (
    <>
      <div class="results container">
        {errorMsg !== "" ? <div class="error">{errorMsg}</div> : ""}
        {loding ? <div class="loading"></div> : ""}

        {results.length > 0 && (
          <div class="articles">
            {results.map((article, i) => {
              return (
                <div key={i}>
                  <a
                    href={`http://en.wikipedia.org/?curid=${article.pageid}`}
                    target="_blank"
                  >
                    <h4>{article.title}</h4>
                    <p> {article.snippet} </p>
                  </a>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default Results;
