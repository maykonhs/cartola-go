import styled from 'styled-components/native';

export const Container = styled.View`
background-color: #551A8B;
flex: 1;
display: flex;
justify-content: space-around;
align-items: center;
`

export const Title = styled.Text`
color: #FFF;
font-family: 'OpenSans-Bold';
font-size: 25px;
`

export const Card = styled.View`
height: 100px;
background-color: #662B9C;
border-radius: 5px
padding: 5px;
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
`
export const ImageBox = styled.View`
width: 20%;
display: flex;
justify-content: center;
align-items: center;
`

export const DescriptionBox = styled.View`
width: 80%;
padding: 10px;
display: flex;
flex-direction: column;
flex-wrap: wrap;
justify-content: space-around;
align-items: flex-start;
`

export const TitleCard = styled.Text`
color: #FFF;
font-family: 'OpenSans-Bold';
font-size: 15px;
`

export const DescriptionCard = styled.Text`
margin-top: 5px;
color: #FFF;
font-family: 'OpenSans-Bold';
font-size: 10px;
`