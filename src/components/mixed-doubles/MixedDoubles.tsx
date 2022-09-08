import React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Grid from '@mui/material/Grid'
import BattleCard from '../BattleCard'
import Data1 from './RD1.json'

const MixedDoubles: React.FC = () => {
  const [tab, setTab] = React.useState<string>('0')
  const [data, setData] = React.useState<any>(Data1)
  const handleChangeTab = (event: React.SyntheticEvent, newValue: string) => {
    setTab(newValue)
    setData([Data1, {"data": []}, {"data": []}, {"data": []}, {"data": []}, {"data": []}, {"data": []}][parseInt(newValue)])
  }
  return (
    <div className="mixedDoubles">
      <Tabs value={tab} onChange={handleChangeTab} variant="scrollable" scrollButtons="auto">
        <Tab value='0' label="RD 1" />
        <Tab value='1' label="RD 2" />
        <Tab value='3' label="RD QF" />
        <Tab value='4' label="RD SF" />
        <Tab value='5' label="RD F" />
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

export default MixedDoubles
