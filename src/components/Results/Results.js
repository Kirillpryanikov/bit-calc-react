import React from 'react';
import { connect } from 'react-redux';
import Dropdown from '../Dropdown/Dropdown';
import {RedStar} from '../RedStar/RedStar';
import { openDropdown, getCurrencies } from '../../store/actions/calcData';
import './Results.css';
import AngleUp from '../../icons/angle-up.svg';

const results = [{title: '', amount: 510}, {title: '', amount: 3510}, {title: 'EUR', amount: 15510}];

class Results extends React.Component {

    constructor(props) {
        super(props);
        console.log('props ', props);
        this.openDropdown = this.openDropdown.bind(this);
    }

    componentDidMount() {
        this.props.getCurrencies();
    }

    openDropdown() {
        this.props.openDropdown();
    }

    render() {
        console.log('isDropdownOpen', this.props.isDropdownOpen);
        return (
            <div className="input-flex-row half-container">
                <Result {...results[0]}>
                    <div className="css-input-title">Total Reward(1%/y)</div>
                </Result>
                <Result {...results[1]}>
                    <div className="css-input-title">Total BAY in {'5'} years</div>
                </Result>
                <Result {...results[2]}>
                    <div className="bottom-text">at current prices</div>
                    <div className="css-input-title dropdown-trigger">
                        <span>Total BAY in {'EUR'}</span>
                        <img onClick={this.openDropdown} className="dropdown-icon" width={24} height={24} color="#424242" src={`${AngleUp}`} alt=""/>
                        <div className="star-outer"><RedStar/></div>
                    </div>

                    <div>
                        { this.props.isDropdownOpen ?
                            <Dropdown { ...this.props}/>  : null
                        }
                    </div>

                </Result>
            </div>
        )
    }
}

class Result extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="result-flex-column">
                {this.props.children}
                <div className="css-result">{this.props.amount}</div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    openDropdown: () => {
        dispatch(openDropdown());
    },
    getCurrencies: () => {
        dispatch(getCurrencies());
    },
});

const mapStateToProps = state => ({
    isDropdownOpen: state.calcData.isDropdownOpen,
    currencies: state.calcData.currencies
});

export default connect(mapStateToProps, mapDispatchToProps)(Results);