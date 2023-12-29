import { useState } from "react";
import Button from "./components/Button";

function App() {
  const [color, setColor] = useState("black");
  const changeBg = (colorName) => {
    setColor(colorName);
  };
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div
          className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 
        py-2 rounded-3xl"
        >
          <Button color="red" changeBg={changeBg} />
          <Button color="blue" changeBg={changeBg} />
          <Button color="green" changeBg={changeBg} />
          <Button color="black" changeBg={changeBg} />
        </div>
      </div>
    </div>
  );
}

export default App;
