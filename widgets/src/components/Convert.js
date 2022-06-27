import React, { useState, useEffect } from 'react';
import googleTranslate from '../api/googleTranslate';

const translateText = async (targetLanguage, text, cb) => {
  const response = await googleTranslate.post(
    '/v2',
    {},
    {
      params: {
        target: targetLanguage,
        q: text,
      },
    }
  );
  cb(response.data.data.translations[0].translatedText);
};

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState('');
  const [debouncedText, setDebouncedText] = useState(text);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedText(text);
    }, 500);
    return () => {
      clearTimeout(timerId);
    };
  }, [text]);

  useEffect(() => {
    if (debouncedText) {
      translateText(language.value, debouncedText, (translatedText) =>
        setTranslated(translatedText)
      );
    }
  }, [language, debouncedText]);

  return <h4 className="ui header">{translated}</h4>;
};

export default Convert;
