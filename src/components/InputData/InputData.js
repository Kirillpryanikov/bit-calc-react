import React from 'react';
import { connect } from 'react-redux';
import {ButtonPreLoader} from '../ButtonPreLoader/ButtonPreLoader';
import ExclamationCircle from '../../icons/exclamation-circle.svg';
import {getCalculatedData} from '../../store/actions/calcData';
import './InputData.css';

const regExFloat = /^[0-9]+([.][0-9]{0,8})?|[.][0-9]{1,8}$/g;

const isRequesting = true;

class InputData extends React.Component {

    constructor(props) {
        super(props);
        this.sendData = this.sendData.bind(this);
        this.onInput = this.onInput.bind(this);
        this.state = {
            BAYValue: '',
            errorText: '',
            yearsValue: '',
        }
    }

    onInput(event) {
        this.setState({[event.currentTarget.name]: event.currentTarget.value});

        // Check errors
        if(event.currentTarget.name === 'BAYValue' && !regExFloat.test(event.currentTarget.value)) {
            this.setState({errorText: 'Please enter a number in both fields'});
            return false;
        } else if (event.currentTarget.name === 'yearsValue' && !/^[0-9]+$/g.test(event.currentTarget.value)) {
            this.setState({errorText: 'Please enter a number in both fields'});
            return false;
        } else {
            // If validation passed - reset error
            this.setState({errorText: ''});
        }
    }

    sendData(event) {
        event.preventDefault();
        console.log(event.currentTarget[0], event.currentTarget.value);
        console.log('submitted');
        const data = {
            coins: this.state.BAYValue,
            currency: 'usd',
            period: parseInt(this.state.yearsValue)*12
        };
        this.props.getCalculatedData(data);
    }

    render() {
        return (
            <div>
                <div className="css-input-title">I own ... BAY and plan to hold for ... </div>
                <form onSubmit={this.sendData} className="input-flex-row">
                    <div className="input-flex-row input">
                        <input className="css-input bay-amount" name="BAYValue" onChange={(event, newValue) => this.onInput(event, newValue)} type="text"/>
                        <span className="bay-amount-abs">BAY</span>
                        <input className="css-input time-period" name="yearsValue" onChange={(event, newValue) => this.onInput(event, newValue)} type="text"/>
                        <span className="time-period-abs">Years</span>
                    </div>
                    <div className="input-flex-row input">
                        {
                            isRequesting ?
                                <input className="css-submit" type="submit" value='Calculate Reward'/> :
                                <div className="css-submit-loader" ><ButtonPreLoader/></div>
                        }
                    </div>
                </form>
                { this.state.errorText !== '' ? <div className="input-error"><img width={12} height={12} src={`${ExclamationCircle}`} alt=""/>&nbsp;{this.state.errorText}</div> : null }
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    getCalculatedData: (data) => {
        dispatch(getCalculatedData(data));
    },
});

const mapStateToProps = state => ({
    isRequesting: state.calcData.isRequesting
});

export default connect(mapStateToProps, mapDispatchToProps)(InputData);