import React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import MensSingles from './components/mens-singles/MensSingles'
import WomensSingles from './components/womens-singles/WomensSingles'
import MensDoubles from './components/mens-doubles/MensDoubles'
import WomensDoubles from './components/womens-doubles/WomensDoubles'
import MixedDoubles from './components/mixed-doubles/MixedDoubles'
import './App.css'

const App: React.FC = () => {
  const [tab, setTab] = React.useState<string>('0')
  const handleChangeTab = (event: React.SyntheticEvent, newValue: string) => {
    setTab(newValue)
  }
  return (
    <div className="App">
      <Tabs value={tab} onChange={handleChangeTab} variant="scrollable" scrollButtons="auto">
        <Tab value='0' label="Men's Singles" />
        <Tab value='1' label="Women's Singles" />
        <Tab value='2' label="Men's Doubles" />
        <Tab value='3' label="Women's Doubles" />
        <Tab value='4' label="Mixed Doubles" />
      </Tabs>
      <div hidden={tab !== '0'}><MensSingles /></div>
      <div hidden={tab !== '1'}><WomensSingles /></div>
      <div hidden={tab !== '2'}><MensDoubles /></div>
      <div hidden={tab !== '3'}><WomensDoubles /></div>
      <div hidden={tab !== '4'}><MixedDoubles /></div>
    </div>
  )
}

export default App
