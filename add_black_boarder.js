var img2=new SimpleImage ("smallpanda.png");
var bla=new SimpleImage ("hilton.jpg");

function setBlack(pixel) {
var ans = pixel.setRed(0);
var ans = pixel.setBlue(0);
var ans = pixel.setGreen(0);
return ans; 
}

img2.getWidth()
img2.getHeight()
print(img2.getWidth());
print(img2.getHeight());

function addBorder(thickness){
for (var pixel of thickness.values()){
  var x = pixel.getX();
  var y = pixel.getY();
  if (y <=10 || y>=thickness.getHeight()-10){
  setBlack(pixel);
  }
  if (x <=10 || x>=thickness.getWidth()-10){
  setBlack(pixel);
}
  }
  }

  addBorder(bla);
print(bla);
