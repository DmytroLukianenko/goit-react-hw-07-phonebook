import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { getContacts } from '../../redux/contacts/contactOperations';
// import { itemsSelector } from '../../redux/contacts/contactsSelector';
import PhoneForm from '../phoneForm/PhoneForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';


import './App.css';


class App extends Component {
    state = {
        animation: false,
    };

    componentDidMount() {
        this.props.onGetContacts();
        this.setState(state => ({
            animation: !state.animation,
        }));
    }

    // componentDidUpdate(prevProps) {
    //     const { contacts } = this.props;
    //     if (prevProps.contacts !== contacts) {
    //         localStorage.setItem('contacts', JSON.stringify(contacts));
    //     }
    // }

    render() {
        return (
            <div className="container">
                <CSSTransition
                    in={true}
                    appear={true}
                    classNames="title-slideIn"
                    timeout={500}
                    unmountOnExit
                >
                    <h1 className="app_title">Phonebook</h1>
                </CSSTransition>

                <PhoneForm />

                {this.props.contacts.length === 0 && (
                    <>
                        <h2 className="contact_title">Contacts</h2>
                        <p>Contacts list is empty. Please, create new cotnact!</p>
                    </>
                )}

                <CSSTransition
                    in={this.props.contacts.length > 1}
                    classNames="filter_animation"
                    timeout={250}
                    unmountOnExit
                >
                    <Filter />
                </CSSTransition>

                <ContactList />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    contacts: state.contacts.items,
});
const mapDispatchToProps = {
    onGetContacts: getContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);