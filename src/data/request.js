import axios from 'axios'
import parsers from './parsers'

async function usStats() {
    const res = await axios.get('https://api.covidtracking.com/v1/us/current.json')
    return parsers.usStats(res.data)
}

async function stateStats(state) {
    const res = await axios.get('https://api.covidtracking.com/v1/states/current.json')
    return parsers.stateStats(state, res.data)
}

async function historicUS() {
    const res = await axios.get('https://api.covidtracking.com/v1/us/daily.json')
    return parsers.historicUS(res.data)
}

export default {
    usStats,
    stateStats,
    historicUS,
}