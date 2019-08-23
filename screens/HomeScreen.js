import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { Icon } from 'native-base'

import ExercisesList from '../components/ExercisesList';

class ExercisesScreen extends React.Component {

  render() {
    // console.log(this.props)
    return (
      <View style={styles.container}>
        <ExercisesList navigation={this.props.navigation}/>
      </View>
    );
  }
}

ExercisesScreen.navigationOptions = ({ navigation }) => ({
  title: 'Exercises',
  headerRight: (
    <Icon 
      style={{ paddingRight: 15 }} 
      name="ios-add-circle-outline" 
      onPress={() => navigation.push('ExerciseForm')}
    />
  )
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
  },
});


export default ExercisesScreen;