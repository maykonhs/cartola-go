import styled from 'styled-components/native';

export const Container = styled.View`
background-color: #551A8B;
flex: 1;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
`

export const InsideContainer = styled.View`
background-color: #551A8B;
display: flex;
width: 100%;
flex-direction: column;
justify-content: flex-start;
align-items: center;
`

export const TopBox = styled.View`
background-color: #662B9C;
margin-bottom: 10px;
padding: 10px;
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
`

export const ItemBox = styled.View`
width: 90%;
padding: 10px;
background-color: #FFF;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
`

export const TitlePage = styled.Text`
color: #FFF;
font-family: 'OpenSans-Bold';
font-size: 15px;
`

export const TeamName = styled.Text`
color: #000;
font-family: 'OpenSans-Bold';
font-size: 15px;
`

export const StyledPicker = styled.Picker`
height: 50px;
width: 120px;
color: #FFF;
font-family: 'OpenSans-Bold';
`