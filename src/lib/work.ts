export type Work={k:string;name:string;cat:string;fil:string;desc:string;short:string;tags:string[];href:string;go:string;ext:boolean;img:string;fig?:string;video?:string;concept?:boolean;scene?:boolean;github?:string};
export const FILTERS=[{"key":"all","label":"All"},{"key":"app","label":"Apps"},{"key":"web","label":"Web"},{"key":"systems","label":"Systems"},{"key":"creative","label":"Creative"}] as const;
export const CLIENT:Work[]=[
  {
    "k": "anidash",
    "name": "AniDash",
    "cat": "Android anime app",
    "fil": "app",
    "desc": "Anime discovery, watchlists, episode tracking and a web companion.",
    "short": "Anime discovery, watchlists, episode tracking and a web companion.",
    "tags": [
      "Flutter",
      "Dart",
      "Android"
    ],
    "href": "https://anidashweb.vercel.app/",
    "go": "anidashweb.vercel.app",
    "ext": true,
    "img": "/img/work-anidash.svg",
    "github": "https://github.com/anshdeepofficial1/AniDash"
  },
  {
    "k": "vybe",
    "name": "VYBE",
    "cat": "Android music player",
    "fil": "app",
    "desc": "Local music and online discovery with a focused listening interface.",
    "short": "Local music and online discovery with a focused listening interface.",
    "tags": [
      "Android",
      "Music",
      "Material Design"
    ],
    "href": "https://vybetune.vercel.app/",
    "go": "vybetune.vercel.app",
    "ext": true,
    "img": "/img/work-vybe.svg",
    "github": "https://github.com/anshdeepofficial1/VYBE"
  },
  {
    "k": "copycloud",
    "name": "CopyCloud",
    "cat": "Cross-device transfer",
    "fil": "web",
    "desc": "Transfer files and text across devices.",
    "short": "Transfer files and text across devices.",
    "tags": [
      "Web",
      "File transfer",
      "UI"
    ],
    "href": "https://copycloud.me/",
    "go": "copycloud.me",
    "ext": true,
    "img": "/img/work-copycloud.svg",
    "github": "https://github.com/anshdeepofficial1/Copy-Cloud"
  },
  {
    "k": "nova",
    "name": "NOVA",
    "cat": "Operating system project",
    "fil": "systems",
    "desc": "A web-native desktop and Linux-based operating system project.",
    "short": "A web-native desktop and Linux-based operating system project.",
    "tags": [
      "Rust",
      "Tauri",
      "React"
    ],
    "href": "https://github.com/anshdeepofficial1/NOVA",
    "go": "github.com",
    "ext": true,
    "img": "/img/work-nova.svg",
    "github": "https://github.com/anshdeepofficial1/NOVA"
  },
  {
    "k": "pitchcraft",
    "name": "Pitchcraft",
    "cat": "Local gallery",
    "fil": "app",
    "desc": "Photo organization, on-device face grouping and gallery management.",
    "short": "Photo organization, on-device face grouping and gallery management.",
    "tags": [
      "Android",
      "Machine Learning"
    ],
    "href": "https://github.com/anshdeepofficial1/Pitchcraft",
    "go": "github.com",
    "ext": true,
    "img": "/img/work-pitchcraft.svg",
    "github": "https://github.com/anshdeepofficial1/Pitchcraft"
  },
  {
    "k": "zylo",
    "name": "ZYLO",
    "cat": "Android media app",
    "fil": "app",
    "desc": "Media browsing and playback for Android.",
    "short": "Media browsing and playback for Android.",
    "tags": [
      "Android",
      "Media"
    ],
    "href": "https://github.com/anshdeepofficial1/ZYLO",
    "go": "github.com",
    "ext": true,
    "img": "/img/work-zylo.svg",
    "github": "https://github.com/anshdeepofficial1/ZYLO"
  }
];
export const MORE:Work[]=[
  {
    "k": "iside",
    "name": "iSide",
    "cat": "iOS tooling",
    "fil": "web",
    "desc": "A web interface for app installation and signing workflows.",
    "short": "A web interface for app installation and signing workflows.",
    "tags": [
      "Web",
      "iOS"
    ],
    "href": "https://github.com/anshdeepofficial1/iSide",
    "go": "github.com",
    "ext": true,
    "img": "/img/work-iside.svg",
    "github": "https://github.com/anshdeepofficial1/iSide"
  },
  {
    "k": "zmb",
    "name": "ZMB",
    "cat": "2D animation workflow",
    "fil": "creative",
    "desc": "An experimental repository for animated stories and video production.",
    "short": "An experimental repository for animated stories and video production.",
    "tags": [
      "Animation",
      "Automation"
    ],
    "href": "https://github.com/anshdeepofficial1/ZMB",
    "go": "github.com",
    "ext": true,
    "img": "/img/work-zmb.svg",
    "github": "https://github.com/anshdeepofficial1/ZMB"
  },
  {
    "k": "socialboost",
    "name": "SocialBoost",
    "cat": "Social media tools",
    "fil": "web",
    "desc": "A project for social content workflows.",
    "short": "A project for social content workflows.",
    "tags": [
      "Web",
      "Social"
    ],
    "href": "https://socialboost-coral-ten.vercel.app/",
    "go": "socialboost-coral-ten.vercel.app",
    "ext": true,
    "img": "/img/work-socialboost.svg",
    "github": "https://github.com/anshdeepofficial1/SocialBoost"
  },
  {
    "k": "darkanimewalls",
    "name": "DarkAnimeWalls",
    "cat": "Wallpaper website",
    "fil": "creative",
    "desc": "A wallpaper gallery with browsing and downloads.",
    "short": "A wallpaper gallery with browsing and downloads.",
    "tags": [
      "Web",
      "Design"
    ],
    "href": "https://darkanimewalls.vercel.app/",
    "go": "darkanimewalls.vercel.app",
    "ext": true,
    "img": "/img/work-darkanimewalls.svg",
    "github": "https://github.com/anshdeepofficial1/darkanimewalls"
  },
  {
    "k": "tubeiq",
    "name": "TubeIQ",
    "cat": "YouTube tools",
    "fil": "web",
    "desc": "A web project for YouTube-related tools.",
    "short": "A web project for YouTube-related tools.",
    "tags": [
      "Web",
      "Data"
    ],
    "href": "https://ytengine.vercel.app/",
    "go": "ytengine.vercel.app",
    "ext": true,
    "img": "/img/work-tubeiq.svg",
    "github": "https://github.com/anshdeepofficial1/TubeIQ"
  }
];
export const CONCEPTS:Work[]=[];
export const WORK=CLIENT.slice(0,5);
export const ALL_WORK=[...CLIENT,...MORE];
export const countFor=(key:string)=>key==='all'?ALL_WORK.length:ALL_WORK.filter(w=>w.fil===key).length;