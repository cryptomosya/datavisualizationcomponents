# Data Visualization Components

Data Visualization Components is a JavaScript package that provides simple and customizable data visualization components for use in web applications.

## Installation

You can install the package via npm:

```bash
npm install data-visualization-components

Usage
Bar Chart

<canvas id="myCanvas" width="400" height="300"></canvas>

Then

const { BarChart } = require('data-visualization-components');

const canvas = document.getElementById('myCanvas');
const data = [20, 40, 60, 80, 100]; // Example data for the chart

const barChart = new BarChart(canvas, data);
barChart.draw();

