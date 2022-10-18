<script context="module">
    import requests from '../data/request.js'

    export async function preload() {
        try {
            const usStats = await requests.usStats()
            const historicUS = await requests.historicUS()
            return { usStats, historicUS }
        } catch(e) {
            this.error(500, "There was an error in calling the api, please try again in 5 minutes.")
            return
        }
    }
</script>

<script>
    import CovidStat from '../components/CovidStat.svelte'
    import CovidChart from '../components/CovidChart.svelte'
    import TableContainer from '../components/TableContainer.svelte'
    import About from './about.svelte';
    import Nav from '../components/Nav.svelte';
    import Error from './_error.svelte';

    export let usStats
    export let historicUS
    console.log(usStats, "usStats")
    console.log(historicUS, "historicUS")
</script>

<svelte:head>
    <title>Covid 19 - US</title>
</svelte:head>

<div class="section header">
    <div class="container">
        <h1>Covid 19 - US</h1>
    </div>
</div>

<CovidStat {...usStats} />

<CovidChart {...historicUS} />

<TableContainer />

