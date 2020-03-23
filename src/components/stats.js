import React from "react"
import styled from "styled-components"

const Stats = ({ className, stats }) => (
  <div className={className}>
    {stats.map(stat => (
      <div key={stat.id}>
        <span>{stat.elements.number.value}</span>
        <span>{stat.elements.text.value}</span>
      </div>
    ))}
  </div>
)

const StyledStats = styled(Stats)`
display: grid;

div{
  display: flex;
  flex-direction: column;
}

span:first-of-type{
  font-family: "Proxima Nova";
  color: #7616B2;
}

span:last-of-type{
  font-family: "Silka";
  color: #230138;
}

@media screen and (min-width: 1000px){
  margin-top: 275px;
  margin-bottom: 275px;
  margin-left: 50px;
  margin-right: 50px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 60px;
  grid-row-gap: 120px;

  span:first-of-type{
    font-size: 96px;
    margin-bottom: 40px;
  }

  span:last-of-type{
    font-size: 36px;
  }
}

@media screen and (max-width: 1000px){
  margin-top: 120px;
  margin-bottom: 120px;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 30px;
  grid-row-gap: 80px;

  span:first-of-type{
    font-size: 72px;
    margin-bottom: 30px;
  }

  span:last-of-type{
    font-size: 18px;
  }
}
`

export default StyledStats
