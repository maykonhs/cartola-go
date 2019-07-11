import { createAppContainer, createStackNavigator } from 'react-navigation';
import Home from './containers/Tips/Pages/Home';
import Team from './containers/Tips/Pages/Team';
import History from './containers/Tips/Pages/History';

export default createAppContainer(
  createStackNavigator({
    Home,
    Team,
    History,
  }, {
    defaultNavigationOptions: {
      headerTitle: 'CartolaGo!',
      headerBackTitle: null,
      headerTintColor: '#000',
    },
    mode: 'modal'
  })
)