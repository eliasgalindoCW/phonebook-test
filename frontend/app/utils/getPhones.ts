import Contacts from "../interfaces/Contacts";

const getPhones = async (): Promise<Contacts[]> => {
    const url = "http://localhost:3000/phone_numbers";

    const res = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });

    if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
    }

    return await res.json();
}

export default getPhones;
