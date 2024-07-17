"use client";

const Dial = ({ onNumberClick }: any) => {
  const buttons = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "*", "0", "#"];

  const handleButtonClick = (button: string) => {
    onNumberClick(button);
  };

  return (
    <div className="grid grid-cols-3 gap-1">
      {buttons.map((button) => (
        <button
          key={button}
          type="button"
          onClick={() => handleButtonClick(button)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {button}
        </button>
      ))}
    </div>
  );
};

export default Dial;
