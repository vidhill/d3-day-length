// import d3 from  'd3'

import './styles.css';

import { format } from 'date-fns';

import d3 from './d3.js';
import data from './data.json';
import logger from './logger';

const margin = {
    top: 50,
    right: 50,
    bottom: 50,
    left: 50,
};

const width = window.innerWidth - margin.left - margin.right; // Use the window's width
const height = window.innerHeight - margin.top - margin.bottom; // Use the window's height

// The number of datapoints
const n = data.length;

// 5. X scale will use the index of our data
// const dateScale = d3
//   .scaleLinear()
//   .domain([0, n - 1]) // input
//   .range([0, width]); // output

const dataset = data.map((item) => ({
    x: new Date(item.date),
    y: item.fraction,
}));

const startDate = dataset[0].x;
const endDate = dataset[n - 1].x;

const dateScale = d3.scaleTime().domain([startDate, endDate]).range([0, width]); // output

const yScale = d3
    .scaleLinear()
    .domain([0, 1]) // input
    .range([height, 0]); // output

// const today = new Date();

// console.log(markerLine([0,1]))

const path = d3
    .area()
    .x((d) => dateScale(d.x))
    .y1((d) => yScale(d.y))
    .y0(yScale(0));

// 8. An array of objects of length N. Each object has key -> value pair, the key being "y" and the value is a random number
// const dataset = d3.range(n).map(d => {
//   return { y: randomUniform(1)() };
// });

// 1. Add the SVG to the page and employ #2
const svg = d3
    .select('#app')
    .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

svg.append('g')
    .attr('class', 'x axis')
    .attr('transform', 'translate(0,' + height + ')')
    .call(
        d3.axisBottom(dateScale).tickFormat((a) => {
            return format(a, 'MMM');
        })
    );

// .tickFormat(d3.formatPrefix(".1", 1e6))); // Create an axis component with d3.axisBottom

// 4. Call the y axis in a group tag
svg.append('g').attr('class', 'y axis').call(d3.axisLeft(yScale)); // Create an axis component with d3.axisLeft

// 9. Append the path, bind the data, and call the line generator

svg.append('path')
    .datum(dataset) // 10. Binds data to the line
    .attr('class', 'line') // Assign a class for styling
    .attr('d', path); // 11. Calls the line generator

const makeMarker = (date = new Date('2020-06-21T15:28:14.071Z')) => {
    console.log(date);
    const height = yScale(0);
    const d = `M ${dateScale(date)} 0 v${height}`;
    return d;
};
console.log(d3.axisBottom(dateScale));

const myFunc = function (selection) {
    // console.log(selection.node().append("g"));
    console.log(selection.data());

    // selection.each(val => {
    //   console.log({ val });
    // });

    // console.log('data', selection.data())
    selection
        .data([0, 1, 2])
        .enter()
        .append('text')
        .attr('class', (d) => {
            console.log('ss', d);
            return d;
        });
    // selection.exit()
    return (dd) => {
        console.log({ dd });
    };
};

const d = svg.append('g');
console.log(d);

d.data([0, 1, 2])
    .enter()
    .append('g')
    .attr('class', (d) => {
        console.log('ss', d);
        return d;
    });

svg.append('path')
    // .attr("transform", "translate(0," + height + ")")
    .attr('class', 'marker')
    .attr('d', makeMarker())
    .attr('stroke', 'black');

//console.log(a);
