import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import api from '../../../services/api';

import {
  Container,
  InsideContainer,
  TopBox,
  LegendBox,
  InsideLegendBox,
  LegendText,
  LegendItem,
  TitleTeam,
  ListBox,
  ItemBox,
  PhotoBox,
  PlayerInfo,
  RoundGameBox,
  CaptainInfo,
  StatsInfo,
  PlayerPosition,
  PlayerName,
  PlayerTeam,
  PlayerStats,
} from './TeamStyles';

import { Bubbles } from 'react-native-loader';

import TeamDefault from '../../../assets/team-default.png';
import Appreciation from '../../../assets/appreciation.png';
import Price from '../../../assets/price.png';
import Average from '../../../assets/average.png';
import Captain from '../../../assets/captain.png';

export default class Team extends Component {
  static navigationOptions = {
    title: 'Team'
  }

  state = {
    team: undefined,
    matches: undefined,
  }

  async componentDidMount() {
    const { navigation } = this.props;
    const teamId = navigation.getParam('teamId', 'NOID');
    const response = await api.get(`teams/${teamId}`);
    const team = response.data;
    const response2 = await api.get('matches');
    console.log(response2.data[0].matches);
    const matches = response2.data[0].matches;
    this.setState({ team, matches });
  }

  render() {
    const { team, matches } = this.state;
    return (
      <Container>
        {
          (team === undefined)
          ? <Bubbles size={10} color="#FFF" />
          : (
            <InsideContainer>
              <TopBox>
                <TitleTeam>{team.tactic}</TitleTeam>
                <TitleTeam>{`Time ${team.name}`}</TitleTeam>
              </TopBox>
              <LegendBox>
                <LegendText>Legenda</LegendText>
                <InsideLegendBox>
                  <Image source={Price} /><LegendItem> Preço</LegendItem>
                  <Image source={Appreciation} /><LegendItem> Valorização</LegendItem>
                  <Image source={Average} /><LegendItem> Média</LegendItem>
                </InsideLegendBox>
              </LegendBox>
              <ListBox>
                <FlatList
                  data={team.lineup}
                  keyExtractor={item => item._id}
                  renderItem={({ item }) =>
                    <ItemBox>
                      <PhotoBox><Image style={{width: 64, height: 64}} source={{ uri: `https://cartola-go-api.herokuapp.com/files/${item.photo}` }} /></PhotoBox>
                      <PlayerInfo>
                        <PlayerPosition>{item.position}</PlayerPosition>
                        <PlayerName>{item.name}</PlayerName>
                        <PlayerTeam>{item.team}</PlayerTeam>
                      </PlayerInfo>
                      <CaptainInfo>
                      {
                        team.captain === item._id
                        && (
                          <Image source={Captain} />
                        )
                      }
                      </CaptainInfo>
                      <StatsInfo>
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                          <Image source={Price} />
                          <PlayerStats>{item.value}</PlayerStats>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                          <Image source={Appreciation} />
                          <PlayerStats>{item.appreciation}</PlayerStats>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                          <Image source={Average} />
                          <PlayerStats>{item.average}</PlayerStats>
                        </View>
                      </StatsInfo>
                    </ItemBox>}>
                </FlatList>
              </ListBox>
            </InsideContainer>
          )
        }
      </Container>
    );
  }
}
