import React from "react";

export const Button = ({ text, type, dataBsToggle, dataBsTarget, disabled }) => {
  return <button className="btnP" type={type} data-bs-toggle={dataBsToggle} data-bs-target={dataBsTarget} disabled={disabled}>{text}</button>;
};

export const ButtonSecondry = ({ text, type, dataBsToggle, dataBsTarget, disabled }) => {
  return <button className="btnS" type={type} data-bs-toggle={dataBsToggle} data-bs-target={dataBsTarget} disabled={disabled}>{text}</button>;
};
