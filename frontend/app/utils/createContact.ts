import Contacts from "../interfaces/Contacts";
import ContactPost from "../interfaces/ContactsPost";

const createContacts = async (body: ContactPost): Promise<Contacts[]> => {
    console.log("🚀 ~ createContacts ~ body:", body)
    const url = "http://localhost:3000/phone_numbers";

    const res = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body),
    });
    console.log(res);
    

    if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
    }

    return await res.json();
}

export default createContacts;
