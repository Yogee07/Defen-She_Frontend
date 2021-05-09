import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { StyleSheet, Text, View, Dimensions, Button} from 'react-native';
import AnimatedSplash from "react-native-animated-splash-screen";
import RenderHome from './screens/RenderHome';
import RenderAnalytics from './screens/AnalyticsScreen';
import RenderExplore from './screens/ExploreScreen';
import AdsScreen from './screens/UserProfile';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import UserProfile from './screens/UserProfile';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Drawer = createDrawerNavigator();

export default class App extends Component{
  state = {
    isLoaded: false,
  }
  componentDidMount = async ()=>{
    setTimeout(()=>{
      this.setState({isLoaded: true})
    },1000)
  }
  render(){
    return(
      <AnimatedSplash
        translucent={true}
        isLoaded={this.state.isLoaded}
        logoImage={require("./assets/splash.png")}
        backgroundColor={"black"}
        logoHeight={windowHeight}
        logoWidth={windowWidth}
      >
        <View style={styles.container}>
          <StatusBar style="auto" />
          <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home" drawerType={'front'} drawerPosition={'left'} hideStatusBar={true}
              drawerContentOptions={{
                activeTintColor: '#22A2D3',
                itemStyle: { marginVertical: 5 },
                labelStyle: {fontSize: 17, fontWeight: 'normal'}
              }}
            >
              <Drawer.Screen name="Home" component={RenderHome} />
              <Drawer.Screen name="Insights" component={RenderAnalytics} />
              <Drawer.Screen name="Explore" component={RenderExplore} />
              <Drawer.Screen name="Your Profile" component={UserProfile} /> 
            </Drawer.Navigator>
          </NavigationContainer>
        </View>
      </AnimatedSplash>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: windowWidth,
  }
});
