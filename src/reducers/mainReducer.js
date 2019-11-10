export default function mainReducer(
  state = {
    myProfile: {
      id: 0,
      name: 'Jhon Doe',
      age: 25,
      desc: 'Web Developer',
      photos: [
        'https://media.vandalsports.com/i/640x360/6-2019/2019628958_1.jpg',
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/paul-rudd-attends-the-premiere-of-disney-and-marvels-ant-news-photo-983910082-1554570392.jpg',
        'https://pmctvline2.files.wordpress.com/2017/04/paul-rudd-sisters-tv-debut-throwback-thursday.jpg'
      ]
    },
    users: [
      {
        id: 0,
        name: 'Hillary Duff',
        age: 32,
        desc:
          "Actress & singer, Duff first came to prominence in music after releasing her Christmas-themed debut studio album, Santa Claus Lane (2002), through Walt Disney Records. She then enjoyed significant commercial success and platinum and gold certifications with her subsequent studio albums released through Hollywood Records, including Metamorphosis (2003), Hilary Duff (2004), Most Wanted (2005), and Dignity (2007). Following a hiatus from music, Duff signed with RCA Records for her fifth studio album, Breathe In. Breathe Out. (2015), which debuted in the top 5 positions in Duff's major markets: the US and Canada. In addition to music and acting, Duff has also co-authored a trilogy of novels, beginning with Elixir (2010), which became a New York Times best seller, and followed by the sequels Devoted (2011) and True (2013). ",
        photos: [
          'https://timesofindia.indiatimes.com/thumb/msid-70209918,imgsize-131847,width-800,height-600,resizemode-4/70209918.jpg',
          'https://dynamicmedia.zuza.com/zz/m/original_/0/d/0d1428fc-411b-4e69-974d-cd62d28fa6cb/B88776140Z.1_20190704083402_000_GL1L63BK.3-0_Super_Portrait.jpg',
          'https://www.etonline.com/sites/default/files/styles/max_970x546/public/images/2019-10/1280_hilary_duff.jpg'
        ]
      },
      {
        id: 1,
        name: 'Jamie Lynn Spears',
        age: 28,
        desc: 'Actress & singer',
        photos: [
          'https://nyppagesix.files.wordpress.com/2019/07/jamie-lynn-spears.jpg',
          'https://imgix.bustle.com/uploads/getty/2019/7/30/869a12bf-a2e8-4c20-8863-4d5764faf102-getty-476585498.jpg',
          'https://img.gruporeforma.com/imagenes/elementorelacionado/9/157/8156652.jpg'
        ]
      }
    ],
    myself: false,
    currentIndex: 0,
    likedPeople: [],
    superLikedPeople: [],
    rejectedPeople: []
  },
  action
) {
  switch (action.type) {
    case 'MYSELF':
      return {
        ...state,
        myself: action.payload
      };
    case 'LIKE':
      return {
        ...state,
        likedPeople: state.likedPeople.concat(state.currentIndex),
        currentIndex: state.currentIndex + 1
      };
    case 'SUPER_LIKE':
      return {
        ...state,
        superLikedPeople: state.superLikedPeople.concat(state.currentIndex),
        currentIndex: state.currentIndex + 1
      };
    case 'REJECT':
      return {
        ...state,
        rejectedPeople: state.rejectedPeople.concat(state.currentIndex),
        currentIndex: state.currentIndex + 1
      };
    default:
      return state;
  }
}
