import sharp from 'sharp';
await sharp('public/as-logo.svg').resize({width:1079}).png().toFile('public/as-logo.png');
await sharp('public/as-logo-white.svg').resize(180,180).png().toFile('public/favicon.png');

