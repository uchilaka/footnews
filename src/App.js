import React, { Component } from 'react';

// imported the UI library
import 'semantic-ui-css/semantic.min.css';
// imported Semantic UI elements to make building our interface easier
import {
  Form,
  Container,
  Header,
  Button
} from 'semantic-ui-react';

class App extends Component {

  state = {
    formData: {
      timeCreated: new Date()
    },
    errors: {}
  }

  validateWithPromise() {
    const { formData } = this.state;
    let errors = {},
      validated = true;

    return new Promise((ok, reject) => {
      console.info('validating data -> %o', formData);
      if (!formData.fullName) {
        errors.fullName = 'Full name is required';
        validated = false;
      }
      if (!formData.dateOfBirth) {
        errors.dateOfBirth = 'Date of birth is required';
        validated = false;
      }

      this.setState(Object.assign({}, this.state, {
        errors: errors
      }), () => {
        // complete validation only after state is updated
        if (validated) {
          return ok(formData);
        } else {
          return reject('Validation failed');
        }
      });
    });
  }

  handleFieldUpdate(ev) {
    const { target } = ev;
    console.info('The arg of onChange:%s -> %o', target.name, target.value);
    if (!target.name) throw new Error('You MUST set the name attribute of your input field');
    // we found the name of the field!
    //console.info('Triggering field -> %o', target);
    let updates = Object.assign({}, this.state.formData);
    updates[target.name] = target.value;
    //console.info('Updated form data -> %o', updates);
    this.setState(Object.assign({}, this.state, {
      formData: updates
    }), () => {
      // state update is done 
      console.info('State updated with new value for field: %s', target.name);
    });
  }

  render() {
    const { errors } = this.state;
    return (
      <Container text>
        <Header><h2>This is our own web app</h2></Header>
        <div>
          This is stuff that goes here
        </div>
        <Form size='big'>
          <Form.Group widths={2}>

            <Form.Input error={errors.fullName !== undefined}
              label='Your Name'
              name='fullName'
              placeholder='John Doe'
              onChange={this.handleFieldUpdate.bind(this)} />

            <Form.Input error={errors.dateOfBirth !== undefined}
              label='Year of Birth'
              name='dateOfBirth'
              type='number'
              onChange={this.handleFieldUpdate.bind(this)} />

          </Form.Group>

          <Button
            primary
            size='big'
            onClick={() => {
              console.info('Form data -> %o', this.state.formData);
              this.validateWithPromise()
                .then((formData) => {
                  console.warn('Validation passed!');
                })
                .catch((err) => {
                  console.error(err);
                });
            }}>Show Data</Button>
        </Form>

      </Container>
    );
  }
}

export default App;
