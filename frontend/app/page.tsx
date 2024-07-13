import Book from "@/components/Book";
import Dial from "@/components/Dial";
import Form from "@/components/Form";
import Header from "@/components/Header";
import History from "@/components/History";

export default function Home() {
  return (
    <>
      <Header />
      <section>
        <Form />
        <Dial />
        <Book />
        <History />
      </section>
    </>
  );
}
