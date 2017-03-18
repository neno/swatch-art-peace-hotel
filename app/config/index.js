export default {
  appName: 'The Swatch Art Peace Hotel',
  breakpoints: {
    phoneOnly: 'phoneOnly',
    tabletPortraitUp: 'tabletPortraitUp',
    tabletLandscapeUp: 'tabletLandscapeUp',
    desktopUp: 'desktopUp',
    bigDesktopUp: 'bigDesktopUp',
  },
  pages: {
    HomePage: {
      title: 'Welcome',
      description: '',
    },
    VirtualMuseum: {
      title: 'Virtual Museum',
      description: '',
      children: {
        Discover: {
          title: 'Discover',
          description: '',
        },
        MeetArtists: {
          title: 'Meet Artists',
          description: '',
        },
      },
    },
  },
  Gallery: {
    itemsPerRow: {
      phoneOnly: 1,
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
};
