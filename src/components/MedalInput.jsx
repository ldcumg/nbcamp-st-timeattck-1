const MedalInput = ({ medal, medalNumberChange }) => {
  return (
    <>
      <label>{medal.name}</label>
      <input
        name={medal.objKey}
        type="number"
        value={medal.numberOfMedal}
        onChange={(event) => medalNumberChange(event)}
      />
    </>
  );
};

export default MedalInput;
