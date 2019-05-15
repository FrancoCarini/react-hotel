import React from 'react'
import PropTypes from 'prop-types'
import dayjs from 'dayjs'

const DateFilter = ({ date, name, icon, onDateChange }) => {
  const dateFormatted = date.format('YYYY[-]MM[-]DD')

  const handleDateChange = event => {
    const { name, value } = event.target
    onDateChange({ name, value: dayjs(value) })
  }

  return (
    <div className="field">
      <div className="control has-icons-left">
        <input className="input" type="date" name={name} value={dateFormatted} onChange={handleDateChange} />
        <span className="icon is-small is-left">
          <i className={`fas fa-${icon}`} />
        </span>
      </div>
    </div>
  )
}

DateFilter.propTypes = {
  date: PropTypes.instanceOf(dayjs),
  name: PropTypes.string,
  icon: PropTypes.oneOf(['sign-in-alt', 'sign-out-alt']),
  onDateChange: PropTypes.func,
}

export default DateFilter
