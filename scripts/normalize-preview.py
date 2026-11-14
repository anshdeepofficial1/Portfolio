from PIL import Image, ImageOps, ImageFilter, ImageEnhance
import sys
src,out=sys.argv[1:3]
im=Image.open(src).convert('RGB')
if len(sys.argv)>3 and sys.argv[3]=='blueprint':
    gray=ImageOps.grayscale(im)
    edge=ImageOps.autocontrast(gray.filter(ImageFilter.FIND_EDGES))
    edge=ImageOps.invert(edge)
    paper=ImageOps.colorize(edge,black='#353934',white='#efeeea')
    paper.save(out,quality=93)
else:
    canvas=Image.new('RGB',(1440,900),'#111211')
    im.thumbnail((1440,900),Image.Resampling.LANCZOS)
    canvas.paste(im,((1440-im.width)//2,(900-im.height)//2))
    canvas.save(out,quality=94)
