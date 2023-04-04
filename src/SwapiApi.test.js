const fetch = require("node-fetch");
import { getPeoplePromise, getPeople } from "./SwapiApi";

describe("calls swapi to get people", () => {
  const input = data.count;
  swapi.getPeople(fetch).then((data) => {
    expect(input).toEqual(82);
  });
});

describe("calls swapi to get people", () => {
  const input = data.count;
  swapi.getPeoplePromise(fetch).then((data) => {
    expect(input).toEqual(82);
  });
});
