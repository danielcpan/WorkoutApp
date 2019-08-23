import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Left, List, ListItem, Right, Text, Icon } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';

const styles = StyleSheet.create({
  exercistList: {
    margin: 5,
  },
  exerciseItem: {
    height: 100,
    // backgroundColor: linea
    // backgroundColor: 'red',
    // textTransform: 'uppercase',
    margin: 5,
    borderRadius: 15,
  }, 
  exerciseItemContent: {
    textTransform: 'uppercase', 
    fontWeight: 'bold', 
    color: 'white'    
  }
})

const exercises = [
  { name: 'Squats' },
  { name: 'Push Ups' },
  { name: 'Leg Lifts' },
  { name: 'Running' },
  { name: 'Pistol Squats' },
]

const ExercisesList = props => {
  // console.log(props.navigation)

  function pickColor(index) {
    let gradient;
    if (index % 4 === 0) {
      gradient = ['#f6d365', '#fda085']
    } else if (index % 4 === 1) {
      gradient = ['#f093fb', '#f5576c']
    } else if (index % 4 === 2) {
      gradient = ['#5ee7df', '#b490ca']
    } else {
      gradient = ['#c3cfe2', '#c3cfe2']
    }

    return gradient;
  }

  return (
    <Container>
      <Content>
        <List style={styles.exerciseList}>
          {exercises.map((exercise, idx) => (
            <LinearGradient
              key={idx}
              colors={pickColor(idx)}
              start={{ x: 0, y : -1 }}
              end={{ x: 1, y: 1 }}
              style={styles.exerciseItem}
            >
              <ListItem noIndent style={styles.exerciseItem}>
                <Left>
                  <Text onPress={() => props.navigation.navigate('Links')} style={styles.exerciseItemContent}>{exercise.name}</Text>
                </Left>
                <Right>
                  <Icon name="arrow-forward" style={{ color: 'white' }} />
                </Right>
              </ListItem>
            </LinearGradient>
          ))}
        </List>
      </Content>
    </Container>
  );
}

export default ExercisesList;