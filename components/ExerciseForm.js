import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input } from 'native-base';

class ExerciseForm extends Component {

  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item>
              <Input placeholder="Exercise" />
            </Item>
            <Item last>
              <Input placeholder="Password" />
            </Item>
          </Form>
        </Content>
      </Container>
    );
  }
}

ExerciseForm.navigationOptions = ({ navigation }) => ({
  title: 'Add Exercise'
});

export default ExerciseForm;