const ShowList = ({ countryList, setCountryList }) => {
  const deleteCountryHandler = (id) => {
    if (confirm("정말 삭제하시겠습니까?")) {
      const removedCountryList = countryList.filter(
        (country) => country.id !== id
      );
      setCountryList(removedCountryList);
    } else {
      alert("삭제를 취소하셨습니다.");
    }
  };
  if (countryList.length > 0) {
    return (
      <table>
        <thead>
          <tr>
            <td>국가명</td>
            <td>금메달</td>
            <td>은메달</td>
            <td>동메달</td>
          </tr>
        </thead>
        <tbody>
          {countryList.map((country) => {
            return (
              <tr key={country.id}>
                <td>{country.name}</td>
                <td>{country.gold}</td>
                <td>{country.silver}</td>
                <td>{country.bronze}</td>
                <button onChange={deleteCountryHandler(country.id)}>
                  삭제
                </button>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  } else {
    return <h2>아직 추가된 국가가 없습니다. 메달을 추적하세요!</h2>;
  }
};

export default ShowList;
