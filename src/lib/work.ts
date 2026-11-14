export type Work={k:string;name:string;cat:string;fil:string;desc:string;short:string;tags:string[];href:string;go:string;ext:boolean;img:string;fig?:string;video?:string;concept?:boolean;scene?:boolean;github?:string;previewLabel?:string;sourceImg?:string};
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
    "img": "/img/actual/anidash.jpg",
    "github": "https://github.com/anshdeepofficial1/AniDash",
    "sourceImg": "https://raw.githubusercontent.com/anshdeepofficial1/AniDash/HEAD/screenshots/desktop/home.jpg",
    "previewLabel": "App screenshot"
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
    "img": "/img/actual/vybe.jpg",
    "github": "https://github.com/anshdeepofficial1/VYBE",
    "sourceImg": "https://raw.githubusercontent.com/anshdeepofficial1/VYBE/HEAD/docs/screenshots/vybe-home.png",
    "previewLabel": "App screenshot"
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
    "href": "https://zylod.vercel.app/",
    "go": "zylod.vercel.app",
    "ext": true,
    "img": "/img/actual/zylo.jpg",
    "github": "https://github.com/anshdeepofficial1/ZYLO",
    "sourceImg": "",
    "previewLabel": "Website preview"
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
    "img": "/img/actual/copycloud.jpg",
    "github": "https://github.com/anshdeepofficial1/Copy-Cloud",
    "sourceImg": "https://raw.githubusercontent.com/anshdeepofficial1/Copy-Cloud/HEAD/Screenshots/Send.png",
    "previewLabel": "Website screenshot"
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
    "img": "/img/actual/nova.jpg",
    "github": "https://github.com/anshdeepofficial1/NOVA",
    "sourceImg": "",
    "previewLabel": "Repository / shell preview"
  }
];
export const MORE:Work[]=[
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
    "img": "/img/actual/pitchcraft.jpg",
    "github": "https://github.com/anshdeepofficial1/Pitchcraft",
    "sourceImg": "",
    "previewLabel": "Repository preview"
  },
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
    "img": "/img/actual/iside.jpg",
    "github": "https://github.com/anshdeepofficial1/iSide",
    "sourceImg": "",
    "previewLabel": "Repository preview"
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
    "img": "/img/actual/zmb.jpg",
    "github": "https://github.com/anshdeepofficial1/ZMB",
    "sourceImg": "",
    "previewLabel": "Repository preview"
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
    "img": "/img/actual/socialboost.jpg",
    "github": "https://github.com/anshdeepofficial1/SocialBoost",
    "sourceImg": "",
    "previewLabel": "Website preview"
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
    "img": "/img/actual/darkanimewalls.jpg",
    "github": "https://github.com/anshdeepofficial1/darkanimewalls",
    "sourceImg": "",
    "previewLabel": "Website preview"
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
    "img": "/img/actual/tubeiq.jpg",
    "github": "https://github.com/anshdeepofficial1/TubeIQ",
    "sourceImg": "",
    "previewLabel": "Website preview"
  },
  {
    "k": "snapstream",
    "name": "SnapStream",
    "cat": "Image utility",
    "fil": "web",
    "desc": "Discover, filter and download images from websites.",
    "short": "Discover, filter and download images from websites.",
    "tags": [
      "Image utility"
    ],
    "href": "https://github.com/anshdeepofficial1/SnapStream",
    "go": "github.com",
    "ext": true,
    "img": "/img/actual/snapstream.jpg",
    "github": "https://github.com/anshdeepofficial1/SnapStream",
    "previewLabel": "Repository preview",
    "sourceImg": ""
  },
  {
    "k": "fueltracker",
    "name": "FuelTracker",
    "cat": "Tracking utility",
    "fil": "app",
    "desc": "Record and manage fuel-related data.",
    "short": "Record and manage fuel-related data.",
    "tags": [
      "Tracking utility"
    ],
    "href": "https://github.com/anshdeepofficial1/FuelTracker",
    "go": "github.com",
    "ext": true,
    "img": "/img/actual/fueltracker.jpg",
    "github": "https://github.com/anshdeepofficial1/FuelTracker",
    "previewLabel": "Repository preview",
    "sourceImg": ""
  },
  {
    "k": "aboutme",
    "name": "About Me",
    "cat": "Profile website",
    "fil": "web",
    "desc": "Personal profile and developer information.",
    "short": "Personal profile and developer information.",
    "tags": [
      "Profile website"
    ],
    "href": "https://github.com/anshdeepofficial1/About-Me",
    "go": "github.com",
    "ext": true,
    "img": "/img/actual/aboutme.jpg",
    "github": "https://github.com/anshdeepofficial1/About-Me",
    "previewLabel": "Repository preview",
    "sourceImg": ""
  },
  {
    "k": "deepfake",
    "name": "DEEPFAKE",
    "cat": "AI media research",
    "fil": "creative",
    "desc": "Media processing and research experimentation.",
    "short": "Media processing and research experimentation.",
    "tags": [
      "AI media research"
    ],
    "href": "https://github.com/anshdeepofficial1/DEEPFAKE",
    "go": "github.com",
    "ext": true,
    "img": "/img/actual/deepfake.jpg",
    "github": "https://github.com/anshdeepofficial1/DEEPFAKE",
    "previewLabel": "Repository preview",
    "sourceImg": ""
  },
  {
    "k": "todo",
    "name": "To-Do List",
    "cat": "Task management",
    "fil": "app",
    "desc": "Create and organize daily tasks.",
    "short": "Create and organize daily tasks.",
    "tags": [
      "Task management"
    ],
    "href": "https://github.com/anshdeepofficial1/To-Do-List",
    "go": "github.com",
    "ext": true,
    "img": "/img/actual/todo.jpg",
    "github": "https://github.com/anshdeepofficial1/To-Do-List",
    "previewLabel": "Repository preview",
    "sourceImg": ""
  },
  {
    "k": "taskmanagement",
    "name": "Task Management Website",
    "cat": "Productivity website",
    "fil": "web",
    "desc": "Web-based task management.",
    "short": "Web-based task management.",
    "tags": [
      "Productivity website"
    ],
    "href": "https://github.com/anshdeepofficial1/Task-Management-Website",
    "go": "github.com",
    "ext": true,
    "img": "/img/actual/taskmanagement.jpg",
    "github": "https://github.com/anshdeepofficial1/Task-Management-Website",
    "previewLabel": "Repository preview",
    "sourceImg": ""
  },
  {
    "k": "payroll",
    "name": "Employee Payroll Management System",
    "cat": "Database project",
    "fil": "systems",
    "desc": "Employee records and payroll management.",
    "short": "Employee records and payroll management.",
    "tags": [
      "Database project"
    ],
    "href": "https://github.com/anshdeepofficial1/Employee-Payroll-Management-System",
    "go": "github.com",
    "ext": true,
    "img": "/img/actual/payroll.jpg",
    "github": "https://github.com/anshdeepofficial1/Employee-Payroll-Management-System",
    "previewLabel": "Repository preview",
    "sourceImg": ""
  },
  {
    "k": "airplane",
    "name": "Airplane Management System",
    "cat": "C++ OOP project",
    "fil": "systems",
    "desc": "Console-based management system.",
    "short": "Console-based management system.",
    "tags": [
      "C++ OOP project"
    ],
    "href": "https://github.com/anshdeepofficial1/Airplane-Management-System",
    "go": "github.com",
    "ext": true,
    "img": "/img/actual/airplane.jpg",
    "github": "https://github.com/anshdeepofficial1/Airplane-Management-System",
    "previewLabel": "Repository preview",
    "sourceImg": ""
  },
  {
    "k": "weather",
    "name": "Weather Data Analysis",
    "cat": "R data analysis",
    "fil": "systems",
    "desc": "Weather data processing and visualization.",
    "short": "Weather data processing and visualization.",
    "tags": [
      "R data analysis"
    ],
    "href": "https://github.com/anshdeepofficial1/Weather-data-analysis",
    "go": "github.com",
    "ext": true,
    "img": "/img/actual/weather.jpg",
    "github": "https://github.com/anshdeepofficial1/Weather-data-analysis",
    "previewLabel": "Repository preview",
    "sourceImg": ""
  },
  {
    "k": "snake",
    "name": "Snake Game",
    "cat": "Console game",
    "fil": "creative",
    "desc": "Classic game loops and movement controls.",
    "short": "Classic game loops and movement controls.",
    "tags": [
      "Console game"
    ],
    "href": "https://github.com/anshdeepofficial1/Snake-Game",
    "go": "github.com",
    "ext": true,
    "img": "/img/actual/snake.jpg",
    "github": "https://github.com/anshdeepofficial1/Snake-Game",
    "previewLabel": "Repository preview",
    "sourceImg": ""
  }
];
export const CONCEPTS:Work[]=[];
export const WORK=CLIENT;
export const ALL_WORK=[...CLIENT,...MORE];
export const countFor=(key:string)=>key==='all'?ALL_WORK.length:ALL_WORK.filter(w=>w.fil===key).length;