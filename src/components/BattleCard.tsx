import React from 'react'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

type Props = {
  player1: string,
  player2: string,
  hightlight: string,
  extendedHighlight: string,
  fullMatch: string,
}

const BattleCard: React.FC<Props> = ({player1, player2, hightlight = '', extendedHighlight = '', fullMatch = ''}: Props) => {
  const showThumbnail = () => {
    if (hightlight !== '') {
      const id = hightlight.substr(hightlight.indexOf('=') + 1)
      const url = 'https://img.youtube.com/vi/' + id +'/sddefault.jpg'
      return <CardMedia className="thumbnail" component="img" image={url} />
    } else {
      return <div className="dmy-thumbnail">No Highlight</div>
    }
  }
  const showHightlight = () => {
    return hightlight !== '' ? <a href={hightlight} target="_blank">Highlight</a> : <div />
  }
  const showExtendedHighlight = () => {
    return extendedHighlight !== '' ? <a href={extendedHighlight} target="_blank">Extended Highlight</a> : <div />
  }
  const showFullMatch = () => {
    return fullMatch !== '' ? <a href={fullMatch} target="_blank">Full Match</a> : <div />
  }
  return (
    <Card className="battleCard">
      {showThumbnail()}
      <CardContent>
        <Typography sx={{fontSize: 14}}>
          {player1} v.s. {player2}
        </Typography>
        <Typography sx={{fontSize: 13, marginTop: 1}}>
        {showHightlight()} {showExtendedHighlight()} {showFullMatch()}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default BattleCard
