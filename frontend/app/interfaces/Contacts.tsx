export default interface Contacts {
  created_at: string | number | Date;
  id: number;
  name: string;
  phone_number: string;
  notes?: string;
}
