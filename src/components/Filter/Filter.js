import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { handleFilter } from '../../redux/contacts/contactAction';
import { filterSelector } from '../../redux/contacts/contactsSelector';

import './Filter.css';

const Filter = ({ filter, handleFilter }) => {
    return (
        <div className='filter_box'>
            <label className='input_label'>
                Find contact you need
                 <br></br>
                <input
                    className='filter_form'
                    type='text'
                    name='filter'
                    placeholder='Enter contact name'
                    value={filter}
                    onChange={handleFilter}
                />
            </label>
        </div >
    )
}

const mapStateToProps = state => ({
    filter: filterSelector(state),
});

const mapDispatchToProps = {
    handleFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

Filter.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            id: PropTypes.string,
            number: PropTypes.string,
        }).isRequired,
    ),
    filter: PropTypes.string.isRequired,
    handleFilter: PropTypes.func.isRequired,
};