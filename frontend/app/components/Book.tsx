"use client";

import Contacts from "../interfaces/Contacts";

interface BookProps {
  contacts: Contacts[];
}

const Book = ({ contacts }: BookProps) => {
  const sortedContacts = contacts.slice().sort((a, b) => {
    return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
  });

  const lastFiveContacts = sortedContacts.slice(0, 5);

  return (
    <div className="w-2/3 px-6 py-4  shadow-2xl rounded-lg flex flex-col">
      <h2 className="text-2xl font-bold mb-4 text-center">Last 5 Contacts Added</h2>
      <ul className="mb-6">
        {lastFiveContacts.map((contact) => (
          <li key={contact.id} className="border-b py-2">
            <div className="flex justify-between items-center">
              <div>
                <p>
                  <b>{contact.name}</b>
                </p>
                <p>📞{contact.phone_number}</p>
              </div>
            </div>
            {contact.notes && (
              <p className="mt-2 text-gray-600">📝{contact.notes}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Book;
