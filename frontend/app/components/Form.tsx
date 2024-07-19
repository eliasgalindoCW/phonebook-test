"use client";

import { useState } from "react";
import Dial from "./Dial";
import createContacts from "../utils/createContact";
import ContactPost from "../interfaces/ContactsPost";
import Loading from "./Loading";
import formatPhoneNumber from "../utils/formatPhoneNumber";

interface FormProps {
  onAddContact: () => void;
}

export default function ContactForm({ onAddContact }: FormProps) {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const maxLength = 11;

  const transformRequestBody = (data: ContactPost) => {
    return {
      phone_number: {
        name: data.name,
        phone_number: formatPhoneNumber(data.phone_number),
        notes: data.notes || "",
      },
    };
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const requestBody = transformRequestBody({
        name,
        phone_number: phoneNumber,
      });

      await createContacts(requestBody as any);
      onAddContact();
      setName("");
      setPhoneNumber("");
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
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
      {isLoading && <Loading />}
      <form
        onSubmit={handleSubmit}
        className="w-1/4  p-4 shadow-2xl rounded-lg flex flex-col self-center text-center"
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
            type="tel"
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
              ❌
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
