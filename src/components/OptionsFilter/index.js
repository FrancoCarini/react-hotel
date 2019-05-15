import React from 'react'
import PropTypes from 'prop-types'
import nanoid from 'nanoid'

const OptionsFilter = ({ options, name, selected, icon, onOptionChange }) => {
  const handleOptionChange = event => {
    const { name, value } = event.target
    onOptionChange({ name, value })
  }

  return (
    <div className="field">
      <div className="control has-icons-left">
        <div className="select" style={{ width: '100%' }}>
          <select style={{ width: '100%' }} name={name} value={selected} onChange={handleOptionChange}>
            {options.map(option => (
              <option key={nanoid()} value={option.value}>
                {option.name}
              </option>
            ))}
          </select>
        </div>

        <div className="icon is-small is-left">
          <i className={`fas fa-${icon}`} />
        </div>
      </div>
    </div>
  )
}

OptionsFilter.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      name: PropTypes.string,
    })
  ),
  name: PropTypes.string,
  selected: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  icon: PropTypes.oneOf(['globe', 'dollar-sign', 'bed']),
  onOptionChange: PropTypes.func,
}

export default OptionsFilter
