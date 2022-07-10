const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
ctx.width = 600;
ctx.height= 600;

var t =  new function(){
    this.x=0;
    this.y=300;
    this.w=50;
    this.h=50
    this.frame=0;
    this.sx=50;
    this.direcao= 0; //0: cima; 1:baixo; 2: direita; 3: esquerda
    this.img = new Image();
    this.img.src = './Turtle.png';  
      
    this.sobe = function() {
        this.direcao=0;
        this.setSx();
        if (this.y>0) this.y-=5;
    }
    this.desce = function() {
        this.direcao=1;
        this.setSx();
        if (this.y<ctx.height-this.h) this.y+=5;
    }
    
    this.direita = function() {
        this.direcao=2;
        this.setSx();
        if (this.x<(ctx.width-this.w)) this.x+=5;
    }
    
    this.esquerda = function() {
        this.direcao=3;
        this.setSx();
        if (this.x>0) this.x-=5;
    }
    this.setSx= function() {
        this.sx=this.w*this.direcao*2;
    }
}

function desenha(){  
    try {
        ctx.drawImage(t.img, t.sx+t.w*t.frame, 0 ,t.w,t.h,
            t.x, t.y, t.w,t.h); 
    } 
    catch (e) {
        alert(e.toString());
    };
}

function limpa(){
    ctx.clearRect(t.x,t.y,t.w,t.h);    
}

document.addEventListener('keyup', event => {
  if (event.code === 'Space') {
     limpa();
     t.frame = t.frame==0?1:0;
     t.sobe();
     desenha();
  }
})

desenha();
