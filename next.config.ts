import type { NextConfig } from 'next';
const config: NextConfig = { poweredByHeader:false, images:{unoptimized:true}, async redirects(){return [{source:'/coding',destination:'/',permanent:false},{source:'/editing',destination:'/editing/index.html',permanent:false},{source:'/blog/:path*',destination:'/work',permanent:false}]}};export default config;
