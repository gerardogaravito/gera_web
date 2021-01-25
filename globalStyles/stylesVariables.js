export const colors = {
  main: '#ecebe4', // bone
  black: '#1c1c1c', // black
  white: '#fafaff',
  light_gray: '#eef0f2',
  gray: '#daddd8'
}

export const fonts = {
  font_system: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";',
	font_mono: 'jetbrains mono, monaco, helvetica',
	h1: '36px',
	h2: '24px',
	h3: '18px',
	p: '14px',
	small: '12px',
}

// media queries
const mediaSize = {
	mobile: '420px',
	tablet: '720px',
	miniDesktop: '920px',
	littleDesktop: '1315px',
	desktop: '1440px',
};

export const mediaQueries = {
	mobile: `(max-width: ${mediaSize.mobile})`,
	tablet: `(max-width: ${mediaSize.tablet})`,
	miniDesktop: `(max-width: ${mediaSize.miniDesktop})`,
	littleDesktop: `(max-width: ${mediaSize.littleDesktop})`,
	desktop: `(max-width: ${mediaSize.desktop})`,
};

export const width = {
	normal: '370px',
	mobile: '165px'
};