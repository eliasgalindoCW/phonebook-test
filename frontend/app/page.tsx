import Book from "@/components/Book";
import Form from "@/components/Form";
import History from "@/components/History";

export default function Home() {
  return (
    <>
      <section className="m-1 p-1">
        <Form />
        <Book />
        <History />
      </section>
    </>
  );
}
