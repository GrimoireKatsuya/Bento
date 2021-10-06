// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: 'Kethsana',
  imageBackground: true,
  openInNewTab: true,
  twelveHourFormat: false,

  // Greetings
  greetingMorning: 'Good morning!',
  greetingAfternoon: 'Good afternoon,',
  greetingEvening: 'Good evening,',
  greetingNight: 'What a Horrible Night to Have a Curse,',

  // Weather
  weatherKey: '47e411ffbdd69dd850b3cab65b018410',
  weatherIcons: 'OneDark', // 'Nord', 'Dark', 'White'
  weatherUnit: 'C', // 'F', 'C'
  language: 'en', // More languages in https://openweathermap.org/current#multi

  trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
  defaultLatitude: '46.176480',
  defaultLongitude: '6.140720',

  // ┌─┐┌─┐┬─┐┌┬┐┌─┐
  // │  ├─┤├┬┘ ││└─┐
  // └─┘┴ ┴┴└──┴┘└─┘

  // Links
  cards: [
    {
      id: '1',
      name: 'Gmail',
      icon: 'mail',
      link: 'https://mail.google.com/mail/u/1/#inbox',
    },
    {
      id: '2',
      name: 'Mail HEG',
      icon: 'at-sign',
      link: 'https://m.hesge.ch/owa/#path=/mail/inbox',
    },
    {
      id: '3',
      name: 'YouTube',
      icon: 'youtube',
      link: 'https://www.youtube.com/feed/subscriptions',
    },
    {
      id: '4',
      name: 'Twitter',
      icon: 'twitter',
      link: 'https://twitter.com/home?lang=en',
    },
    {
      id: '5',
      name: 'Cyberlearn',
      icon: 'key',
      link: 'https://cyberlearn.hes-so.ch/',
    },
    {
      id: '6',
      name: 'Wikipedia',
      icon: 'globe',
      link: 'https://en.wikipedia.org/wiki/Main_Page',
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  //Icons
  firstListIcon: 'book-open',
  secondListIcon: 'coffee',

  // Links
  lists: {
    firstList: [
      {
        name: 'Mangadex',
        link: 'https://mangadex.org/titles/feed',
      },
      {
        name: 'Kaguya-sama',
        link: 'https://guya.moe/read/manga/Kaguya-Wants-To-Be-Confessed-To/',
      },
      {
        name: 'ReadComicOnline',
        link: 'https://readcomiconline.li/',
      },
      {
        name: 'M.A.L.',
        link: 'https://myanimelist.net/topmanga.php',
      },
    ],
    secondList: [
      {
        name: 'crinacle',
        link: 'https://crinacle.com/',
      },
      {
        name: 'SHENZHENAUDIO',
        link: 'https://shenzhenaudio.com/',
      },
      {
        name: 'Reddit',
        link: 'https://www.reddit.com',
      },
      {
        name: 'DeepL',
        link: 'https://www.deepl.com/translator',
      },
    ],
  },
};
