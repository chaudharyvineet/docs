const axios = require('axios');

axios.get(geocodeUrl).then((response) => {
   if (response.data.status === 'ZERO_RESULTS') {
     throw new Error('Unable to find that address.');
   }