import './Navbar.css';
import { Link } from 'react-router-dom';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { CssBaseline, AppBar, Toolbar } from '@mui/material';

export default function Navbar() {
	return (
		<>
			{/* <CssBaseline /> */}
			<AppBar style={{ backgroundColor: '#1f2937' }} position='relative'>
				<Toolbar>
					<span className='bar-brush-icon'>
						<Link to='/'>
							<i className='fa-solid fa-palette'></i>
						</Link>
					</span>
					<div className='bar-heading'>Cakes&Bases</div>
					<span className='bar-bag-icon'>
						<i className='fa-solid fa-bag-shopping'></i>
					</span>
					<span className='bar-user-icon'>
						<i className='fa-solid fa-circle-user'></i>
					</span>
					<Link to='/registration' className='bar-login-text'>
						Log In
					</Link>
				</Toolbar>
			</AppBar>
		</>
	);
}
