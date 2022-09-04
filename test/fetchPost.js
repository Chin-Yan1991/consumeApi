const axios = require("axios");


axios.get('http://localhost:8080/post/fetch/q')
  .then( (response) => {
    // handle success
    console.log("it should throw a validation error with invalid data ")
    console.log(response.data);
    console.log("\n")
  })
  .catch( (error) => {
    // handle error
    console.log(error);
  })
  .then(() => {
    // always executed
  });

  axios.get('http://localhost:8080/post/fetch/11')
  .then( (response) => {
    // handle success
    console.log("it should fetch data successfully with valid payload")
    console.log(response.data);
  })
  .catch( (error) => {
    // handle error
    console.log(error);
  })
  .then(() => {
    // always executed
  });