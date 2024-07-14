export default function Header() {
  return (
    <header className="bg-purple-950 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Phonebook App</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="/add" className="hover:text-gray-300">
                Add Contact
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-gray-300">
                About
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
