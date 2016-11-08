
// constructor method for class()

function MyObj(par1, par2) {
  this.p1 = par1;
  this.p2 = par2;
  this.r1 = random(100, 1000);

  this.display = function(){
    var stringText;
    stringText = "Hey There: " + this.p1 + " : " + this.r1;
    text(stringText, 20, 20);
  }
}
// end constructor







MyObj.prototype.updatep1 = function (newVal) {
  this.p1 = newVal;

};
