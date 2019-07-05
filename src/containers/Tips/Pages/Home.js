import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import risk from '../../../assets/risk.png';
import cheap from '../../../assets/cheap.png';
import money from '../../../assets/money.png';
import principal from '../../../assets/principal.png';

import {
  Container,
  Card,
  ImageBox,
  DescriptionBox,
  TitleCard,
  DescriptionCard,
  Title,
} from './HomeStyles';

const fullWidth = Dimensions.get('window').width;

export default class Home extends Component {
  static navigationOptions = {
    title: 'Home'
  }

  handleNavigation = (teamId) => {
    const { navigation } = this.props;
    navigation.navigate('Team', { teamId })
  }

  render() {
    return (
      <Container>
        <Title>Dicas da Rodada</Title>
        <TouchableOpacity
          onPress={() => {
            this.handleNavigation('5d1dfab7ca02fa0ed481bb09');
          }}>
          <Card width={fullWidth}>
            <ImageBox><Image source={principal} /></ImageBox>
            <DescriptionBox>
              <TitleCard>Principal</TitleCard>
              <DescriptionCard>Time focado em fazer a maior pontuação sem se preocupar com uma possível desvalorização do jogador</DescriptionCard>
            </DescriptionBox>
          </Card>        
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.handleNavigation('5d1e1a866a318d1f141a7a28');
          }}>
          <Card width={fullWidth}>
            <ImageBox><Image source={money} /></ImageBox>
            <DescriptionBox>
              <TitleCard>Valorização</TitleCard>
              <DescriptionCard>Time focado em ganhar cartoletas baseando-se em uma valorização do jogador.</DescriptionCard>
            </DescriptionBox>
          </Card>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.handleNavigation('5d1e19146a318d1f141a7a27');
          }}>
          <Card width={fullWidth}>
            <ImageBox><Image source={risk} /></ImageBox>
            <DescriptionBox>
              <TitleCard>Kamikaze</TitleCard>
              <DescriptionCard>É tudo ou nada! Se você quer mitar sozinho, esse é o seu time.</DescriptionCard>
            </DescriptionBox>
          </Card>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.handleNavigation('5d1e1aea6a318d1f141a7a29');
          }}>
          <Card width={fullWidth}>
            <ImageBox><Image source={cheap} /></ImageBox>
            <DescriptionBox>
              <TitleCard>Bom e Barato</TitleCard>
              <DescriptionCard>Quer pontuar bem mas não tem grana ? Deixa com a gente...</DescriptionCard>
            </DescriptionBox>
          </Card>
        </TouchableOpacity>
      </Container>
    )
  }
}
