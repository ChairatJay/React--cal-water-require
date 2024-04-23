
import React from "react";
import { useState } from "react";

const Water = () => {
  const [weight, setWeight] = useState<number>(0);
  const [heading, setHeading] = useState<string>("?");

  

  const onChangeWeight = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWeight(+event.target.value);
    
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const waterRequire = (weight * 2.2 * 30 / 2).toFixed(2);
    setHeading(waterRequire);
  };

  

  return (
    <>
      <h1>ควรดื่มน้ำวันละเท่าไหร่ ?</h1>
      <h2>{heading} มล.</h2>
      <form onSubmit={onSubmit}>
        <label htmlFor="weight" id="input"> Weight:</label>
        <input type="text" id="input" placeholder="น้ำหนักของคุณ (กิโลกรัม)" onChange={onChangeWeight} />
        <input type="submit" id="input" />
      </form>
    </>
  );
};

export default Water;