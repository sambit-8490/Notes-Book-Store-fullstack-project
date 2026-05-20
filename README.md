BCS Noteswala is a full-stack MERN web application where students can access, search, and download BCS study materials and PDF notes for:

First Year (FY)
Second Year (SY)
Third Year (TY)

The platform includes:

User Authentication with Email OTP Verification
Forgot Password & Reset Password
Admin Dashboard
Add PDF Notes
Search Notes by Subject
Responsive UI
🚀 Features
👨‍🎓 User Features
User Signup/Login
Email OTP Verification
Forgot Password using OTP
View PDF Notes
Search Notes
Responsive Design
👨‍💻 Admin Features
Admin Login
Add FY/SY/TY PDFs
Manage Notes
Secure Admin Access
🛠️ Tech Stack
Frontend
React.js
React Router DOM
Axios
Bootstrap
SweetAlert
Backend
Node.js
Express.js
MongoDB
Mongoose
JWT Authentication
Nodemailer
Bcrypt
📂 Project Structure
BCS-NOTESWALA/
│
├── client/
│   ├── src/
│   │   ├── Admin/
│   │   ├── components/
│   │   ├── views/
│   │   ├── util/
│   │   └── App.js
│
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   └── index.js
│
└── README.md
⚙️ Installation
1️⃣ Clone Repository
git clone https://github.com/your-username/bcs-noteswala.git
2️⃣ Install Dependencies
Client
cd client
npm install
Server
cd server
npm install
🔑 Environment Variables

Create .env file inside server/

PORT=5000

MONGODB_URL=your_mongodb_url

JWT_SECRET=your_secret_key

EMAIL_USER=your_gmail@gmail.com
EMAIL_PASS=your_app_password
▶️ Run Project
Start Backend
cd server
npm start
Start Frontend
cd client
npm start
👨‍💻 Default Admin Access

Update admin role directly in MongoDB:

db.users.updateOne(
  { email: "your-email@gmail.com" },
  {
    $set: {
      role: "admin"
    }
  }
)
🔐 Authentication Flow
Signup
User creates account
OTP sent to email
Verify OTP
Account activated
Login
User logs in
JWT token generated
User session stored in localStorage
Forgot Password
Send reset OTP
Verify OTP
Set new password
📚 PDF APIs
Add PDFs
POST /createFyPdf
POST /createSyPdf
POST /createTyPdf
Fetch PDFs
GET /FyallPdfs
GET /SyallPdfs
GET /TyallPdfs
Search PDFs
GET /Fypdfsbytitle?title=
GET /Sypdfsbytitle?title=
GET /Typdfsbytitle?title=
🧠 Important Fixes Added

✅ OTP Authentication
✅ Password Hashing
✅ Auto Login after OTP Verification
✅ Forgot Password System
✅ Admin Protection
✅ Null CurrentUser Fix
✅ API Error Handling
✅ Search Functionality
✅ Dynamic PDF Loading
✅ Admin Default Access Logic

📸 Screens Included
Home Page
Login Page
Signup Page
OTP Verification
Admin Dashboard
PDF Listing Pages
🌐 Future Improvements
PDF Upload System
Notes Categories
User Profile
Dark Mode
Download Counter
Admin Analytics
🤝 Contributors

Developed for BCS students to access quality notes easily.

📄 License

This project is licensed under the MIT License.

❤️ Thank You

Thank you for using BCS Noteswala.
Happy Learning 🚀
