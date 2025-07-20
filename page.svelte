<script>
  import {onMount} from 'svelte';
  import BarChart from '$lib/components/BarChart.svelte';
  import LineChart from '$lib/components/LineChart.svelte';
  import MapChart from '$lib/components/MapChart.svelte';

  import {cityWeathData} from '$lib/data/cityWealthData.js';
  import {employmentEducationData} from '$lib/data/employmentEducationData.js';

  //Dark mode chart
const barChartOptions = {
  responsive: true,
  plugins: {
    legend: {labels: {color:'#fff'}},
    tooltip: {mode: 'index', intersect: false}
  },
  scales:{
    x: {ticks: {color:'#fff'}, grid: {color: 'rgba(255,255,255,0.2)'}},
    y: {ticks: {color:'#fff'}, grid: {color: 'rgba(255,255,255,0.2)'}}
  };

  const lineChartOptions = {...carChartOptions};

  const steps = [
    {
      id: 1,
      title: 'The Racial Wealth Divide',
      text: 'Black Households have significantly less wealth than than White households in major cities.',
      charType: 'bar'
    },
    {
      id: 2,
      title: 'Education & Employment',
      text: 'Employment rates also differ by education level across racial groups.',
      chartType: 'line'
    },
    {
      id: 3,
      title: 'Mapping the Divide',
      text: 'Geographic disparties add another layer of complexity.',
      chartType: 'map'
    }
  ],

  let currentStep = 0;

  onMount(()=> {
    const stepElements = document.querySelectorAll('.step');
    const observerOptions = {root: null, rootMargin: '0px', threshold: 0.5};
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = Number(entry.target.dataset.index);
          currentStep = index;
        }
      });
    }, observerOptions);

    stepElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  });
</script>

<style>
  .scrolly-container {
    display: flex;
    flex-direction: row;
    height: 100vh;
    overflow-y: auto;
    background: #121223;
    color: #eee;
  }
  .steps {
    width: 35%;
    padding: 2rem;
    overflow-y: auto;
    font-family: 'Inter', sans-serif;
  }
  .step {
    margin-bottom: 5rem;
    opacity: 0.4;
    transition: opacity 0.3s ease;
  }
  .step.active {
    opacity: 1;
    font-weight: 700;
  }
  .chart-container {
    width: 65%;
    position: sticky;
    top: 0;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>

<div class="scrolly-container">
  <div class="steps">
    {#each steps as step, i}
      <div class="step {i === currentStep ? 'active' : ''}" data-index={i}>
        <h2>{step.title}</h2>
        <p>{step.text}</p>
      </div>
    {/each}
  </div>

  <div class="chart-container">
    {#if steps[currentStep].chartType === 'bar'}
      <BarChart data={cityWealthData} options={barChartOptions} />
    {:else if steps[currentStep].chartType === 'line'}
      <LineChart data={employmentEducationData} options={lineChartOptions} />
    {:else if steps[currentStep].chartType === 'map'}
      <MapChart />
    {/if}
  </div>
</div>
