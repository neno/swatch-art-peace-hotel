import { css } from 'styled-components';
import config from './config';

const sizes = {
  tablet: config.breakpointBoundaries.phoneUpperBoundary,
  tabletLandscape: config.breakpointBoundaries.tabletPortraitUpperBoundary,
  desktop: config.breakpointBoundaries.tabletLandscapeUpperBoundary,
  bigDesktop: config.breakpointBoundaries.desktopUpperBoundary,
};

export const media = Object.keys(sizes).reduce((accumulator, label) => {
  const emSize = sizes[label] / 16;
  return Object.assign({}, accumulator, { [label]: (...args) =>
    css`@media (min-width: ${emSize}em) {
      ${css(...args)}
    }`,
  });
}, {});

