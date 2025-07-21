function getChartData(filteredCities) {
  return {
    labels: filteredCities.map(city => city.name),
    datasets: [
      {
        label: 'White Median Net Worth',
        data: filteredCities.map(city => city.white),
        backgroundColor: '#555d50', // deep moss green
        borderRadius: 6,
      },
      {
        label: 'Black Median Net Worth',
        data: filteredCities.map(city => city.black),
        backgroundColor: '#c94f4f', // burnt red
        borderRadius: 6,
      }
    ]
  };
}

