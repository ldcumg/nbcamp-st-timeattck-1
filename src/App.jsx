import { useState } from "react";
import InputArea from "./components/InputArea";
import ShowList from "./components/ShowList";

const App = () => {
  const { countryList, setCountryList } = useState([]);

  return (
    <div>
      <h1>2024 파리 올림픽</h1>
      <InputArea countryList={countryList} setCountryList={setCountryList} />
      <ShowList countryList={countryList} setCountryList={setCountryList} />
    </div>
  );
};

export default App;
