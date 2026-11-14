export type Work={k:string;name:string;cat:string;fil:string;desc:string;short:string;tags:string[];href:string;go:string;ext:boolean;img:string;fig?:string;video?:string;github?:string;previewLabel?:string;sourceImg?:string;previewUnavailable?:boolean;features?:string[]};
export const FILTERS=[{"key":"all","label":"All"},{"key":"app","label":"Apps"},{"key":"web","label":"Web"},{"key":"systems","label":"Systems"},{"key":"creative","label":"Creative"}] as const;
const selected:Work[]=[
  {
    "k": "anidash",
    "name": "AniDash",
    "cat": "Android anime companion",
    "fil": "app",
    "desc": "Discover anime, manage personal libraries and track episodes, with optional AniList synchronization and manga support.",
    "short": "Discover anime, manage personal libraries and track episodes, with optional AniList synchronization and manga support.",
    "tags": [
      "Flutter",
      "Dart",
      "Android",
      "AniList"
    ],
    "href": "https://anidashgo.vercel.app/",
    "go": "anidashgo.vercel.app",
    "ext": true,
    "img": "/img/actual/anidash.jpg",
    "github": "https://github.com/anshdeepofficial1/AniDash",
    "sourceImg": "",
    "previewLabel": "Live web app screenshot",
    "features": [
      "Discovery and personal library",
      "Continue Watching",
      "AniList integration",
      "Manga support"
    ]
  },
  {
    "k": "vybe",
    "name": "VYBE",
    "cat": "Android music player",
    "fil": "app",
    "desc": "A modern Android music experience combining YouTube Music discovery, local playback, recommendations, lyrics and queues.",
    "short": "A modern Android music experience combining YouTube Music discovery, local playback, recommendations, lyrics and queues.",
    "tags": [
      "Kotlin",
      "Jetpack Compose",
      "Android"
    ],
    "href": "https://vybetune.vercel.app/download.html",
    "go": "vybetune.vercel.app/download.html",
    "ext": true,
    "img": "/img/actual/vybe.jpg",
    "github": "https://github.com/anshdeepofficial1/VYBE",
    "sourceImg": "",
    "previewLabel": "Download website screenshot",
    "features": [
      "Online and local music discovery",
      "Song, album and artist search",
      "Synchronized lyrics",
      "Queue and playback customization"
    ]
  },
  {
    "k": "zylo",
    "name": "ZYLO",
    "cat": "Android media hub",
    "fil": "app",
    "desc": "Android media browsing and playback with a Jetpack Compose interface, multi-audio controls and web companion.",
    "short": "Android media browsing and playback with a Jetpack Compose interface, multi-audio controls and web companion.",
    "tags": [
      "Kotlin",
      "Jetpack Compose",
      "JavaScript"
    ],
    "href": "https://zylod.vercel.app/home",
    "go": "zylod.vercel.app/home",
    "ext": true,
    "img": "/img/actual/zylo.jpg",
    "github": "https://github.com/anshdeepofficial1/ZYLO",
    "sourceImg": "",
    "previewLabel": "Website screenshot",
    "features": [
      "Media catalog and profiles",
      "Audio and subtitle controls",
      "Playback architecture",
      "Configurable interface"
    ]
  },
  {
    "k": "copycloud",
    "name": "CopyCloud",
    "cat": "Cross-device transfer",
    "fil": "web",
    "desc": "Share text and files between devices using a short retrieval code or QR code, without creating an account.",
    "short": "Share text and files between devices using a short retrieval code or QR code, without creating an account.",
    "tags": [
      "JavaScript",
      "TypeScript",
      "Supabase",
      "Tailwind CSS"
    ],
    "href": "https://copycloud.me/",
    "go": "copycloud.me",
    "ext": true,
    "img": "/img/actual/copycloud.jpg",
    "github": "https://github.com/anshdeepofficial1/Copy-Cloud",
    "sourceImg": "",
    "previewLabel": "Live website screenshot",
    "features": [
      "Text and file transfer",
      "Six-character codes",
      "QR code retrieval",
      "Responsive interface"
    ]
  },
  {
    "k": "socialboost",
    "name": "SocialBoost",
    "cat": "Creator analytics studio",
    "fil": "web",
    "desc": "Full-stack video analysis, content planning and connected-account statistics based on available provider data.",
    "short": "Full-stack video analysis, content planning and connected-account statistics based on available provider data.",
    "tags": [
      "Next.js",
      "FastAPI",
      "Python",
      "PostgreSQL"
    ],
    "href": "https://socialboostweb.vercel.app/",
    "go": "socialboostweb.vercel.app",
    "ext": true,
    "img": "/img/actual/socialboost.jpg",
    "github": "https://github.com/anshdeepofficial1/SocialBoost",
    "sourceImg": "",
    "previewLabel": "Live website screenshot",
    "features": [
      "Video analysis and reports",
      "Creator insights",
      "Content calendar",
      "Connected-account analytics"
    ]
  }
];
const remaining:Work[]=[
  {
    "k": "nova",
    "name": "NOVA OS",
    "cat": "Experimental operating system",
    "fil": "systems",
    "desc": "Experimental hybrid OS combining a Debian live desktop, native Tauri workspace, Rust host services and compatibility planning.",
    "short": "Experimental hybrid OS combining a Debian live desktop, native Tauri workspace, Rust host services and compatibility planning.",
    "tags": [
      "Rust",
      "Tauri",
      "React",
      "Debian"
    ],
    "href": "https://github.com/anshdeepofficial1/NOVA",
    "go": "github.com",
    "ext": true,
    "img": "/img/actual/nova.jpg",
    "github": "https://github.com/anshdeepofficial1/NOVA",
    "sourceImg": "",
    "previewLabel": "Repository / shell preview",
    "features": [
      "Debian 13 live-image architecture",
      "Native desktop workspace",
      "Host capability detection",
      "Compatibility and runtime policy"
    ]
  },
  {
    "k": "pitchcraft",
    "name": "Pitchcraft",
    "cat": "Local Android gallery",
    "fil": "app",
    "desc": "Privacy-first Android gallery based on Photon Gallery, extended with on-device machine learning and photo organization.",
    "short": "Privacy-first Android gallery based on Photon Gallery, extended with on-device machine learning and photo organization.",
    "tags": [
      "Kotlin",
      "Android",
      "Machine Learning",
      "OCR"
    ],
    "href": "https://github.com/anshdeepofficial1/Pitchcraft",
    "go": "github.com",
    "ext": true,
    "img": "/img/actual/pitchcraft.jpg",
    "github": "https://github.com/anshdeepofficial1/Pitchcraft",
    "sourceImg": "",
    "previewLabel": "Repository preview",
    "features": [
      "Local face grouping",
      "OCR and semantic search",
      "Folder-scoped libraries",
      "Indexing progress"
    ]
  },
  {
    "k": "zmb",
    "name": "ZMB",
    "cat": "Interactive animation automation",
    "fil": "creative",
    "desc": "Experimental interactive zombie-story pipeline using procedural 2D animation, narration, viewer voting and automated reel production.",
    "short": "Experimental interactive zombie-story pipeline using procedural 2D animation, narration, viewer voting and automated reel production.",
    "tags": [
      "Python",
      "SVG",
      "FFmpeg",
      "GitHub Actions"
    ],
    "href": "https://github.com/anshdeepofficial1/ZMB",
    "go": "github.com",
    "ext": true,
    "img": "/img/actual/zmb.jpg",
    "github": "https://github.com/anshdeepofficial1/ZMB",
    "sourceImg": "",
    "previewLabel": "Repository preview",
    "features": [
      "Branching narrative",
      "Procedural 2D scenes",
      "Timed narration and captions",
      "Voting and production workflow"
    ]
  },
  {
    "k": "darkanimewalls",
    "name": "DarkAnimeWalls",
    "cat": "Wallpaper gallery",
    "fil": "web",
    "desc": "Responsive wallpaper browsing and download website with search, filters, previews and a creator media workflow.",
    "short": "Responsive wallpaper browsing and download website with search, filters, previews and a creator media workflow.",
    "tags": [
      "HTML",
      "CSS",
      "JavaScript",
      "Cloudinary"
    ],
    "href": "https://darkanimewalls.vercel.app/",
    "go": "darkanimewalls.vercel.app",
    "ext": true,
    "img": "/img/actual/darkanimewalls.jpg",
    "github": "https://github.com/anshdeepofficial1/darkanimewalls",
    "sourceImg": "",
    "previewLabel": "Website preview",
    "features": [
      "Desktop and mobile wallpapers",
      "Search and random discovery",
      "Large image previews",
      "Original-quality downloads"
    ]
  },
  {
    "k": "tubeiq",
    "name": "TubeIQ",
    "cat": "YouTube channel intelligence",
    "fil": "web",
    "desc": "Browser-based YouTube analytics and editorial planning with public channel data and a 30-day content studio.",
    "short": "Browser-based YouTube analytics and editorial planning with public channel data and a 30-day content studio.",
    "tags": [
      "HTML",
      "JavaScript",
      "YouTube Data API",
      "Vercel"
    ],
    "href": "https://ytengine.vercel.app/",
    "go": "ytengine.vercel.app",
    "ext": true,
    "img": "/img/actual/tubeiq.jpg",
    "github": "https://github.com/anshdeepofficial1/TubeIQ",
    "sourceImg": "",
    "previewLabel": "Website preview",
    "features": [
      "Public channel insights",
      "Content calendar",
      "Spreadsheet import/export",
      "Creator-approved title review"
    ]
  },
  {
    "k": "snapstream",
    "name": "SnapStream",
    "cat": "Browser extension",
    "fil": "web",
    "desc": "Chromium extension for discovering, filtering and downloading images from webpages the user is authorized to use.",
    "short": "Chromium extension for discovering, filtering and downloading images from webpages the user is authorized to use.",
    "tags": [
      "JavaScript",
      "HTML",
      "CSS",
      "Manifest V3"
    ],
    "href": "https://github.com/anshdeepofficial1/SnapStream",
    "go": "github.com",
    "ext": true,
    "img": "/img/actual/snapstream.jpg",
    "github": "https://github.com/anshdeepofficial1/SnapStream",
    "previewLabel": "Repository preview",
    "sourceImg": "",
    "features": [
      "DOM and CSS image discovery",
      "File-type and dimension filters",
      "Grid previews",
      "Individual or bulk downloads"
    ]
  },
  {
    "k": "fueltracker",
    "name": "FuelTrack",
    "cat": "Trip-cost intelligence",
    "fil": "web",
    "desc": "India-focused route, fuel, toll and vehicle trip-cost estimation with history and analytics.",
    "short": "India-focused route, fuel, toll and vehicle trip-cost estimation with history and analytics.",
    "tags": [
      "HTML",
      "JavaScript",
      "Leaflet",
      "Chart.js"
    ],
    "href": "https://drivebudget.vercel.app/",
    "go": "drivebudget.vercel.app",
    "ext": true,
    "img": "/img/actual/fueltracker.jpg",
    "github": "https://github.com/anshdeepofficial1/FuelTracker",
    "previewLabel": "Repository preview",
    "sourceImg": "",
    "features": [
      "Route planning and maps",
      "Fuel and toll estimates",
      "Trip history",
      "Fuel logs and analytics"
    ]
  },
  {
    "k": "deepfake",
    "name": "DeepGuard",
    "cat": "Media forensics research",
    "fil": "systems",
    "desc": "Research platform for media forensic signals and evidence-backed claim verification. Its heuristic detectors are not calibrated production deepfake models.",
    "short": "Research platform for media forensic signals and evidence-backed claim verification. Its heuristic detectors are not calibrated production deepfake models.",
    "tags": [
      "Python",
      "FastAPI",
      "Chromium extension"
    ],
    "href": "https://github.com/anshdeepofficial1/DEEPFAKE",
    "go": "github.com",
    "ext": true,
    "img": "/img/actual/deepfake.jpg",
    "github": "https://github.com/anshdeepofficial1/DEEPFAKE",
    "previewLabel": "Repository preview",
    "sourceImg": "",
    "features": [
      "Image, video and audio signals",
      "Evidence-backed claim verification",
      "Browser extension",
      "Explicit research limitations"
    ]
  },
  {
    "k": "anidash-web",
    "name": "AniDash Website",
    "cat": "Responsive anime web app",
    "fil": "web",
    "desc": "Standalone anime discovery and watch PWA with AniList catalog data, responsive layouts, library and episode navigation.",
    "short": "Standalone anime discovery and watch PWA with AniList catalog data, responsive layouts, library and episode navigation.",
    "tags": [
      "TypeScript",
      "PWA",
      "AniList"
    ],
    "href": "https://anidashgo.vercel.app/",
    "go": "anidashgo.vercel.app",
    "ext": true,
    "img": "/img/actual/anidash.jpg",
    "github": "https://github.com/anshdeepofficial1/AniDash-Website",
    "previewLabel": "Website screenshot",
    "features": [
      "Trending and discovery catalog",
      "Responsive layouts",
      "Searchable episode lists",
      "Continue Watching and library"
    ]
  },
  {
    "k": "socialboost-app",
    "name": "SocialBoost Android",
    "cat": "Native creator studio client",
    "fil": "app",
    "desc": "Kotlin and Jetpack Compose Android client for SocialBoost, connecting to its existing backend API.",
    "short": "Kotlin and Jetpack Compose Android client for SocialBoost, connecting to its existing backend API.",
    "tags": [
      "Kotlin",
      "Jetpack Compose",
      "Android",
      "FastAPI"
    ],
    "href": "https://github.com/anshdeepofficial1/SocialBoost-APP",
    "go": "github.com",
    "ext": true,
    "img": "/img/actual/socialboost-app.jpg",
    "github": "https://github.com/anshdeepofficial1/SocialBoost-APP",
    "previewLabel": "Repository preview",
    "features": [
      "Authenticated accounts",
      "Reports and predictions",
      "Connected accounts",
      "Backend-gated features"
    ]
  },
  {
    "k": "portfolio",
    "name": "Portfolio",
    "cat": "Personal website",
    "fil": "web",
    "desc": "Dual Coding and Editing portfolio with AS branding, WebGL2 motion, real project previews and separate PDF resumes.",
    "short": "Dual Coding and Editing portfolio with AS branding, WebGL2 motion, real project previews and separate PDF resumes.",
    "tags": [
      "Next.js",
      "TypeScript",
      "GSAP",
      "WebGL2"
    ],
    "href": "/work/portfolio",
    "go": "anshdeepofficial1.vercel.app",
    "ext": false,
    "img": "/img/actual/portfolio.jpg",
    "github": "https://github.com/anshdeepofficial1/Portfolio",
    "previewLabel": "Website screenshot",
    "features": [
      "Two portfolio variants",
      "Animated AS identity",
      "Responsive project previews",
      "Separate PDF resumes"
    ]
  },
  {
    "k": "profile",
    "href": "https://github.com/anshdeepofficial1/anshdeepofficial1",
    "go": "github.com",
    "ext": true,
    "img": "",
    "github": "https://github.com/anshdeepofficial1/anshdeepofficial1",
    "previewLabel": "Repository available",
    "previewUnavailable": true,
    "name": "GitHub Profile",
    "cat": "Developer profile and dashboard",
    "fil": "web",
    "desc": "Personal GitHub profile repository showcasing selected projects, contribution activity, repository insights and recent development.",
    "short": "Personal GitHub profile repository showcasing selected projects, contribution activity, repository insights and recent development.",
    "tags": [
      "Python",
      "GitHub Actions",
      "SVG"
    ],
    "features": [
      "Project showcases",
      "Contribution graphics",
      "Repository metrics",
      "Recent activity"
    ]
  }
];
import previewManifest from './preview-manifest.json';
const captures=previewManifest as Record<string,{label:string;source:string;unavailable?:boolean}>;
const withCapture=(w:Work):Work=>({...w,previewLabel:captures[w.k]?.label || w.previewLabel,previewUnavailable:captures[w.k]?.unavailable ?? (w.previewUnavailable ?? false)});
export const CLIENT=selected.map(withCapture);
export const MORE=remaining.map(withCapture);
export const WORK=CLIENT;
export const ALL_WORK=[...CLIENT,...MORE];
export const countFor=(key:string)=>key==='all'?ALL_WORK.length:ALL_WORK.filter(w=>w.fil===key).length;