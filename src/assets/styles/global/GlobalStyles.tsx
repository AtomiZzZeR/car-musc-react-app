import { createGlobalStyle } from 'styled-components';
import { EThemeColors } from '../theme';

const GlobalStyles = createGlobalStyle`
	* {
    margin: 0;
    padding: 0;
    border: 0;
		box-sizing: border-box;
  
		&::before,
		&::after {
			box-sizing: border-box;
		}
	}

	:active,
	:hover,
	:focus {
    outline: 0;
    outline-offset: 0;
	}

	nav,
	footer,
	header,
	aside {
    display: block;
	}

	html,
	body {
    height: 100%;
    width: 100%;
    font-size: 1em;
    line-height: 1.4;
		font-family: 'ReformaGroteskDemiC', sans-serif;
		letter-spacing: 0.05em;
		color: ${EThemeColors.font};
		background-color: ${EThemeColors.primary};
    -ms-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
	}

	body {
		&::-webkit-scrollbar {
			width: 6px;              
		}

		&::-webkit-scrollbar-thumb {
			background-color: ${EThemeColors.accent} ;  
  	border-radius: 20px;  
		}
	}

	input,
	button,
	textarea {
    font-family: inherit;
	}

	input::-ms-clear {
    display: none;
	}

	button {
		line-height: 1.4;
		letter-spacing: 0.05em;
		color: ${EThemeColors.font};
	  cursor: pointer;

		&::-moz-focus-inner {
		padding: 0;
	  border: 0;
		}
	}

	a {
		color: ${EThemeColors.font};
	  text-decoration: none;

		&:visited,
		&:hover {
			color: ${EThemeColors.font};
	  	text-decoration: none;
		}

		&:focus,
		&:active {
   	 	outline: 0;
		}
	}

	ul,
	li {
	  list-style: none;
	}

	img {
	  vertical-align: top;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
    font-size: inherit;
    font-weight: 400;
	}
`;

export default GlobalStyles;
