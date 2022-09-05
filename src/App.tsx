import React from 'react'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import Tab from '@mui/material/Tab'
import MensSingles from './components/mens-singles/MensSingles'
import WomensSingles from './components/womens-singles/WomensSingles'
import MensDoubles from './components/mens-doubles/MensDoubles'
import WomensDoubles from './components/womens-doubles/WomensDoubles'
import MixedDoubles from './components/mixed-doubles/MixedDoubles'
import './App.css'

function App() {
  const [tab, setTab] = React.useState<string>('0')
  const handleChangeTab = (event: React.SyntheticEvent, newValue: string) => {
    setTab(newValue)
  }
  return (
    <div className="App">
      <TabContext value={tab}>
        <TabList onChange={handleChangeTab}>
          <Tab label="Men's Singles" value='0' />
          <Tab label="Women's Singles" value='1' />
          <Tab label="Men's Doubles" value='2' />
          <Tab label="Women's Doubles" value='3' />
          <Tab label="Mixed Doubles" value='4' />
        </TabList>
        <TabPanel value="0"><MensSingles /></TabPanel>
        <TabPanel value="1"><WomensSingles /></TabPanel>
        <TabPanel value="2"><MensDoubles /></TabPanel>
        <TabPanel value="3"><WomensDoubles /></TabPanel>
        <TabPanel value="4"><MixedDoubles /></TabPanel>
      </TabContext>
    </div>
  )
}

export default App
