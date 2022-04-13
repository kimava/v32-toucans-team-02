import React, { useState } from 'react';

export const SearchContext = React.createContext({
  resultBooks: {},
  setResult: () => {},
});

const ResultProvider = (props) => {
  const [bookResult, setBookResult] = useState([]);

  const setFinalResult = (list) => {
    if (bookResult.length > 0) {
      setBookResult([]);
    }
    setBookResult(list);
  };
  return (
    <SearchContext.Provider
      value={{
        resultBooks: bookResult,
        setResult: setFinalResult,
      }}
    >
      {props.children}
    </SearchContext.Provider>
  );
};
export default ResultProvider;
