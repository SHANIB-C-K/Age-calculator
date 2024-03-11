import React from "react";
import { useState } from "react";

const App = () => {
  const [birthDate, setBirthDate] = useState("");
  const [age, setAge] = useState("");

  const calculateAge = () => {
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    let calculatedAge = today.getFullYear() - birthDateObj.getFullYear();
    const monthDiff = today.getMonth() - birthDateObj.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDateObj.getDate())
    ) {
      calculatedAge--;
    }
    setAge(calculatedAge);
  };

  return (
    <>
      <div className="h-screen w-screen flex flex-col items-center justify-center">
        <div>
          <h2>Age Calculator</h2>
          <label htmlFor="birthDate">Enter your birthdate:</label>
          <input
            type="date"
            id="birthDate"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
          />
          <button onClick={calculateAge}>Calculate Age</button>
          {age !== "" && <p>Your age is: {age}</p>}
        </div>
      </div>
    </>
  );
};

export default App;
