import {AS_POLYGONS} from '@/lib/brand';
// Precompute the signed distance once, rather than evaluating dozens of edges on every ray step.
// RG encodes 16-bit distance, B identifies the nearest blue accent contour. Raw texture rows run bottom to top.
export function makeLogoTexture(gl:WebGL2RenderingContext){
 const n=640, range=1.6, bound=1.1, pixels=new Uint8Array(n*n*4);
 const polygons=AS_POLYGONS.map(poly=>poly.map(([x,y])=>[(x-600)/680,(619-y)/680]));
 const edges=polygons.map(poly=>poly.map(([x,y],i)=>{const [a,b]=poly[(i+1)%poly.length];const dx=a-x,dy=b-y;return {x,y,dx,dy,inv:1/(dx*dx+dy*dy),a,b};}));
 for(let j=0;j<n;j++)for(let i=0;i<n;i++){const x=((i+.5)/n*2-1)*bound,y=((j+.5)/n*2-1)*bound;let d=1e9,part=0;
 for(let k=0;k<edges.length;k++){let sq=1e9,inside=false;for(const e of edges[k]){const dx=x-e.x,dy=y-e.y,t=Math.max(0,Math.min(1,(dx*e.dx+dy*e.dy)*e.inv));const ex=dx-e.dx*t,ey=dy-e.dy*t;sq=Math.min(sq,ex*ex+ey*ey);if((e.y>y)!==(e.b>y)&&x<(e.a-e.x)*(y-e.y)/(e.b-e.y)+e.x)inside=!inside;}const sd=Math.sqrt(sq)*(inside?-1:1);if(sd<d){d=sd;part=k;}}
 const v=Math.round(Math.max(0,Math.min(1,d/range*.5+.5))*65535), o=(j*n+i)*4; pixels[o]=v>>8;pixels[o+1]=v&255;pixels[o+2]=part===0?0:255;pixels[o+3]=255;}
 const tex=gl.createTexture();if(!tex)throw Error('AS texture allocation failed');gl.activeTexture(gl.TEXTURE0);gl.bindTexture(gl.TEXTURE_2D,tex);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.LINEAR);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,n,n,0,gl.RGBA,gl.UNSIGNED_BYTE,pixels);return tex;
}
