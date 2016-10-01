var React = require('react');
var Button = require('./Button');

var ButtonContainer = React.createClass({
	propTypes: {
		handleOnClick: React.PropTypes.func.isRequired
	},	
	render: function () {
		
		var item1 = [];
		var item2 = [];
		var item3 = [];
		
		for (var i=1; i<=3; i++) {
			item1.push(<Button key={3*i-2+""} handleOnClick={this.props.handleOnClick.bind(null, 3*i-2+"")} buttonType={3*i-2+""} />);
			item2.push(<Button key={3*i-1+""} handleOnClick={this.props.handleOnClick.bind(null, 3*i-1+"")} buttonType={3*i-1+""} />);
			item3.push(<Button key={3*i-0+""} handleOnClick={this.props.handleOnClick.bind(null, 3*i-0+"")} buttonType={3*i-0+""} />);
		}
		
		item1.push(<Button key={"0"} handleOnClick={this.props.handleOnClick.bind(null, "0")} buttonType={"0"} />);
		item2.push(<Button key={"+"} handleOnClick={this.props.handleOnClick.bind(null, "+")} buttonType={"+"} />);
		item3.push(<Button key={"="} handleOnClick={this.props.handleOnClick.bind(null, "=")} buttonType={"="} />);
	
		return (
				<div className="row clearfix">
					<div className="col-xs-4 column">
						{item1}
					</div>
					<div className="col-xs-4 column">
						{item2}
					</div>
					<div className="col-xs-4 column">
						{item3}
					</div>
				</div>
				);
	}
});

module.exports = ButtonContainer;