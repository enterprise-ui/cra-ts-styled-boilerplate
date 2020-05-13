import theme from 'styled-theming';

// Theme colors
export const foregroundColor = theme('mode', {
  dark: '#fafafa',
  light: '#212121',
});

export const backgroundColor = theme('mode', {
  dark: '#212121',
  light: '#ffffff',
});

export const accentColor = theme('mode', {
  dark: '#ec1a62',
  light: '#61dafb',
});
