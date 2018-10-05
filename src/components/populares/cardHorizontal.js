import React, { Component } from 'react';
import { Card, CardHeader, CardActions, CardContent } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

class CardHorizontal extends Component {
	state = {  }
	render() { 
		const{place} = this.props;
		return (
			<Card style={{marginTop: '1em', overflow: 'hidden'}}>
				<div className="row">
					<div className="place-avatar">
						<img src={place.avatarImage} alt="imagen"/>
					</div>
					<div className="col-xs" style={{ textAlign: 'left' }}>
						<CardHeader
							title={this.props.place.title}
							subheader={place.address}
							/>
						<div className="row middle-xs">
							<div className="col-xs-6 col-sm-8 col-lg-9">
								<CardContent>
									{place.description}
								</CardContent>
							</div>
							<div className="col-xs">
								<CardActions>
									<Button size="small" color="secondary">
										<Link to={'/lugares/' + place._id}>Ver más</Link>
									</Button>
								</CardActions>
							</div>
						</div>
					</div>
				</div>
			</Card>
		);
	}
}
 
export default CardHorizontal;