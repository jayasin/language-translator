import React, { useEffect, useState } from "react";
import translate from "translate";

const Translator = (props) => {
  const { text, language } = props;

  const [translatedText, setTranslatedText] = useState("");

  const translateText = async () => {
    try {
      const translatedText = await translate(text, language);
      setTranslatedText(translatedText);
    } catch (error) {
      setTranslatedText("");
      console.log("Unable to Translate", { error, text });
    }
  };

  useEffect(() => {
    translateText();
  }, [text, language]);

  return <div>{translatedText}</div>;
};

export default Translator;
