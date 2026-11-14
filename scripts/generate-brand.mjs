import sharp from 'sharp';
await sharp('public/as-logo.svg').resize({width:1079}).png().toFile('public/as-logo.png');
await sharp('public/as-logo.svg').resize({width:180,height:180,fit:'contain',background:{r:0,g:0,b:0,alpha:0}}).png().toFile('public/favicon.png');
