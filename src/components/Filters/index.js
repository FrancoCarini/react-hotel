import React, { Component } from 'react'
import PropTypes from 'prop-types'
import dayjs from 'dayjs'

import DateFilter from '../DateFilter'
import OptionsFilter from '../OptionsFilter'

const countryOptions = [
  { value: undefined, name: 'Todos los países' },
  { value: 'Argentina', name: 'Argentina' },
  { value: 'Brasil', name: 'Brasil' },
  { value: 'Chile', name: 'Chile' },
  { value: 'Uruguay', name: 'Uruguay' },
]

const priceOptions = [
  { value: undefined, name: 'Cualquier precio' },
  { value: 1, name: '$' },
  { value: 2, name: '$$' },
  { value: 3, name: '$$$' },
  { value: 4, name: '$$$$' },
]

const roomOptions = [
  { value: undefined, name: 'Cualquier tamaño' },
  { value: 10, name: 'Hotel pequeño' },
  { value: 20, name: 'Hotel mediano' },
  { value: 30, name: 'Hotel grande' },
]

class Filters extends Component {
  handleOptionChange = ({ name, value }) => {
    const { filters, onFilterChange } = this.props

    const newFilters = { ...filters, [name]: value }

    onFilterChange(newFilters)
  }

  render() {
    const { filters } = this.props

    return (
      <nav className="navbar is-info" style={{ justifyContent: 'center' }}>
        <div className="navbar-item">
          <DateFilter
            onDateChange={this.handleOptionChange}
            name="dateFrom"
            date={filters.dateFrom}
            icon="sign-in-alt"
          />
        </div>
        <div className="navbar-item">
          <DateFilter onDateChange={this.handleOptionChange} name="dateTo" date={filters.dateTo} icon="sign-out-alt" />
        </div>

        <div className="navbar-item">
          <OptionsFilter
            onOptionChange={this.handleOptionChange}
            name="country"
            options={countryOptions}
            selected={filters.country}
            icon="globe"
          />
        </div>
        <div className="navbar-item">
          <OptionsFilter
            onOptionChange={this.handleOptionChange}
            name="price"
            options={priceOptions}
            selected={filters.price}
            icon="dollar-sign"
          />
        </div>
        <div className="navbar-item">
          <OptionsFilter
            onOptionChange={this.handleOptionChange}
            name="rooms"
            options={roomOptions}
            selected={filters.rooms}
            icon="bed"
          />
        </div>
      </nav>
    )
  }
}

Filters.propTypes = {
  filters: PropTypes.shape({
    dateFrom: PropTypes.instanceOf(dayjs),
    dateTo: PropTypes.instanceOf(dayjs),
    country: PropTypes.string,
    price: PropTypes.number,
    rooms: PropTypes.number,
  }),
  onFilterChange: PropTypes.func,
}

export default Filters
