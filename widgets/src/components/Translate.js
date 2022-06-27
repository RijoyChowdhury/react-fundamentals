import React, { useEffect, useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';
import { languages } from '../api/googleTranslate';

const setAvailableLanguages = async (cb) => {
  const response = await languages.get('/v2/languages');
  cb(response.data.data.languages);
};

const Translate = () => {
  const [languages, setLanguages] = useState([]);
  const [language, setLanguage] = useState({ label: 'Afrikaans', value: 'af' });
  const [text, setText] = useState('');

  useEffect(() => {
    setAvailableLanguages((languages) => {
      const formatedSet = languages.map((item) => ({
        label: item.name,
        value: item.language,
      }));
      setLanguages(formatedSet);
    });
  }, []);

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Input</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      </div>
      <Dropdown
        label="Select a language"
        options={languages}
        selected={language}
        onSelectedChange={setLanguage}
      />
      <h3 className="ui header">Output</h3>
      <Convert language={language} text={text} />
    </div>
  );
};

export default Translate;
