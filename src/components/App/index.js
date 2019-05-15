import React, { Component } from 'react'
import dayjs from 'dayjs'
import 'dayjs/locale/es'

import Hero from '../Hero'
import Filters from '../Filters'
import Hotels from '../Hotels'

dayjs.locale('es')

const API_URL = 'https://wt-8a099f3e7c73b2d17f4e018b6cfd6131-0.sandbox.auth0-extend.com/acamica'

class App extends Component {
  state = {
    filters: {
      dateFrom: dayjs(),
      dateTo: dayjs(),
      country: '',
      price: 0,
      rooms: 0,
    },
    hotelsBackup: [],
    hotelsFiltered: [],
  }

  async componentDidMount() {
    try {
      const response = await fetch(API_URL)
      const data = await response.json()
      this.setState({ hotelsBackup: data, hotelsFiltered: data })
    } catch (error) {
      console.error(error)
    }
  }

  handleFilterChange = newFilters => {
    this.setState({ filters: newFilters }, () => {
      this.handleApplyFilters()
    })
  }

  handleApplyFilters = () => {
    const { filters, hotelsBackup } = this.state

    const filterPrice = Number(filters.price)
    const hotelsFiltered = hotelsBackup
      .filter(hotel => {
        return (
          dayjs(hotel.availabilityFrom).isAfter(filters.dateFrom)
          && dayjs(hotel.availabilityTo).isBefore(filters.dateTo)
          && ((filters.country === '' || filters.country === 'Todos los países') ? true : (filters.country === hotel.country))
          && ((filterPrice === 0 || filterPrice === 'Cualquier precio') ? true : (filterPrice === hotel.price))
          && ((filters.rooms === 0 || filters.rooms === 'Cualquier tamaño') ? true : (hotel.rooms >= filters.rooms))
        )
      })
    this.setState({ hotelsFiltered })
  }

  render() {
    const { filters, hotelsFiltered } = this.state

    return (
      <div className="container">
        <Hero filters={filters} />
        <Filters filters={filters} onFilterChange={this.handleFilterChange} />
        <Hotels data={hotelsFiltered} />
      </div>
    )
  }
}

export default App