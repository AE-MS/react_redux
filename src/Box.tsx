import "./Box.css";

export interface BoxProps {
  name: string;
  age: number;
}

export const Box: React.FC<BoxProps> = (props: BoxProps) => {
  return (
    <div className="theBox">
      <h1>{props.name}</h1>
      <p>Age: {props.age}</p>
    </div>
  );
};
