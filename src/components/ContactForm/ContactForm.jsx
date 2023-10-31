import React, { Component } from 'react';
import styles from 'components/ContactForm/ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };

  handleNumberChange = event => {
    this.setState({ number: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { name, number } = this.state;
    const { contacts, onAddContact } = this.props;

    const nameExists = contacts.some(contact => contact.name === name);

    if (nameExists) {
      alert(`"${name}" is already in contacts.`);
    } else {
      onAddContact({
        name,
        number,
      });

      this.setState({
        name: '',
        number: '',
      });
    }
  };

  render() {
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <label className={styles.label}>
          Name
          <input
            className={styles.input}
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleNameChange}
          />
        </label>
        <label className={styles.label}>
          Number
          <input
            className={styles.input}
            type="tel"
            name="number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.handleNumberChange}
          />
        </label>
        <button className={styles.button} type="submit">
          Add Contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
