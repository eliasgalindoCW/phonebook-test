import Book from "@/components/Book";
import Dial from "@/components/Dial";
import Form from "@/components/Form";
import History from "@/components/History";

export default function Home() {
  return (
    <>
      <section className="m-1 p-1">
        <Form />
        <Dial />
        <Book />
        <History />
      </section>
    </>
  );
}
