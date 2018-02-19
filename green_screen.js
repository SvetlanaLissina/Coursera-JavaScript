// write your code here
var fbImage = new SimpleImage ("drewRobert.png");
var bgImage = new SimpleImage("dinos.png");
var output = new SimpleImage (fbImage.getWidth(),fbImage.getHeight());


for (var pixel of fbImage.values()) {
if(pixel.getGreen()>pixel.getRed()+pixel.getBlue()){
var x = pixel.getX();
var y = pixel.getY();
var bgPixel = bgImage.getPixel(x,y);
output.setPixel(x,y,bgPixel);
}

else {
output.setPixel(x,y,pixel);
}
}
print (output);
