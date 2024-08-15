# Snap Stay Hotel
Snap Stay Hotel is a full-fledged hotel booking application built with modern web technologies, enabling users to browse available rooms, make bookings, and manage their reservations. The application includes user authentication, room sorting and filtering, booking management, and more.

## Table of Contents
1) ### Features
2) ### Tech Stack
3) ### Installation
4) ### Usage
5) ### Project Structure
6) ### Routes
7) ### APIs
8) ### Animations
9) ### Known Issues
10) ### Contributing

## Features
User Authentication: Register, login, reset password, and forget password functionalities. </br>
Room Management: View available rooms, see detailed information, and sort and filter rooms based on various criteria.</br>
Booking System: Book rooms, check availability, cancel bookings, check-in, and check-out.</br>
Receipt Management: Generate and print booking receipts.</br>
Responsive UI: Fully responsive design using Tailwind CSS and Flowbite React components.</br>
Animations: Smooth and engaging animations powered by Framer Motion.</br>
</br></br>
## Tech Stack
Frontend: React, TypeScript, Tailwind CSS, Flowbite React, Framer Motion </br>
Routing: React Router, including React Router Loader for data fetching</br>
State Management: Context API, React Query for server state management</br>
Forms & Validation: React Hook Form (if used), Custom Validations</br>
HTTP Client: Axios for API calls</br>
Payment Integration: Stripe for handling payments</br>
Build Tool: Vite</br>
Notifications: React Hot Toast for user feedback</br>
</br></br>
## Installation
To run this project locally, follow these steps:

### Clone the repository:

git clone https://github.com/Rahulkaradwal/snap-stay-hotel.git
cd snap-stay-hotel
</br>
### Install dependencies:

npm install
</br>
npm run dev
</br></br>
### Usage
Once the project is set up, you can navigate through the application to:
</br>
Register/Login: Create an account or log in to an existing one.</br>
View Rooms: Browse all available rooms with options to sort and filter.</br>
Make Bookings: Select dates, check availability, and book a room.</br>
Manage Bookings: View, cancel, and manage your bookings, including checking in and out.</br>
Print Receipts: Generate and print receipts for your bookings.</br> </br></br>
## Project Structure
Here’s an overview of the project structure:

</br>
snap-stay-hotel/</br>
├── public/</br>
├── src/</br>
│   ├── api/</br>
│   ├── components/</br>
│   ├── context/</br>
│   ├── pages/</br>
│   ├── ui/</br>
│   ├── utils/</br>
│   ├── App.tsx</br>
│   ├── main.tsx</br>
│   └── index.css</br>
├── .env</br>
├── package.json</br>
├── vite.config.ts</br>
└── README.md</br>


api/: Contains API-related files, functions, and custom React hooks including Axios instances.
components/: UI components such as buttons, forms, and layout components.
context/: Context providers for managing global state.
hooks/: Custom React hooks.
pages/: Page components corresponding to different routes in the application.
router/: React Router configurations and route definitions.
styles/: Global CSS and Tailwind configurations.
utils/: Utility functions and helpers.
ui/: Reusable UI components such as buttons, forms, and layout components.
Routes

</br>

Here’s a breakdown of the routes and their corresponding components:

/: Home - Home component. </br>
/booking: Booking page - Protected, Booking component.</br>
/services: Services page - Services component.</br>
/details/</br>
: Room details - Protected, Detail component.</br>
/contact-us: Contact Us page - ContactUs component.</br>
/rooms: Rooms list - Rooms component.</br>
/check-in/</br>
: Check-In page - Protected, CheckIn component.</br>
/verify-email/
: Email verification - VerifyEmail component.</br>
/login: Login page - Login component.</br>
/forget-password: Forget Password page - ForgetPassword component.</br>
/reset-password/</br>
: Password Reset - ResetPassword component.</br>
/signup: Sign Up page - SignUp component.</br></br></br>

## APIs
Authentication: API endpoints for login, registration, password reset, etc.</br>
Room Management: Endpoints for fetching room details, availability checks, and bookings.</br>
Booking Management: Endpoints to create, cancel, and manage bookings.</br>
Stripe Integration: Endpoints for payment processing.</br>
</br></br>
## Animations
Framer Motion: Used for smooth transitions, hover effects, and other interactive elements. Examples include:
Button hover effects.
Page transitions.
Modal animations.


## Known Issues
This is not responsive yet, need to make it responsive.
</br></br>

## Contributing
Contributions are welcome! Please fork this repository, create a new branch, and submit a pull request.
</br></br>
## Fork the repository
Create a new feature branch: git checkout -b feature/your-feature-name</br>
Commit your changes: git commit -m 'Add some feature'</br>
Push to the branch: git push origin feature/your-feature-name</br>
Open a pull request</br>
