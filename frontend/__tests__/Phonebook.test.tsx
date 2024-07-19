import Phonebook from '@/app/components/Phonebook';
import Contacts from '@/app/interfaces/Contacts';
import { render, fireEvent, screen } from '@testing-library/react';


const contacts: Contacts[] = [
  { id: 1, name: 'Alice', phone_number: '1234567890', notes: 'Friend' },
  { id: 2, name: 'Bob', phone_number: '0987654321', notes: 'Colleague' },
];

describe('Phonebook Component', () => {
  it('should filter contacts based on input', () => {
    render(<Phonebook contacts={contacts} onDelete={jest.fn()} onUpdate={jest.fn()} />);

    fireEvent.change(screen.getByPlaceholderText(/filter contacts/i), {
      target: { value: 'Alice' },
    });

    expect(screen.getByText('Alice')).toBeInTheDocument();
    expect(screen.queryByText('Bob')).not.toBeInTheDocument();
  });

  it('should call onDelete when delete button is clicked', () => {
    const onDelete = jest.fn();
    render(<Phonebook contacts={contacts} onDelete={onDelete} onUpdate={jest.fn()} />);

    fireEvent.click(screen.getAllByText(/delete/i)[0]);

    expect(onDelete).toHaveBeenCalledWith(1);
  });
});
