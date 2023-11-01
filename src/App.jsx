// Import required  hooks
import { useState, useEffect } from "react";
import { DogFact } from "./components/DogFact";

export const App = () => {
  // Hint: Initialize state for storing the dog fact
  const [dogFact, setDogFact] = useState(null);
  
  // Hint: Define the API endpoint
  const url = "https://dogapi.dog/api/v2/facts";

  // Hint: Create a function to fetch the dog fact
  const fetchDogFact = async () => {
    // using .fetch to make request to url
    await fetch(url)
      // chain .then to handle response, convert to json format
      .then((res) => res.json())
      // handle json data
      .then((data) => {
        // check if data.data exists
        if (data.data) {
          // store data.data in variable cleanData
          let cleanData = data.data;
          console.log(cleanData);
          console.log(cleanData[0].attributes);
          // update dogFact state with body attribute of first item in cleanData
          setDogFact(cleanData[0].attributes.body);
        }
      })
      // chain .catch to handle errors
      .catch((err) => {
        console.log("Error reading dog fact:", err);
      });
  };

  // Hint: Use the useEffect hook to fetch the dog fact when the component mounts
  useEffect(() => {
    fetchDogFact();
  },[]);

  return (
    <div className="App">
      <DogFact dogFact={dogFact} />
    </div>
  );
};
