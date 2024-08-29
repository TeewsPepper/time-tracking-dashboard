
import './App.css'
import { useState } from 'react';
import data from '../data/data.json';
import CardSelfCare from './components/CardSelfCare'
import CardWork from './components/CardWork'
import CardPlay from './components/CardPlay'
import CardStudy from './components/CardStudy'
import CardExercise from './components/CardExercise'
import CardSocial from './components/CardSocial'
import CardSelf from './components/CardSelf'

function App() {
  const [activeTimeframe, setActiveTimeframe] = useState('daily');

  return (
    <>
    <div className="main-container">
      <CardSelfCare setActiveTimeframe={setActiveTimeframe} activeTimeframe={activeTimeframe} />
      <CardWork data={data[0]} activeTimeframe={activeTimeframe} />
      <CardPlay data={data[1]} activeTimeframe={activeTimeframe} />
      <CardStudy data={data[2]} activeTimeframe={activeTimeframe} />
      <CardExercise data={data[3]} activeTimeframe={activeTimeframe} />
      <CardSocial data={data[4]} activeTimeframe={activeTimeframe} />
      <CardSelf data={data[5]} activeTimeframe={activeTimeframe} />
    </div>
      
    </>
  )
}

export default App
