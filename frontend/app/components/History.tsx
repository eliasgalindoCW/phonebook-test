"use client";

import Contacts from "../interfaces/Contacts";

interface HistoryProps {
  contacts: Contacts[];
  onDelete: (id: number) => void;
}

const History = ({ contacts, onDelete }: HistoryProps) => {
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
              className="bg-yellow-50 text-center"
            >
              <td className="border px-4 py-2">{contact.id}</td>
              <td className="border px-4 py-2 font-bold">{contact.name}</td>
              <td className="border px-4 py-2">📞{contact.phone_number}</td>
              <td className="border px-4 py-2">{contact.notes && (
                <p className="mt-2 text-gray-600">📔 {contact.notes}</p>
              )}</td>
              <td className="border px-4 py-2">
                <button
                  onClick={() => onDelete(contact.id)}
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
