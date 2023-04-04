import axios from "./axios";
import unsplash from "./Unsplash";

it("calls axios and returns images", async () => {
  const images = await unsplash("cats");
  console.log(images);
  expect(images).toEqual([cat.jpg]);
});
