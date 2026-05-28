# Zerodha Clone — by Apoorv Tripathi

A full-stack Zerodha clone built with the MERN stack as part of my portfolio.

## Stack
- **Frontend**: React.js, React Router, Bootstrap 5, MUI
- **Backend**: Node.js, Express.js
- **Database**: MongoDB + Mongoose

## Run

### Frontend
```bash
npm install
npm start        # http://localhost:3000
```

### Backend
```bash
cd backend
npm install
# Add MONGO_URL=<your_mongodb_url> to backend/.env
node index.js    # http://localhost:3002
```

### Seed the database (once, after backend starts)
Open: `http://localhost:3002/seed`

## Routes
| Path | Description |
|------|-------------|
| `/` | Home |
| `/about` | About (Apoorv Tripathi) |
| `/product` | Products |
| `/pricing` | Pricing |
| `/support` | Support |
| `/signup` | Signup |
| `/dashboard` | Trading Dashboard |
| `/dashboard/orders` | Orders |
| `/dashboard/holdings` | Holdings |
| `/dashboard/positions` | Positions |
| `/dashboard/funds` | Funds |
| `/dashboard/apps` | Apps |

## Deploy
`npm run build` → deploy `build/` to Vercel / Netlify  
Backend → Render / Railway
