"use client";

import { useState } from "react";
import Dial from "./Dial";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const maxLength = 11;

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("Adding Contact:", { name, phoneNumber });
    setName("");
    setPhoneNumber("");
  };

  const handleNumberClick = (number: string) => {
    setPhoneNumber((prev) => {
      if (prev.length < maxLength) {
        return prev + number;
      }
      return prev;
    });
  };

  const handleDeleteClick = () => {
    setPhoneNumber((prev) => prev.slice(0, -1));
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-1/4 bg-white p-4 shadow-2xl rounded-lg flex flex-col self-center text-center"
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border rounded text-center"
            placeholder="Enter contact name"
            required
          />
        </div>
        <div className="mb-4 relative">
          <label
            htmlFor="phoneNumber"
            className="block text-gray-700 font-bold mb-2 text-center"
          >
            Phone Number
          </label>
          <input
            onChange={(e) => setPhoneNumber(e.target.value)}
            value={phoneNumber}
            type="text"
            id="phoneNumber"
            maxLength={maxLength}
            className="w-full px-3 py-2 border rounded text-center"
            placeholder="Enter phone number: (99)99999-9999"
            required
          />
          {phoneNumber.length > 0 && (
            <button
              type="button"
              onClick={handleDeleteClick}
              className="absolute right-1 mt-5 transform -translate-y-1/2 rounded"
            >
              ⏪
            </button>
          )}
        </div>
        <Dial onNumberClick={handleNumberClick} />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        >
          Add Contact
        </button>
      </form>
    </>
  );
}
