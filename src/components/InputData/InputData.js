import React from 'react';
import { connect } from 'react-redux';
import './InputData.css';


const isRequesting = false;

class InputData extends React.Component {

    render() {
        return (
            <div>
                <div className="css-input-title">I own ... BAY and plan to hold for ... </div>
                <form className="input-flex-row">
                    <div className="input-flex-row input">
                        <input className="css-input bay-amount" type="text"/>
                        <span className="bay-amount-abs">BAY</span>
                        <input className="css-input time-period" type="text"/>
                        <span className="time-period-abs">Years</span>
                    </div>
                    <div className="input-flex-row input">
                        <input className="css-submit" type="submit" value={isRequesting ? 'loader' : 'Calculate Reward'}/>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({

});

const mapStateToProps = state => ({

});

export default connect((mapStateToProps, mapDispatchToProps)(InputData));