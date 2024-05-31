# 🏠 DreamState Real Estate Website
![Sixth Screenshot](https://drive.google.com/uc?export=view&id=1hBRdW0bAaAapAfsQO9DhV_36ElP7IQCA)

## 🔰 Overview

DreamState is a real estate website that allows users to browse listings, create their listings, and connect with landlords. It provides manual sign-in/sign-up features, OAuth with Google, user profile management, and advanced search functionality.

## 🌟 Features

1. **Authentication**
   - Manual sign-in/sign-up
   - Sign in using email through Google OAuth

2. **Homepage Listings**
   - Multiple listings displayed with tags (e.g., offers, on sale, rent)

3. **User Profile Management**
   - Update profile information (username, password)
   - Upload a profile image
   - Used JWT for user token authorization

4. **Listing Creation**
   - Users can create site listings with:
     - Name
     - Description
     - Address
     - Tags (e.g., sale, rent, parking availability, furnished)
     - Discount price for offers
     - Upload site images
       
     ![Seventh Screenshot](https://drive.google.com/uc?export=view&id=1LPCCbCJBHk-faqwRtacW1F3M6fjDg7PN)

5. **Advanced Search**
   - Users can search listings using multiple filters
     ![Eighth Screenshot](https://drive.google.com/uc?export=view&id=1nW3b_LNPVrZEMFFS2bwW-pi3Flf1oNWm)

6. **Contact Landlord**
   - Users can contact the landlord of a site listing by:
     - Clicking on the contact button
     - Typing a message
     - Redirecting to send an email

## ⚙️ Tech Stacks

- **Frontend**:
  - React.js
  - Redux Toolkit(for State management)
  - Tailwind CSS
  - React Icons Library
  - Swiper Package (for adding Image swiper)
  - Fetch API (for HTTP requests)
  - React Router (for routing)
  - Firebase Storage Bucket (to store images)

- **Backend**:
  - Node.js
  - Express.js
  - MongoDB (for database)
  - Mongoose (for MongoDB object modeling)
  - Google OAuth API (for authentication)
  - JWT (for token Authorization)

## 🛠️ Setup Instructions

1. Clone the repository.
2. Add the `.env` file in the root folder(MONGO_URI, PORT, JWT_SECRET) and in the client folder(VITE_FIREBASE_API_KEY)
3. Install dependencies using `npm install` in the root folder and the client folder.
4. Start the frontend and backend servers using `npm run dev`.
5. Access the application frontend at `http://localhost:5173` and backend API at `http://localhost:3000`.

## 🤝 Contributing

Just to let you know, pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## 📄 License

[MIT](https://choosealicense.com/licenses/mit/)
