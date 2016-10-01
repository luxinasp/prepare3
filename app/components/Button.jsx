var React = require('react');

var Button = React.createClass({
	propTypes: {
		buttonType: React.PropTypes.string.isRequired,
		handleOnClick: React.PropTypes.func.isRequired
	},	
	render: function () {
		return (
			<div className="row clearfix">
				<div className="col-xs-12 column">
					<center><button type="button" className="btn btn-success" onClick={this.props.handleOnClick}>{this.props.buttonType}</button></center>
				</div>
			</div>
		);
	}
});

module.exports = Button;
