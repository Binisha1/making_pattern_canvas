/**@type{HTMLCanvasElement}*/
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
let hue = 0;
let particleArray = [];

window.addEventListener('resize',()=>{
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
})

const mouse = {
    x: undefined,
    y: undefined
}

window.addEventListener('click', (event)=>{
    mouse.x = event.x;
    mouse.y = event.y; 
    for(let i = 0; i<5; i++){
        particleArray.push(new Particle);
    }
})
window.addEventListener('mousemove', (event)=>{
    mouse.x = event.x;
    mouse.y = event.y; 
    for(let i = 0; i<5; i++){
        particleArray.push(new Particle);
    }
})

class Particle{
    constructor(){
        this.x = mouse.x;
        this.y = mouse.y;
        this.size = Math.random() * 5;
        this.color = 'hsl(' + hue + ', 50%, 50%)';
        this.speedX = Math.random() * 3-1.5;
        this.speedY = Math.random()* 3-1.5;
    }
    update(){
        this.x += this.speedX;
        this.y += this.speedY;
        if(this.size>0.1) this.size-= 0.1;
    }
    draw(){
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function handleParticle(){
    for(let i = 0; i<particleArray.length; i++){
        particleArray[i].update();
        particleArray[i].draw();

        if(particleArray[i].size < 0.1){
            particleArray.splice(i,1);
        }
    }

}

function animate(){
    ctx.clearRect(0, 0, canvas.width,canvas.height);
    handleParticle();
    hue++;
    requestAnimationFrame(animate);
}
animate();