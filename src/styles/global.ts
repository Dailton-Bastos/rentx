import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	:root {
		/* colors */
		--background: #1b1b1f;
		--color-black: #1b1b1b;
		--color-white: #ffffff;
		--color-red: #dc1637;
		--color-green: #03b352;
		--color-title: #47474d;
		--color-text: #747480;
		--color-text-details: #aeaeb3;
		--color-gray: #dedee3;
		--color-gray-light: #ebebf0;
		--color-gray-lighter: #f4f5f6;
		--color-shape: #29292e;

		/* breakpoints */
		--breakpoint-sm: 576px;
		--breakpoint-md: 768px;
		--breakpoint-lg: 992px;
		--breakpoint-xl: 1200px;
		--breakpoint-xxl: 1400px;

		/* containers */
		--container-space-sm: 1.5rem;
		--container-space-md: 1.5rem;
		--container-space-lg: 5rem;
		--container-space-xl: 5rem;

		/* font */
		--font-type-1-name: 'Archivo';
		--font-type-2-name: 'Inter';
		--font-type-1-fallback: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
		--font-type-weight-regular: 400;
		--font-type-weight-semibold: 600;
		--font-type-weight-bold: 700;
	}

	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	html {
		font-size: 62.5%;
	}

	body {
		-webkit-font-smoothing: antialiased;
	}

	body,input,textarea,button {
		font-family: var(--font-type-1-name), var(--font-type-1-fallback);
		font-size: 1.6rem;
		font-weight: var(--font-type-weight-regular);
	}

	h1,h2,h3 {
		font-weight: var(--font-type-weight-semibold);
	}

	button {
		cursor: pointer;
	}

	img {
		display: block;
		max-width: 100%;
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	ul,li {
		list-style: none;
	}

`;
