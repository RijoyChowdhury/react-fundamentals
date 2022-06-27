import React, { useState, useEffect } from 'react';
import Wiki, { articleUrl } from '../api/wiki';
import './Search.css';

// helper function
const searchWiki = async (term, cb) => {
  const response = await Wiki.get('/api.php', {
    params: {
      srsearch: term,
    },
  });
  cb(response.data.query.search);
};

const Search = () => {
  const [term, setTerm] = useState('');
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState([]);

  // [] => run at initial render
  // [data] => run at initial render and after every rerender if data has changed
  // <no array object> => run at initial render and after every rerender
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 500);

    // we are only allowed to return a single function
    // this is called a clean up function
    // useEffect returns a handle on this function
    // and calls it before subsequent useEffect execution
    return () => {
      clearTimeout(timeoutId);
    };
  }, [term]);

  useEffect(() => {
    if (debouncedTerm)
      searchWiki(debouncedTerm, (result) => setResults(result));
  }, [debouncedTerm]);

  const renderedResults = results.map((result) => {
    return (
      <div className="item" key={result.pageid}>
        <div className="right floated content">
          <a
            className="ui button"
            href={`${articleUrl}?curid=${result.pageid}`}
            target="_blank"
            rel="noreferrer"
          >
            Read Article
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            value={term}
            className="input"
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;
