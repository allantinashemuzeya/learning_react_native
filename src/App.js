import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import ComponentsScreen from './screens/ComponentsScreen';
import ListScreen from './screens/ListScreen';

const navigator = createStackNavigator(
  {
    Components: ComponentsScreen,
    List: ListScreen,
  },
  {
    initialRouteName: 'List',
    defaultNavigationOptions: {
      title: 'App',
    },
  }
);

export default createAppContainer(navigator);
