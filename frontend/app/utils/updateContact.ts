import ContactsUpdate from "../interfaces/ContactsUpdate";

const updateContacts = async (id: number, body: ContactsUpdate): Promise<void> => {
  const url = `http://localhost:3000/phone_numbers/${id}`;

  const formattedBody = {
    phone_number: body
  };

  const res = await fetch(url, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formattedBody),
  });
  
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }

  return await res.json();
}

export default updateContacts;
