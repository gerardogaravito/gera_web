export const colors = {
  main: '#ecebe4', // bone
  black: '#1c1c1c', // black
  white: '#fafaff',
  light_gray: '#eef0f2',
  gray: '#daddd8'
}

export const fronts = {
  font_system: '',
  font_mono: ''
}

// media queries
const mediaSize = {
	mobile: '320px',
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