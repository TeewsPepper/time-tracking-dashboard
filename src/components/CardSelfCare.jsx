
import '../styles/CardSelfcare.css'

function CardSelfCare({ setActiveTimeframe, activeTimeframe }) {
  

  const handleButtonClick = (timeframe) => {
    setActiveTimeframe(timeframe);
  };
  return (
    <>
    
    <div className="container" id="container">
        <div className="header">
          <img src="/image-jeremy.png" alt="Imagen de Jeremy" />
          <div>
              <span>Report for</span>
              <h1>Jeremy Robson</h1>
          </div>
        </div>
        <div className="tracks">
        <button
          className={`btn-track ${activeTimeframe === 'daily' ? 'active' : ''}`}
          id="daily"
          onClick={() => handleButtonClick('daily')}
        >
          Daily
        </button>
        <button
          className={`btn-track ${activeTimeframe === 'weekly' ? 'active' : ''}`}
          id="weekly"
          onClick={() => handleButtonClick('weekly')}
        >
          Weekly
        </button>
        <button
          className={`btn-track ${activeTimeframe === 'monthly' ? 'active' : ''}`}
          id="monthly"
          onClick={() => handleButtonClick('monthly')}
        >
          Monthly
        </button>
        </div>
    </div>
    </>
  )
}

export default CardSelfCare