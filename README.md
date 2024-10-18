## Getting Started

### Prerequisites

- **Node.js** and **npm**

### Installation
### Frontend  ([Frontend](https://github.com/SainiAditya1/Platform_Frontend.git))

1. Clone the repository:
   ```bash
   https://github.com/SainiAditya1/Platform_Frontend.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables in `.env`:
   ```bash
   REACT_APP_GOOGLE_MAPS_API_KEY=your_gmap_api_key
   REACT_APP_API_URL=http://localhost:9000
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open `http://localhost:3000` in your browser.

### Backend  ([Backend](https://github.com/SainiAditya1/Platform_Backend.git))

1. Clone the repository:
   ```bash
   https://github.com/SainiAditya1/Platform_Backend.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables in `.env`:
   ```bash
   PORT="9000"
   DB="mongodb url"
   CLIENT_URL = http://localhost:3000
   JWT_SECRET = "jwtsecret"
   ```
4. Start the development server:
   ```bash
   node app.js
   ```
