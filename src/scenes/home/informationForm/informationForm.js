import React, { Component } from 'react';
// import axios from 'axios';
// import { Redirect } from 'react-router-dom';
// import _ from 'lodash';
import Section from 'shared/components/section/section';
import FormButton from 'shared/components/form/formButton/formButton';
// import config from 'config/environment';
import Identifier from './formComponents/identifier';
import styles from './informationForm.css';

class SignupInformation extends Component {

  constructor(props) {
    super(props);
    this.onIdentifierStatusChange = this.onIdentifierStatusChange.bind(this);
    this.state = {
      error: false,
      isValid: true,
      identifier: '',
      success: false,
      step: ''
    };
  }

  onIdentifierStatusChange = (value) => {
    this.setState({ identifier: value });
  }

  saveAndContinue = () => {
    this.setState({ step: this.state.step + 1 });
    /*
    axios.patch(`${config.backendHost}/users/password`, {
      user: {
        reset_password_token: this.props.resetPasswordToken,
        password: this.state.password
      }
    }).then(() => {
      this.setState({ step: this.state.step + 1 });
    }).catch(() => {
      this.setState({ error: 'We were unable to set the password for this email' });
    });
    */
  }

  showStep = () => {
    const step = this.state.step + this.state.identifier;
    switch (step) {
      case '1mil':
        return (
          <Section>
            <p>MilStep1</p>
          </Section>
        );
      case '1civ':
        return (
          <Section>
            <p>CivStep1</p>
          </Section>
        );
      case 3:
        return (
          <Section>
            <p>MilStep2</p>
          </Section>
        );
      case 4:
        return (
          <Section>
            <p>MilStep3</p>
          </Section>
        );
      default:
        return <Identifier update={this.onIdentifierStatusChange} />;
    }
  }

  render() {
    const showStep = this.showStep();
    return (
      <Section className={styles.signup} title="More Info">
        <p>At Op-Code, we really need more information to make this all work. Please take a minute to complete these steps.</p>
        {showStep}
        <FormButton className={styles.joinButton} text="Save and Continue" onClick={this.saveAndContinue} theme="red" />
      </Section>
    );
  }
}

export default SignupInformation;
