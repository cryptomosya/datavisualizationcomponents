// data-visualization-components.js

class BarChart {
    constructor(canvas, data) {
      this.canvas = canvas;
      this.data = data;
      this.ctx = canvas.getContext('2d');
      this.colors = ['#ff0000', '#00ff00', '#0000ff']; // Example colors for bars
    }
  
    draw() {
      const { ctx, canvas, data, colors } = this;
      const barWidth = canvas.width / data.length;
  
      ctx.clearRect(0, 0, canvas.width, canvas.height);
  
      data.forEach((value, index) => {
        const x = index * barWidth;
        const y = canvas.height - (value * 5); // Scale the value for the canvas height
        const barHeight = value * 5; // Scale the value for the canvas height
        ctx.fillStyle = colors[index % colors.length];
        ctx.fillRect(x, y, barWidth, barHeight);
      });
    }
  }
  
  // Export the BarChart class as the main export of the package
  module.exports = {
    BarChart
  };
  