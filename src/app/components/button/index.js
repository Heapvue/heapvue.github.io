import React from "react";

export const Button = ({ text, type, dataBsToggle, dataBsTarget, disabled, onClick}) => {
  return <button className="btnP" type={type} data-bs-toggle={dataBsToggle} data-bs-target={dataBsTarget} disabled={disabled} onClick={onClick}>{text}</button>;
};

export const ButtonSecondry = ({ text, type, dataBsToggle, dataBsTarget, disabled, onClick }) => {
  return <button className="btnS" type={type} data-bs-toggle={dataBsToggle} data-bs-target={dataBsTarget} disabled={disabled} onClick={onClick}>{text}</button>;
};
