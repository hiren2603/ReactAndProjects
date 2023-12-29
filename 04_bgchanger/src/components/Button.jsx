import React from "react";

const Button = ({ color, changeBg }) => {
  const name = color[0].toUpperCase() + color.slice(1);

  return (
    <button
      className="outline-none px-4 py-2 rounded-full text-white shadow-sm"
      style={{ backgroundColor: color }}
      onClick={() => changeBg(color)}
    >
      {name}
    </button>
  );
};

export default Button;
