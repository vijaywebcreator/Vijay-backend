const express = require('express');
const app = express();

const port = process.env.PORT || 3000; // Render इसी port का use करता है

app.get('/', (req, res) => {
  res.send('Hello Vijay! 🌟 Backend is Live!');
});

app.listen(port, () => console.log(`Server running on port ${port}`));