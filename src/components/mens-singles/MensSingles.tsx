import React from 'react'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import Tab from '@mui/material/Tab'
import RD1 from './RD1'
import RD2 from './RD2'
import RD3 from './RD3'
import RD4 from './RD4'
import RDQF from './RDQF'
import RDSF from './RDSF'
import RDF from './RDF'

const MensSingles: React.FC = () => {
  const [tab, setTab] = React.useState<string>('0')
  const handleChangeTab = (event: React.SyntheticEvent, newValue: string) => {
    setTab(newValue)
  }
  return (
    <div className="mensSingles">
      <TabContext value={tab}>
        <TabList onChange={handleChangeTab}>
          <Tab label="RD 1" value='0' />
          <Tab label="RD 2" value='1' />
          <Tab label="RD 3" value='2' />
          <Tab label="RD 4" value='3' />
          <Tab label="RD QF" value='4' />
          <Tab label="RD SF" value='5' />
          <Tab label="RD F" value='6' />
        </TabList>
        <TabPanel value="0"><RD1 /></TabPanel>
        <TabPanel value="1"><RD2 /></TabPanel>
        <TabPanel value="2"><RD3 /></TabPanel>
        <TabPanel value="3"><RD4 /></TabPanel>
        <TabPanel value="4"><RDQF /></TabPanel>
        <TabPanel value="5"><RDSF /></TabPanel>
        <TabPanel value="6"><RDF /></TabPanel>
      </TabContext>
    </div>
  )
}

export default MensSingles
