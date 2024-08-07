"use client";

import { useState, useEffect } from 'react';
import Book from "@/app/components/Book";
import Form from "@/app/components/Form";
import Phonebook from "@/app/components/Phonebook";
import Loading from "@/app/components/Loading";
import Contacts from './interfaces/Contacts';
import getContacts from './utils/getContacts';
import deleteContacts from './utils/deleteContact';

export default function Home() {
  const [contacts, setContacts] = useState<Contacts[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchContacts = async () => {
    setLoading(true);
    const result = await getContacts();
    setContacts(result);
    setLoading(false);
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const handleAddContact = async () => {
    await fetchContacts();
  };

  const handleDelete = async (id: number) => {
    try {
      setLoading(true);
      await deleteContacts(id);
      setContacts(contacts.filter(contact => contact.id !== id));
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const handleUpdate = async () => {
    await fetchContacts();
  };

  return (
    <>
      <section className="container mx-auto p-4">
        {loading && <Loading />}
        <div className="flex justify-center gap-4 mb-4">
          <Form onAddContact={handleAddContact} />
          <Book contacts={contacts} />
        </div>
        <Phonebook contacts={contacts} onDelete={handleDelete} onUpdate={handleUpdate} />
      </section>
    </>
  );
}
