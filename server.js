const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const cors = require('cors');


const app = express();
const PORT = 3001;
const SECRET_KEY = 'your_secret_key';

// Sample user data (replace this with your actual user data)
const users = [
  { id: 1, username: 'user1@gmail.com', password: 'password1' },
  { id: 2, username: 'user2@gmail.com', password: 'password2' },
  { id: 3, username: 'user3@gmail.com', password: 'password3' }
];

app.use(bodyParser.json());
app.use(cors())
// Middleware to authenticate token 
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

// Login endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    const accessToken = jwt.sign({ username: user.username }, SECRET_KEY);
    res.json({ accessToken: accessToken });
  } else {
    res.status(401).json({ message: 'Invalid username or password' });
  }
});
0
// Protected home page route
app.get('/home', authenticateToken, (req, res) => {
  res.json({ message: 'Welcome to the home page' });
});


app.post(()=>{
  
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});