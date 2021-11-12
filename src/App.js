import React from "react";
//import logo from "./logo.svg";
import "./styles.css";
import { Trans, useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="App">
      <h1>{t("title")}</h1>
      <button onClick={() => changeLanguage("en")}>EN</button>
      <button onClick={() => changeLanguage("de")}>DE</button>
      <hr />
      {/* <Trans i18nKey="description.part1">
        To get started, edit <code>src/App.js</code> and save to reload.
      </Trans>
      <Trans i18nKey="description.part2">
        To get started, edit <code>src/App.js</code> and save to reload.
      </Trans> */}
      <div>{t("description.part1")}</div>
      <div>{t("description.part2")}</div>
    </div>
  );
}

export default App;
