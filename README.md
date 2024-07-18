# Phonebook Application

This is a phonebook application built as a single-page application (SPA) using Next.js for the frontend and Ruby for the backend. The application allows users to add, view, filter, and manage phone numbers. Users can also add notes to each phone number.

## Features

- Add new contacts with name and phone number
- View a list of recently added phone numbers
- Filter phone numbers based on input
- Edit and delete contacts
- Add notes to each phone number
- Responsive design
- Works offline (will be tested with airplane mode)
- Supports multiple resolutions and sizes

## Technology Stack

### Frontend

- Next.js
- Tailwind CSS
- TypeScript

### Backend

- Ruby on Rails
- PostgreSQL (for database storage)

## API Endpoints

- `POST /phone_numbers`: Create a new phone number
- `GET /phone_numbers`: Retrieve a list of phone numbers
- `PUT /phone_numbers/:id`: Update a phone number
- `DELETE /phone_numbers/:id`: Delete a phone number

## Setup Instructions

### Prerequisites

- Node.js
- Yarn or npm
- Ruby (version >= 3.0)
- Rails
- PostgreSQL

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/eliasgalindoCW/phonebook-test.git
   cd phonebook-application
   ``` 

2. **Setup the backend:**

**Install Ruby dependencies:**

```bash
Copiar código
cd backend
bundle install
```

**Setup the database:**

```bash
Copiar código
rails db:create
rails db:migrate
```

**Start the Rails server:**

```bash
Copiar código
rails server
```

3. **Setup the frontend:**

**Install Node.js dependencies:**

```bash
Copiar código
cd frontend
yarn install
# or
npm install
```

**Start the Next.js development server:**

```bash
Copiar código
yarn dev
# or
npm run dev
```

4. **Access the application:**

Open your web browser and go to http://localhost:3000.

## Usage

**Add Contact:**
Fill in the name and phone number in the form, then click "Add Contact".

**View Contacts:**
The "Last Contacts" section displays the 5 most recently added contacts.

**Filter Contacts:**
Use the filter input in the "Contact History" section to search for contacts by name or phone number.

**Edit Contact:**
Click the "Edit" button next to a contact, modify the details, and click "Save" to update.

**Delete Contact:**
Click the "Delete" button next to a contact to remove it from the list.

### Folder Structure
```bash
Copiar código
phonebook-application/
  ├── backend/                 # Ruby on Rails backend
  │   ├── app/                 # Rails application code
  │   ├── config/              # Configuration files
  │   ├── db/                  # Database migrations
  │   └── ...                  # Other standard Rails folders
  ├── frontend/                # Next.js frontend
  │   ├── components/          # React components
  │   ├── pages/               # Next.js pages
  │   ├── styles/              # Tailwind CSS styles
  │   ├── utils/               # Utility functions
  │   └── ...                  # Other standard Next.js folders
  ├── README.md                # Project documentation
  └── ...                      # Other project files
```

## Contributing
1. Fork the repository
2. Create your feature branch (git checkout -b feature/AmazingFeature)
3. Commit your changes (git commit -m 'Add some AmazingFeature')
4. Push to the branch (git push origin feature/AmazingFeature)
5. Open a pull request