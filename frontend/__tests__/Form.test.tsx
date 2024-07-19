import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import Form from '@/app/components/Form';

jest.mock('@/app/utils/createContact', () => ({
  __esModule: true,
  default: jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({}),
    })
  ),
}));

describe('Form Component', () => {
  it('should render the form and handle input correctly', async () => {
    const onAddContact = jest.fn();
    render(<Form onAddContact={onAddContact} />);

    fireEvent.change(screen.getByLabelText(/name/i), {
      target: { value: 'John Doe' },
    });
    fireEvent.change(screen.getByLabelText(/phone number/i), {
      target: { value: '1234567890' },
    });

    fireEvent.click(screen.getByText(/add contact/i));

    await waitFor(() => {
      expect(onAddContact).toHaveBeenCalled();
    });
  });
});
