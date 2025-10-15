# 📨 FeedMe – Anonymous Feedback Tool

FeedMe is an open-source **MERN stack** web application that allows users to **collect anonymous feedback** through a **unique shareable link**.  
It’s simple, privacy-focused, and perfect for teachers, managers, creators, or developers who want honest feedback without judgment.

---

## 🌟 Features

✅ **User Authentication** – Register and log in securely with JWT  
✅ **Unique Feedback Link** – Each user gets a unique public link (e.g. `/u/nahom123`)  
✅ **Anonymous Submissions** – Anyone can send feedback without logging in  
✅ **Feedback Dashboard** – View, delete, or mark feedback as read/unread  
✅ **Responsive UI** – Built with React + TailwindCSS  
✅ **Secure Backend** – Protected API routes with Express & JWT  
✅ **Optional Extensions**  
- Email notifications (Nodemailer)  
- Sentiment analysis (HuggingFace API)  
- Rate limiting to prevent spam  

---

## 🏗️ Tech Stack

| Layer | Technology |
|-------|-------------|
| Frontend | React, Vite, TailwindCSS, Axios |
| Backend | Node.js, Express.js |
| Database | MongoDB + Mongoose |
| Authentication | JWT + bcrypt |
| Deployment | Vercel (Frontend) + Render / Railway (Backend) |

---

## 🧩 Project Structure

feedme/
│
├── backend/
│   ├── server.js
│   ├── config/
│   │   └── db.js
│   ├── models/
│   │   ├── User.js
│   │   └── Feedback.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── feedbackRoutes.js
│   ├── controllers/
│   │   ├── authController.js
│   │   └── feedbackController.js
│   └── middleware/
│       └── authMiddleware.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   │   ├── Dashboard.jsx
│   │   │   ├── FeedbackForm.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   └── UserLink.jsx
│   │   ├── context/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
└── README.md
---
