import React from "react";
import "./Box.css";

export interface BoxProps {
  name: string;
  age: number;
}

export const Box: React.FC<BoxProps> = React.memo((props: BoxProps) => {
  console.log("Box component rendered");
  return (
    <div className="theBox">
      <h1>{props.name}</h1>
      <p>Age (from parent): {props.age}</p>
      <p>Box Counter (from me) {/*???*/}</p>
      <button onClick={/*???*/}>Count!</button>
    </div>
  );
});
