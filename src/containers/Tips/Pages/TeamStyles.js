import styled from 'styled-components/native';

export const Container = styled.View`
background-color: #551A8B;
padding: 10px;
flex: 1;
`

export const InsideContainer = styled.View`
background-color: #551A8B;
flex: 1;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
`

export const TopBox = styled.View`
background-color: #662B9C;
padding: 10px;
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
`

export const TitleTeam = styled.Text`
color: #FFF;
font-family: 'OpenSans-Bold';
font-size: 20px;
`

export const ListBox = styled.View`
background-color: #662B9C;
margin-top: 10px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`

export const ItemBox = styled.View`
width: 100%;
padding: 10px;
background-color: #FFF;
margin-bottom: 3px;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
`

export const PhotoBox = styled.View`
width: 15%;
padding: 5px;
display: flex;
justify-content: center;
align-items: center;
`

export const PlayerInfo = styled.View`
width: 35%;
padding: 5px;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
`

export const RoundGameBox = styled.View`
width: 25%;
padding: 5px;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
`

export const StatsInfo = styled.View`
width: 25%;
padding: 5px;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
`

export const PlayerPosition = styled.Text`
color: #000;
font-family: 'OpenSans-Bold';
font-size: 10px;
`

export const PlayerName = styled.Text`
color: #000;
font-family: 'OpenSans-Bold';
font-size: 15px;
`

export const PlayerTeam = styled.Text`
color: #000;
font-family: 'OpenSans-Bold';
font-size: 10px;
`

export const PlayerStats = styled.Text`
color: #000;
font-family: 'OpenSans-Bold';
font-size: 12px;
`