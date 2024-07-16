"use client";

import { useEffect, useState } from "react";
import getPhones from "../utils/getPhones";
import Contacts from "../interfaces/Contacts";

const Book = () => {
  const [selectedContact, setSelectedContact] = useState<Contacts | any>();
  const [note, setNote] = useState("");
  const [updatedContacts, setUpdatedContacts] = useState<Contacts[]>([]);
  const [open, setOpen] = useState(false);
  
  useEffect(() => {
    const getContacts = async () => {
      const result = await getPhones();
      setUpdatedContacts(result);
    }

    getContacts();
  }, [])
  

  const handleAddNote = (contactId: number) => {
    const newContacts = updatedContacts.map((contact: any) => {
      if (contact.id === contactId) {
        return { ...contact, notes: note };
      }
      return contact;
    });
    setUpdatedContacts(newContacts);
    setSelectedContact(null);
    setNote("");
  };

  const lastFiveContacts = updatedContacts.slice(-5);

  return (
    <div className="w-3/4 p-4 bg-white shadow-2xl rounded-lg flex flex-col">
      <h2 className="text-2xl font-bold mb-4">Last 5 Contacts</h2>
      <ul className="mb-6">
        {lastFiveContacts.map((contact) => (
          <li key={contact.id} className="border-b py-2">
            <div className="flex justify-between items-center">
              <div>
                <p>
                  <b>{contact.name}</b>
                </p>
                <p>{contact.phone_number}</p>
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
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded"
                >
                  Save Note
                </button>
              </div>
            )}
            {contact.notes && (
              <p className="mt-2 text-gray-600">{contact.notes}</p>
            )}
          </li>
        ))}
      </ul>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-1 rounded text-center"
        onClick={() => setOpen(!open)}
      >
        {open ? "Hide All Contacts" : "Show All Contacts"}
      </button>
      {open && (
        <ul>
          {updatedContacts.map((contact) => (
            <li key={contact.id} className="border-b py-2">
              <div className="flex justify-between items-center">
                <div>
                  <p>
                    <b>{contact.name}</b>
                  </p>
                  <p>{contact.phone_number}</p>
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
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded"
                  >
                    Save Note
                  </button>
                </div>
              )}
              {contact.notes && (
                <p className="mt-2 text-gray-600">{contact.notes}</p>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Book;
