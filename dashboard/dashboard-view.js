/**
 * 
 */
import React from 'react';
import PropTypes from 'prop-types';
import {useNavigate, Link} from 'react-router-dom';
import moment from 'moment';

export default function DashboardView({itemState, appPrefs, inputChange, onClick}) {
	let value = "";
	if (itemState != null && itemState.test_field != null) {
		value = itemState.test_field;
	}
	const nav = useNavigate();
	const x = window.location.pathname;
	
	let marketOpen = "Closed";
	if (itemState != null && itemState.marketOpenStatus != null && itemState.marketOpenStatus == true) {
		marketOpen = "Open";
	}
	
 	return (
    	<div> 
    		<div> Welcome </div>
    		<div> Market is currently: {marketOpen} </div>
    		<br/>
    		<div> Account Info: </div>
    		<hr/>
    		{ itemState.account != null && <div> Source: {itemState.account.accountSource} </div> }
    		{ itemState.account != null && <div> Number: {itemState.account.accountNumber} </div> }
    		{ itemState.account != null && <div> Currency: {itemState.account.currency} </div> }
    		{ itemState.account != null && <div> Cash: {itemState.account.cash} </div> }
    		{ itemState.account != null && <div> Portfolio Value: {itemState.account.portfolioValue} </div> }
    		{ itemState.account != null && <div> Pattern Day Trader: {itemState.account.patternDayTrader} </div> }
    		{ itemState.account != null && <div> Trade Suspended By User: {itemState.account.tradeSuspendedByUser} </div> }
    		{ itemState.account != null && <div> Trading Blocked: {itemState.account.tradingBlocked} </div> }
    		{ itemState.account != null && <div> Transfers Blocked: {itemState.account.transfersBlocked} </div> }
    		{ itemState.account != null && <div> Account Blocked: {itemState.account.accountBlocked} </div> }
    		{ itemState.account != null && <div> Shorting Enabled: {itemState.account.shortingEnabled} </div> }
    		{ itemState.account != null && <div> Long Market Value: {itemState.account.longMarketValue} </div> }
    		{ itemState.account != null && <div> Short Market Value: {itemState.account.shortMarketValue} </div> }
    		{ itemState.account != null && <div> Equity: {itemState.account.equity} </div> }
    		{ itemState.account != null && <div> Last Equity: {itemState.account.lastEquity} </div> }
    		{ itemState.account != null && <div> Multiplier: {itemState.account.multiplier} </div> }
    		{ itemState.account != null && <div> Buying Power: {itemState.account.buyingPower} </div> }
    		{ itemState.account != null && <div> Maintenance Margin: {itemState.account.maintenanceMargin} </div> }
    		{ itemState.account != null && <div> SMA: {itemState.account.sma} </div> }
    		{ itemState.account != null && <div> Day trade Count: {itemState.account.daytradeCount} </div> }
    		{ itemState.account != null && <div> Last Maintenance Margin: {itemState.account.lastMaintenanceMargin} </div> }
    		{ itemState.account != null && <div> Day trading Buying Power: {itemState.account.daytradingBuyingPower} </div> }
    		{ itemState.account != null && <div> Regt Buying Power: {itemState.account.regtBuyingPower} </div> }
		</div>
    );
}


DashboardView.propTypes = {
  itemState: PropTypes.object.isRequired,
  appPrefs: PropTypes.object,
  inputChange: PropTypes.func,
  onClick: PropTypes.func
};
    	