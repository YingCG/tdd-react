import React from "react";
import axios from "axios";

export default async function Unsplash() {
  const response = await axios.get("https//api.unsplash.com/search/photos", {
    params: {
      client_id: id,
      query: term,
    },
  });
  return response.data;
}

// https://www.youtube.com/watch?v=9Yrd4aZkse8
// https://www.leighhalliday.com/mocking-axios-in-jest-testing-async-functions
