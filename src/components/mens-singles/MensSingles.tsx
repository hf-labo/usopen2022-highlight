import React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Grid from '@mui/material/Grid'
import BattleCard from '../BattleCard'
import Data1 from './RD1.json'
import Data2 from './RD2.json'
import Data3 from './RD3.json'
import Data4 from './RD4.json'
import DataQF from './RDQF.json'

const MensSingles: React.FC = () => {
  const [tab, setTab] = React.useState<string>('0')
  const [data, setData] = React.useState<any>(Data1)
  const handleChangeTab = (event: React.SyntheticEvent, newValue: string) => {
    setTab(newValue)
    setData([Data1, Data2, Data3, Data4, DataQF, {"data": []}, {"data": []}][parseInt(newValue)])
  }
  return (
    <div className="mensSingles">
      <Tabs value={tab} onChange={handleChangeTab} variant="scrollable" scrollButtons="auto">
        <Tab value='0' label="RD 1" />
        <Tab value='1' label="RD 2" />
        <Tab value='2' label="RD 3" />
        <Tab value='3' label="RD 4" />
        <Tab value='4' label="RD QF" />
        <Tab value='5' label="RD SF" />
        <Tab value='6' label="RD F" />
      </Tabs>
      <Grid container>
        {
          data.data.map((e: any) => {
            return (
              <BattleCard player1={e.player1} player2={e.player2} hightlight={e.highlight} extendedHighlight={e.extendedHighlight} fullMatch={e.fullMatch} />
            )
          })
        }
      </Grid>
    </div>
  )
}

export default MensSingles
