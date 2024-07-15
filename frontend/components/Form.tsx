"use client";

import { useState, useRef } from "react";
import Dial from "./Dial";
import InputMask from "react-input-mask";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const inputRef = useRef(null);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("Adding Contact:", { name, phoneNumber });
    setName("");
    setPhoneNumber("");
  };

  const handleNumberClick = (number: string) => {
    setPhoneNumber((prev) => prev + number);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 border rounded"
          placeholder="Enter contact name"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="phoneNumber"
          className="block text-gray-700 font-bold mb-2"
        >
          Phone Number
        </label>
        <input
          type="text"
          id="phoneNumber"
          className="w-full px-3 py-2 border rounded"
          placeholder="Enter phone number"
          required
          disabled
        />
      </div>
      <Dial onNumberClick={handleNumberClick} />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
      >
        Add Contact
      </button>
    </form>
  );
}
