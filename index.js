const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());

const portfolioData = {
  name: "SAYAK GHOSH",
  about: "FULL STACK DEVELOPER passionate about clean design and great UX.",
  projects: [
    { title: "SNAKE GAME", description: "YOU CAN ENJOY THIS GAME", link: "littlesnakegame.netlify.app" },
    { title: "TIC TAC TOE GAME", description: "SIMPLE GAME BUT QUITE IMPRESSIVE", link: "#" }
  ],
  contact: {
    email: "jane@example.com",
    github: "https://github.com/janedoe",
    linkedin: "https://linkedin.com/in/janedoe"
  }
};

app.get('/api/portfolio', (req, res) => {
  res.json(portfolioData);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
