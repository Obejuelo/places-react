import React, { Component } from 'react';
import Title from '../Title';
import Card from '@material-ui/core/Card';

class Header extends Component {
	state = {  }
	render() { 
		return (
			<div className="container">
				<div className="row center-xs middle-xs">
					<Title />
					<div className="col-xs-4">
						<img src={process.env.PUBLIC_URL + '/images/map.png'}
							alt='place'
							style={{ width: '100%' }}
						/>
					</div>
				</div>
				<div className="row center-xs">
					<div className="col-sm-4 col-lg-4 col-xl-4">
						<Card className="my-card">
							<i className="far fa-heart" style={{ background: '#F50057' }}></i>
							<div style={{marginTop: 'auto', marginBottom: 'auto'}}>
								<h4 style={{marginBottom:'3px'}}>Calificaciones con emociones</h4>
								<p>Califica tus lugares con experiencias, no con números</p>
							</div>
						</Card>
					</div>
					<div className="col-sm-4 col-lg-4 col-xl-4">
						<Card className="my-card">
							<i className="fas fa-signal" style={{ background: '#2196F3' }}></i>
							<div style={{marginTop: 'auto', marginBottom: 'auto'}}>
								<h4 style={{marginBottom:'3px'}}>¿Sin internet? Sin problemas</h4>
								<p>places funciona sin internet o en conexiones lentas</p>
							</div>
						</Card>
					</div>
					<div className="col-sm-4 col-lg-4 col-xl-4">
						<Card className="my-card">
							<i className="far fa-star" style={{ background: '#FFC400' }}></i>
							<div style={{marginTop: 'auto', marginBottom: 'auto'}}>
								<h4 style={{marginBottom:'3px'}}>Tus sitios favoritos</h4>
								<p>Define tu lista de favoritos y explora la de tus amigos</p>
							</div>
						</Card>
					</div>
				</div>
			</div>
		);
	}
}
 
export default Header;