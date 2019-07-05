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
  TitleTeam,
  ListBox,
  ItemBox,
  PhotoBox,
  PlayerInfo,
  RoundGameBox,
  StatsInfo,
  PlayerPosition,
  PlayerName,
  PlayerTeam,
  PlayerStats,
} from './TeamStyles';

import PhotoDefault from '../../../assets/photo-default.png';
import TeamDefault from '../../../assets/team-default.png';
import Cassio from '../../../assets/cassio.png';
import Everton from '../../../assets/everton.png';
import Hernanes from '../../../assets/hernanes.png';
import Appreciation from '../../../assets/appreciation.png';



export default class Team extends Component {
  static navigationOptions = {
    title: 'Team'
  }

  state = {
    team: undefined,
  }

  async componentDidMount() {
    const { navigation } = this.props;
    const teamId = navigation.getParam('teamId', 'NOID');
    const response = await api.get(`teams/${teamId}`);
    const team = response.data;
    this.setState({ team });
  }

  render() {
    const { team } = this.state;
    return (
      <Container>
        {
          (team === undefined)
          ? <TitleTeam>CARREGANDO...</TitleTeam>
          : (
            <InsideContainer>
              <TopBox>
                <TitleTeam>{team.tactic}</TitleTeam>
                <TitleTeam>{`Time ${team.name}`}</TitleTeam>
              </TopBox>
              <ListBox>
                <FlatList
                  data={team.lineup}
                  keyExtractor={item => item._id}
                  renderItem={({ item }) =>
                    <TouchableOpacity>
                      <ItemBox>
                        <PhotoBox><Image style={{width: 64, height: 64}} source={{ uri: `http://10.0.3.2:3333/files/${item.photo}` }} /></PhotoBox>
                        <PlayerInfo>
                          <PlayerPosition>{item.position}</PlayerPosition>
                          <PlayerName>{item.name}</PlayerName>
                          <PlayerTeam>{item.team}</PlayerTeam>
                        </PlayerInfo>
                        <RoundGameBox>
                          <Image source={TeamDefault} />
                          <PlayerStats>X</PlayerStats>
                          <Image source={TeamDefault} />
                        </RoundGameBox>
                        <StatsInfo>
                          <PlayerStats>{item.value}</PlayerStats>
                          <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={Appreciation} />
                            <PlayerStats>{item.appreciation}</PlayerStats>
                          </View>
                          <PlayerStats>{item.average}</PlayerStats>
                        </StatsInfo>
                      </ItemBox>
                    </TouchableOpacity>}>
                </FlatList>
              </ListBox>
            </InsideContainer>
          )
        }
      </Container>
    );
  }
}
