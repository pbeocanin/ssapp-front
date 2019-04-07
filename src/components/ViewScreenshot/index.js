import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { LoadingSpinner } from '../LoadingSpinner/';

const Image = styled.img`
	box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2);
`;

class ViewScreenshot extends React.Component {
	state = {
		loading: true,
		image: '',
	};

	getSs = () => {
		const ssid = this.props.match.params.id;
		const url = `https://api.ssapp.weirdtoolbox.com/screenshot/${ssid}`;
		fetch(url, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then(res => res.json())
			.then(resp =>
				this.setState({
					image: resp.filename,
					loading: false,
				}),
			);
	};

	componentDidMount() {
		this.getSs();
	}
	render() {
		const { loading, image } = this.state;
		if (loading) {
			return <LoadingSpinner message={'Getting the shot'} />;
		}
		return (
			<div className="container">
				<div className="row justify-content-around">
					<div className="col-6">
						<Image
							className="img-fluid"
							src={`https://api.ssapp.weirdtoolbox.com/screenshots/${image}`}
						/>
					</div>
				</div>
			</div>
		);
	}
}

ViewScreenshot.propTypes = {
	match: PropTypes.object,
};

export default ViewScreenshot;
