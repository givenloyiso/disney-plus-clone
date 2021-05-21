import React from 'react';
import styled from 'styled-components';

function Detail() {
	return (
		<Container>
			<Background>
				<img alt="Movie Background Banner" src='https://s.studiobinder.com/wp-content/uploads/2020/12/Movie-Genres-Types-of-Movies-List-of-Genres-and-Categories-StudioBinder.jpg' />
			</Background>
			<ImageTitle>
				<img alt="Movie Logo" src='https://upload.wikimedia.org/wikipedia/commons/b/b9/Marvel_Logo.svg' />
			</ImageTitle>

			<Controls>
				<PlayButton>
					<img src='/images/play-icon-black.png' />
					<span>play</span>
				</PlayButton>
				<TrailerButton>
					<img src='/images/play-icon-white.png' />
					<span>trailer</span>
				</TrailerButton>

				<Addbutton>
					<span>+</span>
				</Addbutton>

				<GroupWatchButton>
					<img src='/images/group-icon.png' />
				</GroupWatchButton>
			</Controls>
			<SubTitle>2018 - 7m - Family, Fatansy, Kids Animation</SubTitle>
			<Description>
				It was popularised in the 1960s with the release of Letraset sheets
				containing Lorem Ipsum passages, and more recently with desktop
				publishing software like Aldus PageMaker including versions of Lorem
				Ipsum.
			</Description>
		</Container>
	);
}

export default Detail;

const Container = styled.div`
	min-height: 100vh - 70px;
	padding: 0 calc(3.5vw + 5px);
	position: relative;
`;

const Background = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: -1;
	opacity: 0.8;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;
const ImageTitle = styled.div`
	width: 35vw;
	min-width: 200px;
	height: 30vh;
	min-height: 170px;
	margin-top: 60px;

	img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
`;

const Controls = styled.div`
	display: flex;
	align-items: center;
	grid-gap: 25px;
`;
const PlayButton = styled.button`
	border-radius: 4px;
	font-size: 15px;
	padding: 0 24px;
	display: flex;
	align-items: center;
	height: 56px;
	background: rgb(249, 249, 249);
	border: none;
	letter-spacing: 1.8px;
	cursor: pointer;

	span {
		text-transform: uppercase;
	}

	&:hover {
		background: rgb(198, 198, 198);
	}
`;
const TrailerButton = styled(PlayButton)`
	background: rgba(0, 0, 0, 0.3);
	border: 1px solid rgb(249, 249, 249);
	color: rgb(249, 249, 249);
`;
const Addbutton = styled.button`
	width: 44px;
	height: 44px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	border: 2px solid #fff;
	background: rgba(0, 0, 0, 0.6);
	cursor: pointer;

	span {
		font-size: 30px;
		color: #fff;
	}

	&:hover {
		background: rgba(198, 198, 198, 0.6);
	}
`;
const GroupWatchButton = styled(Addbutton)`
	background: rgba(0, 0, 0);
`;

const SubTitle = styled.div`
	color: rgb(249, 249, 249);
	font-size: 15px;
	min-height: 20px;
	margin-top: 26px;
`;
const Description = styled.div`
	line-height: 1.4;
	font-size: 20px;
	margin-top: 16px;
	position: relative;
	max-width: 760px;
`;
