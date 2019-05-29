var x = 225;
var xd;
var yd = 350;
var disparou = false;
var vidas = 5;
var pontos = 0;
var nivel = 1;
var h = 30;
var r = 25;
var rm = 5
var vxo = [];
var vyo = [];
var vt = [];
var qtObjetos = 4;
var vxb = [];
var vyb = [];
var vtb = [];
var qtBonus = 1;
var bp = 1000;
var contTest = 2;
var vel = 2;
function setup()
{
  createCanvas(450, 400);

   for (var i = 0; i < qtObjetos; i++)
    {
      vxo[i] = random(0, 420);
      vyo[i] = random(0,370);
      vt[i] = random(30, 30);
    }
 
    for(var ii = 0; ii < qtBonus; ii++)
    {
      vxb[ii] = random(0, 420);
      vyb[ii] = random(0,370);
      vtb[ii] = random(20, 20);
    }
}

function draw()
{
  background(0);
  fill(255);
  textSize(20);
  text("Vidas: " + vidas, 20, 30);
  text("Pontos: " + pontos, 20, 50);
  text("Nível " + nivel, 360, 30);
  
  if(pontos > bp)
  {
    if(nivel <= 5)
    {
      nivel = nivel + 1;
      if(nivel == contTest)
      {
        vel = vel + 1;
        contTest++;
      }
      bp = bp + 1000;
    }
  }
  
  for(var i = 0; i < qtObjetos; i++)
  {
    rect(vxo[i],vyo[i], vt[i], vt[i]);
    vyo[i] = vyo[i] + vel;
  if(vyo[i] > width)
    {
      vyo[i] = -random(400);
      vxo[i] = random(400);
    }
  }
    
  for(var ii = 0; ii < qtBonus; ii++)
  {
    fill(25, 75, 200);
    ellipse(vxb[ii], vyb[ii], vtb[ii], vtb[ii])
    vyb[ii] = vyb[ii] + 2;
      if(vyb[ii] > width)
      {
        vyb[ii] = -random(400);
        vxb[ii] = random(400);
      }
      if(dist(vxb[ii], vyb[ii], x, 350) < r + 10)
      {
        vxb[ii] = -random(400);
        vyb[ii] = random(400)
        vidas = vidas + 1;
        if (vidas > 5)
        {
          vidas = 5;
          pontos = pontos + 100;
        }
      }
  }
    if(x < r)
    {
      x = r;
    }
    if(x > 425)
    {
      x = 425;
    }
  
  if (keyIsDown(LEFT_ARROW))
    x = x - 3;
  if (keyIsDown(RIGHT_ARROW))
    x = x + 3;
  fill(150);
  ellipse(x, 350, 50, 50);
  
  for(i = 0; i < qtObjetos; i++)
  {
    if(dist(vxo[i] + h/2, vyo[i] + h/2, x, 350) < h/2 + r)
    {
      x = 225;
      y = 400;
       
      if(vidas <= 5 && vidas > 1)
      {
        vidas = vidas - 1;
      }
      else
      {
        vidas = 5;
        nivel = 1;
        pontos = 0;
        vel = 2;
      }
      if(pontos > 0)
      {
        pontos = pontos - 20;
      }
      vyo[i] = -random(400)
      vxo[i] = random(400);
    }
  }
  if (keyIsDown(32) && disparou == false)
  {
    disparou = true;
    yd = 350;
    xd = x;
  }
  if(disparou)
  {
    ellipse(xd, yd, 10, 10)
      yd = yd - 10;
    if(yd < 0)
    {
      disparou = false;
    }
    
  for(i = 0; i < qtObjetos ;i++)
    {
      if((dist(vxo[i] + h/2, vyo[i], xd, yd) < h/2 + rm) && disparou)
      {
        disparou = false;
        vyo[i] = -random(400);
        vxo[i] = random(400);
        if (pontos < 5000 )
        {
          pontos = pontos + 50;
        }
        if(pontos >= 5000)
        {
          pontos = 5000;
        }
      }
    }
  }
}
