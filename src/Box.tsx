import React, { useCallback } from "react";
import "./Box.css";

export interface BoxProps {
  name: string;
  age: number;
}

export const Box: React.FC<BoxProps> = React.memo((props: BoxProps) => {
  console.log("BOX RENDERED!");

  const [boxCounter, setBoxCounter] = React.useState(0);

  const handleClick = useCallback(() => {
    setBoxCounter((prev) => prev + 1);
  }, []);

  return (
    <div className="theBox">
      <h1>{props.name}</h1>
      <p>Age (from parent): {props.age}</p>
      <p>Box Counter (from me) {boxCounter}</p>
      <BoxButton onClick={handleClick} />
    </div>
  );
});

interface ButtonProps {
  onClick: () => void;
}

export const BoxButton: React.FC<ButtonProps> = React.memo(({ onClick }) => {
  console.log("BOXBUTTON RENDERED!");
  return <button onClick={onClick}>Click me</button>;
});
