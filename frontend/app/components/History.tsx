"use client";

import { useState } from "react";

const initialContacts = [
  { id: 1, name: "John Doe", phoneNumber: "+55(11)12345-6789", notes: "" },
  { id: 2, name: "Jane Smith", phoneNumber: "+55(21)98765-4321", notes: "" },
  {
    id: 3,
    name: "Alice Johnson",
    phoneNumber: "+55(31)45678-1234",
    notes: "",
  },
  { id: 4, name: "Bob Brown", phoneNumber: "+55(41)87654-3210", notes: "" },
  {
    id: 5,
    name: "Charlie Davis",
    phoneNumber: "+55(51)13579-2468",
    notes: "",
  },
  { id: 6, name: "Diana Green", phoneNumber: "+55(61)97531-8642", notes: "" },
];

const History = () => {
  const [contacts, setContacts] = useState(initialContacts);

  const handleDelete = (id: number) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  return (
    <div className="p-6 bg-white shadow-2xl rounded-lg w-full">
      <h2 className="text-2xl font-bold mb-4">Contact History</h2>
      <table className="min-w-full bg-white">
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
          {contacts.map((contact) => (
            <tr
              key={contact.id}
              className="text-center odd:bg-slate-400 odd:text-white"
            >
              <td className="border px-4 py-2">{contact.id}</td>
              <td className="border px-4 py-2 font-bold">{contact.name}</td>
              <td className="border px-4 py-2">{contact.phoneNumber}</td>
              <td className="border px-4 py-2">{contact.notes}</td>
              <td className="border px-4 py-2">
                <button
                  onClick={() => handleDelete(contact.id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default History;
