const express = require('express');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3000;


app.use(express.static('public'));


app.get('/api/map', async (req, res) => {
  try {
   
    const apiKey = 'AIzaSyAfd99rORWYKxm1_EyCgzvtl8WtGKT3hBc';
    const response = await axios.get(`https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`);

    
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

