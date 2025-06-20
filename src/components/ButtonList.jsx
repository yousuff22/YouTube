import React from "react";
import Button from "./Button";

const ButtonList = () => {
  return (
    <div className="flex">
      <Button name="All" />
      <Button name="Songs" />
      <Button name="Gaming" />
      <Button name="Live" />
      <Button name="Cricket" />
      <Button name="Comedy" />
      <Button name="News" />
      <Button name="Music" />
      <Button name="Slills" />
      <Button name="Cook" />
      <Button name="Postcast" />
    </div>
  );
};

export default ButtonList;
