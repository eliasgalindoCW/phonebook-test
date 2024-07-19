import Book from '@/app/components/Book';
import Contacts from '@/app/interfaces/Contacts';
import { render } from '@testing-library/react';


const contacts: Contacts[] = [
  {
    id: 1, name: 'Alice', phone_number: '1234567890', notes: 'Friend'
  },
  {
    id: 2, name: 'Bob', phone_number: '0987654321', notes: 'Colleague'
  },
];

describe('Book Component', () => {
  it('should render the last 5 contacts', () => {
    const { getByText } = render(<Book contacts={contacts} />);

    expect(getByText('Alice')).toBeInTheDocument();
    expect(getByText('Bob')).toBeInTheDocument();
  });
});
