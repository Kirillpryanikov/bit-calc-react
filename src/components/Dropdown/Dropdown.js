import React from 'react';
import { connect } from 'react-redux';
import {RedStar} from '../RedStar/RedStar';
import { closeDropdown } from '../../store/actions/calcData';
import './Dropdown.css';
import AngleDown from '../../icons/angle-down.svg';


class Dropdown extends React.Component {

    constructor(props) {
        super(props);
        this.handleClose = this.handleClose.bind(this);
        console.log(props);
    }

    handleClose() {
        this.props.closeDropdown();
    }

    render() {
        return (
            <div className="dropdown">
                <img onClick={this.handleClose} className="dropdown-icon-close" width={24} height={24} color="#424242" src={`${AngleDown}`} alt=""/>
                {
                    this.props.currencies.map(currency => (
                        <div key={currency.id} className="currency-name">{currency.name}
                            { currency.isCompulsory ? <div className="star-inner"><RedStar/></div> : null }
                        </div>)
                    )
                }

            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    closeDropdown: () => {
        dispatch(closeDropdown());
    },
});

const mapStateToProps = state => ({
    isDropdownOpen: state.calcData.isDropdownOpen,
    currencies: state.calcData.currencies,
});

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);