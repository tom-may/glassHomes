import React from 'react'
import { Link } from 'react-router-dom'
import {connect} from "react-redux"
import AdvertsBottom from './AdvertsBottom'

function Footer(props) {

	const isAdmin = props.auth.user.is_admin

	return (
		<>
			<footer className="footer">
				<div className="content has-text-centered">
					<p>
						<strong>GlassHomes </strong> by Team HandUP . Developed at
      			<a href="https://devacademy.co.nz" target="_blank"> Dev Academy</a>.
				  
   				</p>
					<div>
						<p >
							{isAdmin &&
							<>
							<Link to="/adminportal">Admin </Link>
							/
							</>  
							}
							<a href="mailto:admin@glasshomes.co.nz"> Contact</a> 
						</p>
					</div>
					<br/>
					
					{!isAdmin &&
				<AdvertsBottom side='bottom' />
					}
				</div>
			</footer>
		</>
	)
}

const mapStateToProps = (globalState) => {
	return {
	  properties: globalState.properties,
	  auth: globalState.auth
	};
  };
  
export default connect(mapStateToProps)(Footer);