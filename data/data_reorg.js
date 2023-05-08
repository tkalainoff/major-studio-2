
/*global d3*/

import * as d3 from "../node_modules/d3/dist/d3.js"
// var _ = require('lodash');
// var d3 = require("d3");
// data

const rawData = [
    {
      year: 2023,
      type: "multiracial",
      radiusTop: 10, 
      radiusBottom: 10, 
      color: "black"
    },
    {
      year: 2022,
      type: "multiracial",
      radiusTop: 7, 
      radiusBottom: 7, 
      color: "black"
    },
    {
      year: 2021,
      type: "multiracial",
      radiusTop: 7, 
      radiusBottom: 7, 
      color: "black"
    },
    {
      year: 2020,
      type: "multiracial",
      radiusTop: 5, 
      radiusBottom: 5, 
      color: "black"
    },
    {
      year: 2019,
      type: "multiracial",
      radiusTop: 2, 
      radiusBottom: 2, 
      color: "black"
    },
    {
      year: 2023,
      type: "poc",
      radiusTop: 25, 
      radiusBottom: 25, 
      color: "plum"
    },
    {
      year: 2022,
      type: "poc",
      radiusTop: 25, 
      radiusBottom: 25, 
      color: "plum"
    },
    {
      year: 2021,
      type: "poc",
      radiusTop: 25, 
      radiusBottom: 25, 
      color: "plum"
    },
    {
      year: 2020,
      type: "poc",
      radiusTop: 25, 
      radiusBottom: 25, 
      color: "plum"
    },
    {
      year: 2019,
      type: "poc",
      radiusTop: 25, 
      radiusBottom: 25, 
      color: "plum"
    },
    {
      year: 2023,
      type: "white",
      radiusTop: 100, 
      radiusBottom: 100, 
      color: "white"
    },
    {
      year: 2022,
      type: "white",
      radiusTop: 100, 
      radiusBottom: 100, 
      color: "white"
    },
    {
      year: 2021,
      type: "white",
      radiusTop: 100, 
      radiusBottom: 100, 
      color: "white"
    },
    {
      year: 2020,
      type: "white",
      radiusTop: 100, 
      radiusBottom: 100, 
      color: "white"
    },
    {
      year: 2019,
      type: "white",
      radiusTop: 100, 
      radiusBottom: 100, 
      color: "white"
    }
    ]

const discData = d3.groups(rawData, d => d.year)

console.log(discData)

