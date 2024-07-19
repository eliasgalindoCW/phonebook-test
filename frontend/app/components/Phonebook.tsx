"use client";

import { useState, useEffect } from "react";
import Contacts from "../interfaces/Contacts";
import updateContacts from "../utils/updateContact";
import formatPhoneNumber from "../utils/formatPhoneNumber";

interface PhonebookProps {
  contacts: Contacts[];
  onDelete: (id: number) => void;
  onUpdate: () => void; 
}

const Phonebook = ({ contacts, onDelete, onUpdate }: PhonebookProps) => {
  const [editContact, setEditContact] = useState<Contacts | null>(null);
  const [editName, setEditName] = useState<string>("");
  const [editPhoneNumber, setEditPhoneNumber] = useState<string>("");
  const [editNotes, setEditNotes] = useState<string>("");
  const [filter, setFilter] = useState<string>("");
  const [filteredContacts, setFilteredContacts] = useState<Contacts[]>(contacts);

  useEffect(() => {
    setFilteredContacts(
      contacts.filter(
        (contact) =>
          contact.name.toLowerCase().includes(filter.toLowerCase()) ||
          contact.phone_number.includes(filter) ||
          contact.notes?.toLowerCase().includes(filter) ||
          contact.id?.toString().includes(filter)
      )
    );
  }, [filter, contacts]);

  const handleEdit = (contact: Contacts) => {
    setEditContact(contact);
    setEditName(contact.name);
    setEditPhoneNumber(contact.phone_number);
    setEditNotes(contact.notes || "");
  };

  const handleUpdateContact = async (contactId: number) => {
    try {
      const updatedContact = {
        name: editName,
        phone_number: formatPhoneNumber(editPhoneNumber),
        notes: editNotes,
      };

      await updateContacts(contactId, updatedContact);

      setEditContact(null);
      onUpdate();
    } catch (error) {
      console.error("Failed to update contact:", error);
    }
  };

  return (
    <div className="p-6 shadow-2xl  rounded-lg w-full">
      <h2 className="text-2xl font-bold mb-4">📒 Phonebook</h2>
      <input
        type="text"
        placeholder="Filter contacts..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="mb-4 p-2 border  rounded w-full"
      />
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="py-2">ID</th>
            <th className="py-2">Name</th>
            <th className="py-2">Phone Number</th>
            <th className="py-2">Notes</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredContacts.map((contact) => (
            <tr
              key={contact.id}
              className="text-center"
            >
              <td className="border px-4 py-2"><p>#{contact.id}</p></td>
              <td className="border px-4 py-2 font-bold">
                {editContact?.id === contact.id ? (
                  <input
                    type="text"
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                    className="border px-2 py-1"
                  />
                ) : (
                  contact.name
                )}
              </td>
              <td className="border px-4 py-2">
                {editContact?.id === contact.id ? (
                  <input
                    type="text"
                    value={editPhoneNumber}
                    onChange={(e) => setEditPhoneNumber(e.target.value)}
                    className="border px-2 py-1"
                  />
                ) : (
                  <p>📞{contact.phone_number}</p>
                )}
              </td>
              <td className="border px-4 py-2">
                {editContact?.id === contact.id ? (
                  <input
                    type="text"
                    value={editNotes}
                    onChange={(e) => setEditNotes(e.target.value)}
                    className="border px-2 py-1"
                  />
                ) : (
                  <>
                  {contact.notes && <p>📝{contact.notes}</p>}
                  </>
                )}
              </td>
              <td className="border px-4 py-2">
                {editContact?.id === contact.id ? (
                  <>
                    <button
                      onClick={() => handleUpdateContact(contact.id)}
                      className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded mr-1"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setEditContact(null)}
                      className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded"
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => handleEdit(contact)}
                      className="bg-yellow-400 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded mr-1"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => onDelete(contact.id)}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                    >
                      Delete
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Phonebook;
