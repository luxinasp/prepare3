var React = require('react');
var ResultShow = require('../components/ResultShow');
var ButtonContainer = require('../components/ButtonContainer');

var App = React.createClass({
	getInitialState: function () {
		return { 	
				showNumber: 0, 
				resultNumber : 0, 
				inputNumber: 0, 
				addFlag: false, 
				endFlag: true
				};
	},
	handleOnClick: function(buttonType, event) {
		switch (buttonType) {
			case '+' :
				if (this.state.addFlag) {
					this.setState({
						resultNumber: this.state.resultNumber + this.state.inputNumber,
						inputNumber: 0,
						showNumber: this.state.resultNumber + this.state.inputNumber //new resultNumber
					});
				} else {
					this.setState({
						addFlag: true
					});
				}
				break;
			case '=' :
				if (this.state.addFlag) {
					this.setState({
						resultNumber: this.state.resultNumber + this.state.inputNumber,
						inputNumber: 0,
						addFlag: false,
						endFlag: true,
						showNumber: this.state.resultNumber + this.state.inputNumber //new resultNumber
					});
				} else {
					this.setState({
						endFlag: true
					});
				}
				break;
			default:
				if (this.state.addFlag) {
					this.setState({
						inputNumber: this.state.inputNumber*10 + parseInt(buttonType),
						showNumber: this.state.inputNumber*10 + parseInt(buttonType) //new inputNumber
					});
				} else {
					if (this.state.endFlag) {
						this.setState({
							resultNumber: parseInt(buttonType),
							endFlag: false,
							showNumber: parseInt(buttonType) //new resultNumber
						});
					} else {
						this.setState({
							resultNumber: this.state.resultNumber*10 + parseInt(buttonType),
							showNumber: this.state.resultNumber*10 + parseInt(buttonType) //new resultNumber
						});
					}
				}
				break;
		}
	},
	render: function () {
		return (
			<div className="container">
				<div className="row clearfix">
					<div className="col-xs-12 column">
						<div className="row clearfix">
							<div className="col-xs-6 column col-xs-offset-3">
								<div className="jumbotron">
									<div className="pull-left">
										<h1><strong>计算器</strong></h1>
									</div>
									<p></p>
									<div className="row clearfix">
										<div className="col-xs-12 column">
											<ResultShow showNumber={this.state.showNumber} />
											<p></p>
											<ButtonContainer handleOnClick={this.handleOnClick} />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = App;
