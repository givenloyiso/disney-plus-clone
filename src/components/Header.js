import React from 'react';
import { auth, provider } from '../firebase';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import {
	selectUserName,
	selectUserPhoto,
	setUserLogin,
	setSignOut,
} from '../features/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';

function Header() {
	const dispatch = useDispatch();
	const history = useHistory();
	const userPhoto = useSelector(selectUserPhoto);
	const userName = useSelector(selectUserName);

	const signIn = () => {
		auth.signInWithPopup(provider).then((result) => {
			let user = result.user;
			dispatch(
				setUserLogin({
					name: user.displayName,
					email: user.email,
					photo: user.photoURL,
				})
			);
		});
	};

	const signOut = () => {
		auth.signOut().then(() => {
			dispatch(setSignOut());
			history.push('/login');
		});
	};

	return (
		<Navbar>
			<a href='/'>
				<Logo alt='' src='/images/logo.svg' />
			</a>
			{!userName ? (
				<LoginContainer>
					<Login onClick={signIn}>Login</Login>
				</LoginContainer>
			) : (
				<LoginContainer>
					<NavMenu>
						<a href='/'>
							<img alt='' src='/images/home-icon.svg' />
							<span>home</span>
						</a>{' '}
						<a href='/search'>
							<img alt='' src='/images/search-icon.svg' />
							<span>search</span>
						</a>
						<a href='/watchlist'>
							<img alt='' src='/images/watchlist-icon.svg' />
							<span>watchlist</span>
						</a>
						<a href='/originals'>
							<img alt='' src='/images/original-icon.svg' />
							<span>originals</span>
						</a>
						<a href='/movies'>
							<img alt='' src='/images/movie-icon.svg' />
							<span>movies</span>
						</a>
						<a href='/series'>
							<img alt='' src='/images/series-icon.svg' />
							<span>series</span>
						</a>
					</NavMenu>
					<LogOutContainer>
						<UserImg src={userPhoto && userPhoto} />
						<Logout onClick={signOut}>Logout</Logout>
					</LogOutContainer>
				</LoginContainer>
			)}
		</Navbar>
	);
}

export default Header;

const Navbar = styled.div`
	height: 70px;
	background-color: #090b13;
	display: flex;
	align-items: center;
	padding: 0 36px;
`;

const Logo = styled.img`
	width: 80px;
`;

const NavMenu = styled.div`
	display: flex;
	flex: 1;
	margin-left: 25px;

	a {
						display: flex;
		align-items: center;
		padding: 0 12px;
		color: white;
		text-decoration: none;
		text-transform: uppercase;

		img {
						height: 20px;
		}

		span {
						font - size: 13px;
			letter-spacing: 1.42px;
			position: relative;

			&:after {
						content: '';
				height: 2px;
				background: #fff;
				position: absolute;
				left: 0;
				right: 0;
				bottom: -6px;
				opacity: 0;
				transform-origin: left center;
				transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
				transform: scaleX(0);
			}
		}
		&:hover {
						span {
				&:after {
						opacity: 1;
					transform: scaleX(1);
				}
			}
		}
	}
`;

const UserImg = styled.img`
	width: 48px;
	height: 48px;
	border-radius: 50%;
`;

const LoginContainer = styled.div`
	display: flex;
	flex: 1;
	justify-content: flex-end;
`;

const Login = styled.div`
	border: 1px solid #f9f9f9;
	padding: 8px 16px;
	border-radius: 4px;
	letter-spacing: 1.5px;
	text-transform: uppercase;
	background-color: rgba(0, 0, 0, 0.6);
	cursor: pointer;

	&:hover {
		background-color: #f9f9f9;
		color: #000;
		border-color: transparent;
	}
`;

const LogOutContainer = styled(LoginContainer)`
	align-items: center;
	grid-gap: 10px;
`;
const Logout = styled(Login)``;
