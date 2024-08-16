import { useState } from "react";
import MedalInput from "./MedalInput";
import { v4 as uuid } from "uuid";

const InputArea = ({ countryList, setCountryList }) => {
  const [name, setName] = useState("");
  const [medals, setMedals] = useState({ gold: 0, silver: 0, bronze: 0 });

  const medalInputList = [
    { name: "금메달", objKey: "gold", numberOfMedal: medals.gold },
    { name: "은메달", objKey: "silver", numberOfMedal: medals.silver },
    { name: "동메달", objKey: "bronze", numberOfMedal: medals.bronze },
  ];

  const enteredCountry = {
    id: uuid(),
    name: name,
    gold: medals.gold,
    silver: medals.silver,
    bronze: medals.bronze,
  };

  const medalNumberChange = (event) => {
    const { name, value } = event.target;
    setMedals((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const resetInput = () => {
    setName("");
    setMedals({ gold: 0, silver: 0, bronze: 0 });
  };

  const addCountryHandler = () => {
    if (!enteredCountry.name) {
      alert("국가명을 입력해주세요.");
      return;
    }
    if (countryList.some((country) => country.name === enteredCountry.name)) {
      alert("이미 존재하는 국가입니다. 업데이트 버튼을 눌러주세요.");
      return;
    }
    setCountryList([...countryList, enteredCountry]);
    resetInput();
    alert("국가가 추가되었습니다.");
  };

  const updateCountryHandler = () => {
    if (!countryList.some((country) => country.name === enteredCountry.name)) {
      alert("존재하지 않는 국가입니다. 추가 버튼을 눌러주세요");
      return;
    }
    const removePreInfo = countryList.filter(
      (country) => country.name !== enteredCountry.name
    );
    setCountryList([...removePreInfo, enteredCountry]);
    resetInput;
    alert("국가 정보가 업데이트 되었습니다.");
  };
  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      {medalInputList.map((medal) => {
        return (
          <MedalInput
            key={medal.name}
            medal={medal}
            medalNumberChange={medalNumberChange}
          />
        );
      })}
      <button onClick={() => addCountryHandler(enteredCountry.id)}>
        추가하기
      </button>
      <button onClick={() => updateCountryHandler(enteredCountry.id)}>
        업데이트
      </button>
    </>
  );
};

export default InputArea;
