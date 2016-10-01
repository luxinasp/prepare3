var React = require('react');

var ResultShow = React.createClass({
	propTypes: {
		showNumber: React.PropTypes.number.isRequired
	},	
	render: function () {
		return (
			<div className="row clearfix">
				<div className="col-xs-4 column col-xs-offset-8">
					<center><h3>{this.props.showNumber}</h3></center>
				</div>
			</div>
		);
	}
});

module.exports = ResultShow;