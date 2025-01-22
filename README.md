# Spotify Chat App

This is a Spotify clone which has albums, songs and stream songs just like the spotify ,additionally the website also has socket.io based messaging app
where you can text people online and engage in conversation whilst listening to music

---

## Features

- Stream Music: Users can browse and stream music tracks and albums.
- Real-Time Chat: Chat with other users instantly with real-time communication.
- Admin Dashboard: Only authorized users (my email) can access the admin panel.
- Upload music tracks and albums (admin only).
- Manage content on the platform (admin only).
- Authentication with Clerk: Secure sign-up and sign-in flow powered by Clerk.
---

## Tech Stack

### Frontend:

- **React**: Core library for building the user interface.
- **Radix-UI**: For styling and prebuilt components.
- **Shad-CN**: Component library.
- **Zustand**: For state management.
- **Axios**: To handle API calls.
- **Vite**: For development and building the frontend.

### Backend:

- **Express**: For building the server and handling API requests.
- **MongoDB**: As the database to store posts.
- **Mongoose**: To interact with MongoDB.
- **Socket.io**: For real-time communication between client and server.
- **Cloudinary**: For storage of profile photo that can potentially become large.
- **Clerk**: For Authentication and admin access.

---

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm (comes with Node.js)
- MongoDB (installed locally or accessible remotely)
- Cloudinary (Create free account online) 
- Cl (Create free account online) 

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/spotify-chat-app.git
   cd spotify-chat-app
   ```

2. Install dependencies for the backend:

   ```bash
   cd backend
   npm install
   ```

3. Install dependencies for the frontend:

   ```bash
   cd ../frontend
   npm install
   ```

### Environment Variables

Create a `.env` file in the `backend` directory with the following:

```env
PORT=your_port  
MONGODB_URI=your_mongodb_uri  
ADMIN_EMAIL=your_admin_email  

CLOUDINARY_API_KEY=your_cloudinary_api_key  
CLOUDINARY_API_SECRET=your_cloudinary_api_secret  
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name  

NODE_ENV=your_node_env  
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key  
CLERK_SECRET_KEY=your_clerk_secret_key  

```
Create a `.env.local` file in the `frontend` directory with the following:

```env.local
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key  
ADMIN_EMAIL=your_admin_email  
```
---

## Running the Application

### Backend:

Start the backend server:

```bash
cd backend
npm run start
```

### Frontend:

Start the frontend development server:

```bash
cd frontend
npm run start
```

Open your browser and navigate to:

```
http://localhost:5173
```

---

## Contributing

Feel free to fork the repository, make your changes, and create a pull request. Contributions are welcome!

---

## License

This project does not currently have a license.

---

## Visit the website
https://spotify-chat-app-sto9.onrender.com/
