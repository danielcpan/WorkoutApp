import React from 'react';
import { Container, Content, Left, List, ListItem, Right, Text, Icon } from 'native-base';

const exercises = [
  { name: 'Squats' },
  { name: 'Push Ups' },
  { name: 'Leg Lifts' },
  { name: 'Running' },
  { name: 'Pistol Squats' },
]

const ExercisesList = props => {

  return (
    <Container>
      <Content>
        <List>
          {exercises.map((exercise, idx) => (
            <ListItem key={idx}>
              <Left>
                <Text>{exercise.name}</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
          ))}
        </List>
      </Content>
    </Container>
  );
}

export default ExercisesList;