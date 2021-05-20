import React from 'react';
import styled from 'styled-components';

function Header() {
	return (
		<Navbar>
			<a href='/'>
				<Logo src='/images/logo.svg' />
			</a>
			<NavMenu>
				<a href='/'>
					<img src='/images/home-icon.svg' />
					<span>home</span>
				</a>{' '}
				<a href='/search'>
					<img src='/images/search-icon.svg' />
					<span>search</span>
				</a>
				<a href='/watchlist'>
					<img src='/images/watchlist-icon.svg' />
					<span>watchlist</span>
				</a>
				<a href='/originals'>
					<img src='/images/original-icon.svg' />
					<span>originals</span>
				</a>
				<a href='/movies'>
					<img src='/images/movie-icon.svg' />
					<span>movies</span>
				</a>
				<a href='/series'>
					<img src='/images/series-icon.svg' />
					<span>series</span>
				</a>
			</NavMenu>
			<UserImg src='https://it-service.givenbase.com/wp-content/uploads/2016/07/Given-2-1.png' />
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
			font-size: 13px;
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
