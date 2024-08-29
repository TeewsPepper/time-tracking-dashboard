import React from 'react'
import '../styles/Card.css'
import '../styles/CardSocial.css'

const CardSocial = ({ data, activeTimeframe }) => {
    const { title, timeframes } = data;
  const { current, previous } = timeframes[activeTimeframe];
  return (
    <div className="card-container" id="card-container-social">
        <div className="statistics">
            <div className="current">
            <h2>{title}</h2>
            <span>{current}hrs</span>
            </div>
            <div className="efem">
                <img src="/icon-ellipsis.svg" width="20px" height="20px" alt="Icono de menú de opciones" />
                <p>Last {activeTimeframe === 'daily' ? 'Day' : activeTimeframe === 'weekly' ? 'Week' : 'Month'} - {previous}hrs</p>
            </div>
        </div>
        
    </div>
  )
}

export default CardSocial