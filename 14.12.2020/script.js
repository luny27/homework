function Figure(x, y, color){
    this.color = color;
    this.x = x;
    this.y = y;
}
function Line(x1, y1, x2, y2, color){
    Figure.apply(this,[x1,y1,color]);
    this.x2 = x2;
    this.y2 = y2;
    this.type = 'line';
}
function Circle(x1, y1, r, color){
    Figure.apply(this,[x1,y1,color]);
    this.r = r;
}

function Rect(x1, y1, x2, y2, color){
    Figure.apply(this,[x1,y1,color]);
    this.x2 = x2;
    this.y2 = y2;
}

let line = new Line(50, 250, 200, 200, 'red');
let circle = new Circle(120, 120, 50, 'green');
let rect = new Rect(260, 130, 60, 120, 'blue');

let blackBox = new Rect(60, 60, 20, 120, 'black');
let grayCircle = new Circle(20, 230, 20, 'gray');

let drawArea = new Canvas('canvasID');
drawArea.add(line);
drawArea.add(circle);
drawArea.add(rect);
drawArea.add(blackBox);
drawArea.add(grayCircle);

function Canvas(elem) {
    var canvas = document.getElementById(elem);

    if (canvas.getContext) {
      this.ctx = canvas.getContext('2d');

      this.add = function (data){
          if(data.y2){
              if(data.type){
                  this.ctx.moveTo(data.x, data.y);
                  this.ctx.lineTo(data.x2, data.y2);
                  this.ctx.strokeStyle = data.color;
                  this.ctx.stroke();
              }
              else{
                  this.ctx.fillStyle = data.color;
                  this.ctx.fillRect(data.x, data.y, data.x2, data.y2);
              }
          }
          else{
              this.ctx.beginPath();
              this.ctx.arc(data.x, data.y, data.r, 0, 2 * Math.PI);
              this.ctx.strokeStyle = data.color;
              this.ctx.stroke();
          }
      }
    }
}