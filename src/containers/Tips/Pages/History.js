import React, { Component } from 'react';

import {
  View,
  Text,
} from 'react-native';

import {
  Container,
  InsideContainer,
  TopBox,
  ItemBox,
  TeamName,
  TitlePage,
  StyledPicker,
} from './HistoryStyles';

import { Bubbles } from 'react-native-loader';

import api from '../../../services/api';

export default class History extends Component {
  static navigationOptions = {
    title: 'History'
  }

  state = {
    round: '',
    history: [],
    teams: [],
  }

  async componentDidMount() {
    const response = await api.get('history');
    const history = response.data;
    const response2 = await api.get(`history/${history[0]._id}`);
    this.setState({
      round: history[0].round,
      history,
      teams: response2.data.teams,
    });
  }

  render() {
    const { round, history, teams } = this.state;
    return (
      <Container>
        {
          teams.length < 1
          ? <Bubbles size={10} color="#FFF" />
          : (
            <InsideContainer>
              <TopBox>
                <TitlePage>Histórico de Pontuação</TitlePage>
                {
                  history
                  && history.length > 0
                  && (
                    <StyledPicker
                      selectedValue={round}
                      onValueChange={async (itemValue, itemIndex) => {
                        console.log(itemValue);
                        console.log(itemIndex);
                        const response = await api.get(`history/${history[itemIndex]._id}`);
                        console.log(response.data.teams);
                        this.setState({
                          round: itemValue,
                          teams: response.data.teams
                        })
                      }}>
                      {
                        history.map(item => (
                          <StyledPicker.Item label={`Rodada ${item.round}`} value={item.round} />
                        ))
                      }
                    </StyledPicker>
                  )
                }
              </TopBox>
              {
                teams
                && teams.length > 0
                && teams.map(team => (
                  <ItemBox>
                    <TeamName>{team.name}</TeamName>
                    <TeamName>{`${team.points} pts`}</TeamName>
                  </ItemBox>
                ))
              }
            </InsideContainer>
          )
        }
      </Container>
    );
  }
}
