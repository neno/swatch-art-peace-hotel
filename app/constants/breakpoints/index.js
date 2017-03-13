import config from '../../config';

const breakpointBoundaries = {
  phoneUpperBoundary: 600,
  tabletPortraitUpperBoundary: 900,
  tabletLandscapeUpperBoundary: 1200,
  desktopUpperBoundary: 1800,
};

export const isPhoneOnly = () => (
  window.matchMedia(`(max-width: ${breakpointBoundaries.phoneUpperBoundary - 1}px)`).matches
);

export const isTabletPortraitUp = () => (
  window.matchMedia(`(min-width: ${breakpointBoundaries.phoneUpperBoundary}px)`).matches
);

export const isTabletLandscapeUp = () => (
  window.matchMedia(`(min-width: ${breakpointBoundaries.tabletPortraitUpperBoundary}px)`).matches
);

export const isDesktopUp = () => (
  window.matchMedia(`(min-width: ${breakpointBoundaries.tabletLandscapeUpperBoundary}px)`).matches
);

export const isBigDesktopUp = () => (
  window.matchMedia(`(min-width: ${breakpointBoundaries.desktopUpperBoundary}px)`).matches
);

export const getBreakpoint = () => {
  let breakpoint;

  if (isPhoneOnly()) {
    breakpoint = config.breakpoints.phoneOnly;
  }
  if (isTabletPortraitUp()) {
    breakpoint = config.breakpoints.tabletPortraitUp;
  }
  if (isTabletLandscapeUp()) {
    breakpoint = config.breakpoints.tabletLandscapeUp;
  }
  if (isDesktopUp()) {
    breakpoint = config.breakpoints.desktopUp;
  }
  if (isBigDesktopUp()) {
    breakpoint = config.breakpoints.bigDesktopUp;
  }

  return breakpoint;
};
