const deleteContacts = async (id: number): Promise<void> => {
    const url = `http://localhost:3000/phone_numbers/${id}`;

    const res = await fetch(url, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
    });

    if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
    }

    return await res.json();
}

export default deleteContacts;
