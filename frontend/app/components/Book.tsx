"use client";

import { useState } from "react";
import Contacts from "../interfaces/Contacts";
import updateContacts from "../utils/updateContact";

interface BookProps {
  contacts: Contacts[];
  onAddNote: () => void;
}

const Book = ({ contacts, onAddNote }: BookProps) => {
  const [selectedContact, setSelectedContact] = useState<Contacts | any>();
  const [note, setNote] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);

  const handleAddNote = async (contactId: number) => {
    try {
      await updateContacts(contactId, { notes: note });

      onAddNote();
      setSelectedContact(null);
      setNote("");
    } catch (error) {
      console.error("Failed to update contact:", error);
    }
  };

  const lastFiveContacts = contacts.slice(-4);

  return (
    <div className="w-3/4 p-4 bg-white shadow-2xl rounded-lg flex flex-col">
      <h2 className="text-2xl font-bold mb-4 text-center">Last Contacts</h2>
      {!open && (
        <>
          <ul className="mb-6">
            {lastFiveContacts.map((contact) => (
              <li key={contact.id} className="border-b py-2">
                <div className="flex justify-between items-center">
                  <div>
                    <p><b>Name: </b>
                      {contact.name}
                    </p>
                    <p>📞 {contact.phone_number}</p>
                  </div>
                  <button
                    onClick={() => setSelectedContact(contact.id)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                  >
                    Add Note
                  </button>
                </div>
                {selectedContact === contact.id && (
                  <div className="mt-2">
                    <input
                      type="text"
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                      className="w-full px-3 py-2 border rounded mb-2"
                      placeholder="Enter note"
                    />
                    <button
                      onClick={() => handleAddNote(contact.id)}
                      className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded mr-1"
                    >
                      Save Note
                    </button>
                    <button
                      onClick={() => setSelectedContact(null)}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                    >
                      Close
                    </button>
                  </div>
                )}
                {contact.notes && (
                  <p className="mt-2 text-gray-600">📔 {contact.notes}</p>
                )}
              </li>
            ))}
          </ul>
        </>
      )}
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-1 rounded text-center"
        onClick={() => setOpen(!open)}
      >
        {open ? "Hide All Contacts" : "Show All Contacts"}
      </button>
      {open && (
        <ul>
          {contacts.map((contact) => (
            <li key={contact.id} className="border-b py-2">
              <div className="flex justify-between items-center">
                <div>
                  <p>
                    <b>Name: </b>{contact.name}
                  </p>
                  <p>📞 {contact.phone_number}</p>
                </div>
                <button
                  onClick={() => setSelectedContact(contact.id)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                >
                  Add Note
                </button>
              </div>
              {selectedContact === contact.id && (
                <div className="mt-2">
                  <input
                    type="text"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    className="w-full px-3 py-2 border rounded mb-2"
                    placeholder="Enter note"
                  />
                  <button
                    onClick={() => handleAddNote(contact.id)}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded mr-1"
                  >
                    Save Note
                  </button>
                  <button
                    onClick={() => setSelectedContact(null)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                  >
                    Close
                  </button>
                </div>
              )}
              {contact.notes && (
                <p className="mt-2 text-gray-600">📔 {contact.notes}</p>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Book;
