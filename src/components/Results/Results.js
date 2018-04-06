import React from 'react';
import './Results.css';
import AngleDown from '../../icons/angle-down.svg';
import AngleUp from '../../icons/angle-up.svg';

const results = [{title: '', amount: 510}, {title: '', amount: 3510}, {title: 'EUR', amount: 15510}];

class Results extends React.Component {

    closeDropdown() {
        console.log('closed')
    }

    render() {
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
                    <div className="css-input-title dropdown-trigger">Total BAY in </div>

                        { true ?
                            <div>
                                <img className="dropdown-icon" width={24} height={24} color="#424242" src={`${AngleUp}`} alt=""/>
                                <DropDown { ...this.props}/>
                            </div> : null
                        }
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

class DropDown extends React.Component {

    constructor(props) {
        super(props);
        this.handleClose = this.handleClose.bind(this);
        console.log(props);
    }

    handleClose() {
        this.props.closeDropdown()
    }

    render() {
        return (
            <div className="dropdown">
                <div className="currency-name active">Cur 1
                    <img onClick={this.handleClose} className="dropdown-icon" width={24} height={24} color="#424242" src={`${AngleDown}`} alt=""/>
                </div>
                <div className="currency-name">Cur 2</div>
                <div className="currency-name">Cur 3</div>
                <div className="currency-name">Cur 4</div>
            </div>
        )
    }
}

export default Results;