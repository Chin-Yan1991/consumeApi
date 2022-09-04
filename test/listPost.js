const axios = require("axios");

axios.get('http://localhost:8080/post/list')
  .then( (response) => {
    // handle success
    console.log(response.data);
  })
  .catch( (error) => {
    // handle error
    console.log(error);
  })
  .then(() => {
    // always executed
  });