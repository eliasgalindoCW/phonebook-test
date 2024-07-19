export default interface Contacts {
  id: number;
  name: string;
  phone_number: string;
  notes?: string;
  created_at?: string | number | Date;
}
