import React from "react";
import { ButtonProps } from "./Button.types";

export const Button = ({ label, disabled = false }: ButtonProps) => {
  return (
    <button disabled={disabled} style={{ backgroundColor: disabled ? "#ccc" : "#007bff", color: "white" }}>
      {label}
    </button>
  );
};