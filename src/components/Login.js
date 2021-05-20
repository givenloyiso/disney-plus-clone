import React from 'react';
import styled from 'styled-components';

function Login() {
    return (
        <Container>
            <CTA>
                <CTALogoOne src='/images/cta-logo-one.svg' />
                <SignUp>get all there</SignUp>
                <Description>
                    It was popularised in the 1960s with the release of Letraset sheets
                    containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker including versions of Lorem
                    Ipsum.
				</Description>
                <CTALogoTwo src='/images/cta-logo-two.png' />
            </CTA>
        </Container>
    );
}

export default Login;

const Container = styled.div`
	position: relative;
	height: calc(100vh - 70px);
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	&:before {
		position: absolute;
		content: '';
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background-image: url('/images/login-background.jpg');
		z-index: -1;
	}
`;

const CTA = styled.div`
	max-width: 750px;
	width: 90%;
	padding: 80px 40px;
	display: flex;
	flex-direction: column;
`;

const CTALogoOne = styled.img`
	width: 100%;
	height: 100%;
	object-fit: contain;
`;

const SignUp = styled.a`
	text-transform: uppercase;
	width: 100%;
	background-color: #0063e5;
	padding: 17px 0;
	color: #f9f9f9;
	text-align: center;
	border-radius: 4px;
	font-size: 18px;
	cursor: pointer;
	transition: all 250ms;
	letter-spacing: 1.5px;
	margin: 8px 0 12px;

	&:hover {
		background: #0483ee;
	}
`;

const Description = styled.p`
	font-size: 12px;
	letter-spacing: 1.5px;
	text-align: center;
	line-height: 1.5;
`;

const CTALogoTwo = styled.img`
	width: 100;
	height: 100%;
	object-fit: contain;
`;
