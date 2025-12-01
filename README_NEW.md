# Financika 💰

**A modern, full-stack personal finance management application**

Financika helps you track your income, expenses, receipts, and visualize your financial data with beautiful charts and analytics. Built with cutting-edge technologies and deployed for production use.

🔗 **Live Demo:** [https://financika.onrender.com](https://financika.onrender.com)

---

## ✨ Features

- **🔐 Secure Authentication** – JWT-based login & signup with encrypted passwords
- **💳 Transaction Management** – Add, track, and categorize income and expenses
- **📊 Advanced Analytics** – Visual charts showing expense breakdown, trends, and comparisons
- **📸 Smart Receipt Scanning** – Upload receipts and automatically extract details using **Google Gemini OCR**
- **💾 Budget Management** – Set and monitor budgets for different categories
- **🔄 Recurring Transactions** – Track subscriptions and recurring payments
- **🌙 Dark Mode Support** – Beautiful dark theme for comfortable viewing
- **📱 Mobile Responsive** – Fully optimized for mobile and tablet devices
- **📦 PWA Ready** – Install as a web app on your device

---

## 🛠 Tech Stack

### Frontend
- **React 19** – UI library
- **Vite** – Lightning-fast build tool
- **TailwindCSS** – Utility-first styling
- **React Router** – Client-side navigation
- **Axios** – HTTP client
- **Chart.js** – Data visualization
- **React Icons** – Icon library
- **React Toastify** – Notifications

### Backend
- **Node.js + Express 5** – Web server
- **MongoDB + Mongoose** – NoSQL database
- **JWT** – Authentication tokens
- **Google Gemini AI** – OCR for receipt scanning
- **Multer** – File upload handling
- **Bcryptjs** – Password encryption
- **Dotenv** – Environment variables

### Deployment
- **Render** – Unified hosting (Backend + Frontend)
- **MongoDB Atlas** – Cloud database
- **GitHub** – Version control & auto-deploy

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v16+)
- MongoDB Atlas account
- Google Gemini API key

### Clone & Setup

```bash
# Clone the repository
git clone https://github.com/Lokesh-15N/financika.git
cd financika

# Backend Setup
cd backend
npm install

# Create .env file
cat > .env << EOF
PORT=5000
MONGO_URI=your-mongodb-atlas-uri
JWT_SECRET=your-jwt-secret-key
GEMINI_API_KEY=your-gemini-api-key
KEEP_ALIVE_URL=http://localhost:5000
EOF

# Start backend
npm run dev
# Backend runs on http://localhost:5000

# Frontend Setup (in new terminal)
cd ../frontend
npm install

# Create .env file
cat > .env << EOF
VITE_API_URL=http://localhost:5000/api
EOF

# Start frontend
npm run dev
# Frontend runs on http://localhost:5173
```

---

## 📁 Project Structure

```
financika/
├── backend/
│   ├── server.js                 # Express entry point
│   ├── package.json
│   ├── config/
│   │   └── db.js                # MongoDB connection
│   ├── controllers/              # Business logic
│   ├── routes/                   # API endpoints
│   ├── middleware/               # Auth, validation, uploads
│   ├── models/                   # Database schemas
│   └── uploads/                  # Receipt storage
│
├── frontend/
│   ├── src/
│   │   ├── pages/               # Page components
│   │   ├── components/          # Reusable components
│   │   ├── contexts/            # React contexts
│   │   ├── hooks/               # Custom hooks
│   │   ├── api/                 # Axios configuration
│   │   ├── config/              # App configuration
│   │   └── utils/               # Helper functions
│   ├── public/                  # Static assets
│   ├── index.html               # Entry HTML
│   ├── App.jsx                  # Root component
│   ├── main.jsx                 # React entry
│   ├── package.json
│   ├── vite.config.js           # Vite configuration
│   ├── tailwind.config.js       # Tailwind configuration
│   └── eslint.config.js         # ESLint rules
|
│
└── README.md
```

---

## 🔌 API Endpoints

### Authentication
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/signup` | Register new user |
| POST | `/api/auth/login` | Login user |
| GET | `/api/auth/me` | Get current user profile |

### Transactions
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/transactions` | Get all transactions |
| POST | `/api/transactions` | Create transaction |
| DELETE | `/api/transactions/:id` | Delete transaction |
| GET | `/api/transactions/summary` | Get income/expense summary |
| GET | `/api/transactions/charts` | Get chart data |
| GET | `/api/transactions/categories/expense` | Get expense categories |
| GET | `/api/transactions/categories/income` | Get income categories |

### Receipts
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/receipts/upload` | Upload & scan receipt |
| GET | `/api/receipts` | Get all receipts |
| DELETE | `/api/receipts/:id` | Delete receipt |

### Budgets
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/budgets` | Get all budgets |
| POST | `/api/budgets` | Create budget |
| PUT | `/api/budgets/:id` | Update budget |
| DELETE | `/api/budgets/:id` | Delete budget |

### User
| Method | Endpoint | Description |
|--------|----------|-------------|
| DELETE | `/api/users/account` | Delete user account |

---

## 🌐 Deployment

### Deploy to Render (Recommended)

1. **Push code to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Create Render Service**
   - Visit [render.com](https://render.com)
   - New → Web Service
   - Connect GitHub repo
   - Configure:
     - **Name:** financika
     - **Root Directory:** backend
     - **Build Command:** `npm install && cd ../frontend && npm install && npm run build && cd ../backend`
     - **Start Command:** `npm start`

3. **Add Environment Variables**
   - PORT: `5000`
   - MONGO_URI: `your-mongodb-uri`
   - JWT_SECRET: `your-secret`
   - GEMINI_API_KEY: `your-key`
   - KEEP_ALIVE_URL: `https://financika.onrender.com`

4. **Deploy**
   - Click Deploy
   - Wait for build to complete
   - Access at `https://financika.onrender.com` ✅

---

## 📱 Screenshots

- **Dashboard** – Overview of income, expenses, and charts
- **Transactions** – Manage all financial transactions
- **Receipts** – Upload and scan receipts with AI
- **Budgets** – Set and track budget goals
- **Settings** – Manage profile and preferences

---

## 🔒 Security

- ✅ Passwords hashed with bcryptjs
- ✅ JWT tokens for authentication
- ✅ CORS configured for production
- ✅ Input validation & sanitization
- ✅ Environment variables for sensitive data
- ✅ HTTPS enforced in production

---

## 📖 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the ISC License - see the LICENSE file for details.

---

## 👤 Author

**Lokesh**  
- GitHub: [@Lokesh-15N](https://github.com/Lokesh-15N)
- Email: lokesh15n@gmail.com

---

## 🙏 Acknowledgments

- [Google Gemini AI](https://ai.google.dev/) – For OCR capabilities
- [MongoDB](https://www.mongodb.com/) – Cloud database
- [Render](https://render.com/) – Deployment platform
- [React](https://react.dev/) & [Vite](https://vitejs.dev/) – Frontend stack
- [TailwindCSS](https://tailwindcss.com/) – Styling

---

## 📞 Support

Have questions or issues? Please open an issue on GitHub or contact me!

**Happy tracking! 💰✨**
