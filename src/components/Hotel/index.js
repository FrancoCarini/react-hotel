import React from 'react'
import PropTypes from 'prop-types'
import dayjs from 'dayjs'

const Hotel = ({ slug, name, photo, description, availabilityFrom, availabilityTo, rooms, city, country, price }) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={photo} alt={name} />
        </figure>
      </div>
      <div className="card-content">
        <p className="title is-4">{name}</p>
        <p className="title is-5">
          {dayjs(availabilityFrom).format('YYYY[-]MM[-]DD')} · {dayjs(availabilityTo).format('YYYY[-]MM[-]DD')}{' '}
        </p>
        <p>{description}</p>
        <div className="field is-grouped is-grouped-multiline" style={{ marginTop: '1em' }}>
          <div className="control">
            <div className="tags has-addons">
              <span className="tag is-medium is-info">
                <i className="fas fa-map-marker" />
              </span>
              <span className="tag is-medium">
                {city}, {country}
              </span>
            </div>
          </div>
          <div className="control">
            <div className="tags has-addons">
              <span className="tag is-medium is-info">
                <i className="fas fa-bed" />
              </span>
              <span className="tag is-medium">{rooms} Habitaciones</span>
            </div>
          </div>
          <div className="control">
            <div className="tags">
              <span className="tag is-medium is-info">
                {Array.from({ length: 4 }, (_, index) => (
                  <i
                    className="fas fa-dollar-sign"
                    style={{ margin: '0 .125em', opacity: `${index + 1 <= price ? '1' : '0.25'}` }}
                  />
                ))}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="card-footer">
        <a href="#0" className="card-footer-item has-background-primary has-text-white has-text-weight-bold">
          Reservar
        </a>
      </div>
    </div>
  )
}

Hotel.propTypes = {
  slug: PropTypes.string,
  name: PropTypes.string,
  photo: PropTypes.string,
  description: PropTypes.string,
  availabilityFrom: PropTypes.number,
  availabilityTo: PropTypes.number,
  rooms: PropTypes.number,
  city: PropTypes.string,
  country: PropTypes.string,
  price: PropTypes.number,
}

export default Hotel
