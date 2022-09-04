const axios = require("axios");

const payload = {
    post_id: 12,
    post_title:"et ea vero quia laudantium autem",
    post_body:"omnis quis sit vel consequuntur",
    total_number_of_comments:3
}
/**
Test 2 filter by post_id
*/
axios.post('http://localhost:8080/post/search/',{post_id:payload.post_id})
  .then( (response) => {
    // handle success
    console.log("Test 1 filter by post_title ")
    console.log("it should search data successfully ")
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


  /**
Test 2 filter by post_title
*/
  axios.post('http://localhost:8080/post/search/',{post_title:payload.post_title})
  .then( (response) => {
    // handle success
    console.log("Test 2 filter by post_title ")
    console.log("it should search data successfully ")
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


  /**
Test 3 fulltext search on
*/
axios.post('http://localhost:8080/post/search/',{post_body:payload.post_body})
.then( (response) => {
  // handle success
  console.log("Test 3 fulltext search on ")
  console.log("it should search data successfully ")
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

  /**
Test 4 filter by total_number_of_comments
*/
axios.post('http://localhost:8080/post/search/',{total_number_of_comments:payload.total_number_of_comments})
.then( (response) => {
  // handle success
  console.log("Test 4 filter by total_number_of_comments ")
  console.log("it should search data successfully ")
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


  /**
Test 5 filter by all payload
*/
axios.post('http://localhost:8080/post/search/',payload)
.then( (response) => {
  // handle success
  console.log("Test 5 filter by all payload ")
  console.log("it should throw error for more than 1 filter ")
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



