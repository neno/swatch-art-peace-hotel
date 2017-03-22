export default {
  appName: 'The Swatch Art Peace Hotel',
  breakpoints: {
    phoneOnly: 'phoneOnly',
    tabletPortraitUp: 'tabletPortraitUp',
    tabletLandscapeUp: 'tabletLandscapeUp',
    desktopUp: 'desktopUp',
    bigDesktopUp: 'bigDesktopUp',
  },
  breakpointBoundaries: {
    phoneUpperBoundary: 600,
    tabletPortraitUpperBoundary: 900,
    tabletLandscapeUpperBoundary: 1200,
    desktopUpperBoundary: 1800,
  },
  pages: {
    HomePage: {
      title: 'Welcome',
      description: '',
    },
    Impressum: {
      title: 'Impressum',
      description: '',
    },
    VirtualMuseum: {
      title: 'Virtual Museum',
      description: '',
      children: {
        Discover: {
          title: 'Discover out art works',
          description: '',
        },
        MeetArtists: {
          title: 'Meet our artists',
          description: '',
        },
      },
    },
  },
  Gallery: {
    itemsPerRow: {
      phoneOnly: 2,
      tabletPortraitUp: 2,
      tabletLandscapeUp: 4,
      desktopUp: 4,
      bigDesktopUp: 6,
    },
    itemHeight: {
      phoneOnly: 150,
      tabletPortraitUp: 180,
      tabletLandscapeUp: 186,
      desktopUp: 200,
      bigDesktopUp: 210,
    },
    defaultImage: 'http://totallyhistory.com/wp-content/uploads/2011/11/Van_Gogh_-_Starry_Night.jpg',
  },
  imgDir: 'img',
  Impressum: [
    {
      text: '© Julia Curty, SUPERSCRIPT GmbH, www.superscript.ch',
      url: 'http://www.superscript.ch',
    },
    {
      text: '© Anton Hofmann, codingroom GmbH, www.codingroom.ch',
      url: 'http://www.codingroom.ch',
    },
    {
      text: '© Nenad Brcic, neno web GmbH, neno.ch',
      url: 'http://neno.ch',
    },
  ],
};
