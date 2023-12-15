import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import './style.css';

const DonutChart = () => {
  const chartRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const chartData = {
    labels: ['Entertainment', 'Grocery', 'Food & dining', 'Shopping', 'Travel', 'Utility & bills', 'Others'],
    datasets: [{
      data: [73.56, 122.61, 147.14, 188.02, 40.88, 163.49, 81.74],
      backgroundColor: [
        '#2BAAB9',
        '#79B252',
        '#FB853C',
        '#9455BE',
        '#FFA833',
        '#C74765',
        '#F960A6',
      ],
    }],
  };

  useEffect(() => {
    const options = {
      cutout: '50%', // Adjust the size of the donut
      borderWidth: 0, // Adjust the thickness of the donut
      onClick: (event, elements) => {
        if (elements.length > 0) {
          const selectedIndex = elements[0].index;
          setSelectedCategory(chartData.labels[selectedIndex]);
        } else {
          // If no category is selected, set to null to show the total
          setSelectedCategory(null);
        }
      },
      plugins: {
        legend: {
          display: false, // Hide the default legend
        },
      },
    };

    const ctx = chartRef.current.getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'doughnut',
      data: chartData,
      options: options,
    });

    return () => {
      myChart.destroy();
    };
  }, []);

  // Calculate the total value based on the selected category
  const totalValue = selectedCategory
    ? chartData.datasets[0].data[chartData.labels.indexOf(selectedCategory)]
    : chartData.datasets[0].data.reduce((total, value) => total + value, 0);

  return (
    <div>
      <canvas ref={chartRef}></canvas>
      <div className="chart-center-text">
        <div className="body2">{selectedCategory || 'Total spend'}</div>
        <div className="title4">${totalValue}</div>
      </div>
    </div>
  );
};

export default DonutChart;