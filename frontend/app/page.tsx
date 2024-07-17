"use client";

import { useState, useEffect } from 'react';
import Book from "@/app/components/Book";
import Form from "@/app/components/Form";
import History from "@/app/components/History";
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
    }
  };

  return (
    <>
      <section className="container mx-auto p-4">
        {loading && <Loading />}
        <div className="flex justify-between gap-4 mb-4">
          <Form onAddContact={handleAddContact} />
          <Book contacts={contacts} onAddNote={handleAddContact} />
        </div>
        <History contacts={contacts} onDelete={handleDelete} />
      </section>
    </>
  );
}
