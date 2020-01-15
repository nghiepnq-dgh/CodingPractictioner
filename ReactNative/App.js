import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import ListItems from './screens/ListItems';
import Details from './screens/Details';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Profile: {screen: ProfileScreen},
  ListItems: {screen: ListItems},
  Details: {screen: Details}
});

const App = createAppContainer(MainNavigator);

export default App;