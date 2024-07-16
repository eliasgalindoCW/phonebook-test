import Book from "@/app/components/Book";
import Form from "@/app/components/Form";
import History from "@/app/components/History";

export default function Home() {
  return (
    <>
      <section className="container mx-auto p-4">
        <div className="flex justify-between gap-4 mb-4">
          <Form />
          <Book />
        </div>
        <History />
      </section>
    </>
  );
}
