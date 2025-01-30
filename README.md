
# GYM-for-Tuna 🏋️‍♀️

A modern, user-friendly, and responsive website designed to promote a fitness trainer's services and personal brand. The website includes features like class schedules, service offerings, contact forms, and an admin panel for managing content.

## Features ✨

### User-Friendly Interface:
- Clean and intuitive design for seamless navigation 🧭.
- Responsive layout for optimal viewing on all devices (desktop, tablet, mobile) 📱💻.

### Efficient Data Fetching:
- Utilizes **React Query** for efficient data fetching and state management 🔄.

### User Authentication:
- Integrated **Supabase** for secure user authentication and backend data management 🔐.

### Interactive Features:
- **Class Schedules** with real-time updates 📅.
- **Detailed Service Offerings** highlighting fitness services and packages 💪.
- **Contact Forms** for user inquiries 📬.

### Admin Panel:
- Allows the client to manage:
  - Class schedules 🗓️.
  - Service offerings 📦.
  - User data 🧑‍🤝‍🧑.

### Cross-Browser Compatibility:
- Ensured compatibility with all major browsers (Chrome, Firefox, Safari, Edge) 🌐.

### Optimized Performance:
- Optimized for fast loading times and smooth user experience ⚡.

---

## Technologies Used 💻

### Frontend:
- **React.js**: JavaScript library for building user interfaces ⚛️.
- **React Query**: Data fetching and state management for React 🔍.
- **Tailwind CSS**: Utility-first CSS framework for rapid styling 🎨.
- **Axios**: For making API requests 📡.

### Backend:
- **Supabase**: Provides authentication, database management, and API backend 🔒.

### Other Tools:
- **Vercel**: For deployment of the frontend 🚀.
- **Git**: For version control 🧑‍💻.

---

## Setup Instructions 🛠️

### Prerequisites:
- **Node.js** (v16 or higher)
- **npm** (v8 or higher)
- **Supabase Account**: Set up Supabase for backend services (authentication, database).

### Steps to Run the Project 🚀:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/gym-website.git
   cd gym-website
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   - Create a `.env` file in the root directory of the project.
   - Add your Supabase credentials to the `.env` file:
     ```plaintext
     REACT_APP_SUPABASE_URL=your-supabase-url
     REACT_APP_SUPABASE_ANON_KEY=your-supabase-anon-key
     ```

4. **Run the Development Server**:
   ```bash
   npm start
   ```
   - The website will be available at `http://localhost:3000`.

5. **Build for Production**:
   ```bash
   npm run build
   ```

6. **Deploy to Vercel**:
   - Install the Vercel CLI:
     ```bash
     npm install -g vercel
     ```
   - Deploy the project to Vercel:
     ```bash
     vercel
     ```

---

## Admin Panel 🔑

The admin panel allows the client to manage class schedules, services, and user data. To access the admin panel:

1. Navigate to `/admin` on the website.
2. Log in using the admin credentials (set up in Supabase).

---

## Folder Structure 📂

```plaintext
gym-website/
├── public/                  # Static assets (favicon, images, etc.)
├── src/
│   ├── components/          # Reusable components (buttons, forms, etc.)
│   ├── pages/               # Website pages (Home, Admin, Schedule, etc.)
│   ├── hooks/               # Custom hooks for data fetching
│   ├── utils/               # Utility functions (helpers, formatters, etc.)
│   ├── App.js               # Main application component
│   ├── index.js             # Entry point
│   └── styles/              # Global styles (Tailwind configuration)
├── .env                     # Environment variables (Supabase URL, keys)
├── .gitignore               # Git ignore file for node_modules, build files
├── package.json             # Project dependencies and scripts
└── README.md                # Project documentation
```

---

## Contributing 🤝

Contributions are welcome! If you'd like to contribute, please follow these steps:

1. **Fork the repository** to your GitHub account 🍴.
2. **Create a new branch** for your feature or bugfix:
   ```bash
   git checkout -b feature/your-feature
   ```
3. **Commit your changes**:
   ```bash
   git commit -m 'Add some feature'
   ```
4. **Push to the branch**:
   ```bash
   git push origin feature/your-feature
   ```
5. **Open a pull request** on GitHub to merge your changes into the main repository.

---

## Acknowledgments 🏅

- **Supabase** for backend services 🔒.
- **React Query** for data fetching and state management 🔄.
- **Tailwind CSS** for styling 🎨.
- **Vercel** for deployment 🚀.
