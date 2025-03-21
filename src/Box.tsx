import React from "react";
import "./Box.css";

export interface BoxProps {
  name: string;
  age: number;
}

export const Box: React.FC<BoxProps> = React.memo((props: BoxProps) => {
  console.log("BOX RENDERED!");

  return (
    <div className="theBox">
      <h1>{props.name}</h1>
      <p>Age (from parent): {props.age}</p>
    </div>
  );
});
