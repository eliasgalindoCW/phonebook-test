import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-purple-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold flex">
          Phonebook App
          <Image
            src={"/icon-phbook.png"}
            width={30}
            height={30}
            alt="phone-book"
            className="ml-2"
          />
        </h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="hover:text-gray-300">
                Logout
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
