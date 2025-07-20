export const chartData = [
  {
    step: 0,
    title: 'Introduction to Racial Wealth Gaps',
    description: 'An overview of wealth disparities across racial groups in the U.S.',
    chartType: 'text'
  },
  {
    step: 1,
    title: 'Historical Context in Major Cities',
    description: 'How historical policies like redlining shaped racial wealth divides.',
    chartType: 'map',
    dataSource: 'historical_redlining_data.json'
  },
  {
    step: 2,
    title: 'Data Comparison: Black vs White Households',
    description: 'Median household wealth comparisons across key cities.',
    chartType: 'bar',
    dataSource: 'wealth_comparison_data.json'
  },
  {
    step: 3,
    title: 'Impact of Education & Employment',
    description: 'Educational attainment and employment data by race and city.',
    chartType: 'line',
    dataSource: 'education_employment_data.json'
  },
  {
    step: 4,
    title: 'Policy Solutions',
    description: 'Policy recommendations to address the racial wealth gap.',
    chartType: 'text'
  }
];
