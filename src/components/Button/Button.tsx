import React from "react";
import { ButtonProps } from "./Button.types";
import "./Button.css";

export const Button = ({ label, disabled = false }: ButtonProps) => {
  return (
    <button disabled={disabled} style={{ backgroundColor: disabled ? "#ccc" : "#007bff", color: "pink" }}>
      {label}
    </button>
  );
};