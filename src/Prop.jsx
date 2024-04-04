import { useEffect } from "react";

function Word(props) {
  useEffect(() => {
    console.log(props);
  }, []);
  return (
    <div>
      <h1 className="text-3xl font-bold">Hello {props.name}!</h1>
    </div>
  );
}
export default Word;
