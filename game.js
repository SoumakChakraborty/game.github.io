let opt=["stone","paper","scissor"];
let option=document.querySelector("#option");
let player=document.querySelector("#player-score p");
let computer=document.querySelector("#computer-score p");
let game=document.querySelector("#Restart");
let player_score=0,computer_score=0;
let body=document.querySelectorAll('body');
let win=document.querySelectorAll('.winner');
let d=document.createElement("p");
let msg=document.createElement("p");
option.addEventListener("click",(e)=>
{
    let comp_opt=Math.round((Math.random()*10)%3);
    if(opt[comp_opt]=="stone"&&e.target.id=="sci")
    {
        win[0].innerHTML="";
        computer_score++;
        computer.textContent="Computer score:"+computer_score;
        let a=document.createElement("a");
        let i=document.createElement("i");
        i.className="fas fa-hand-rock";
        d.textContent="Computer's turn";
        msg.textContent="Computer gets a point";
        a.appendChild(i);
        d.style.fontFamily="Jura";
        d.style.textAlign="center";
        msg.style.fontFamily="Jura";
        msg.style.textAlign="center";
        body[0].classList.add('bod');
        win[0].classList.add('winner-show');
        win[0].appendChild(d);
        win[0].appendChild(a);
        win[0].appendChild(msg);
    }
    else if(opt[comp_opt]=="scissor"&&e.target.id=="sto")
    {
        win[0].innerHTML="";
        player_score++;
        player.textContent="Player score:"+player_score;
        let a=document.createElement("a");
        let i=document.createElement("i");
        i.className="fas fa-hand-scissors";
        d.textContent="Computer's turn";
        msg.textContent="Player gets a point";
        a.appendChild(i);
        d.style.fontFamily="Jura";
        d.style.textAlign="center";
        msg.style.fontFamily="Jura";
        msg.style.textAlign="center";
        body[0].classList.add('bod');
        win[0].classList.add('winner-show');
        win[0].appendChild(d);
        win[0].appendChild(a);
        win[0].appendChild(msg);
    }
    else if(opt[comp_opt]=="scissor"&&e.target.id=="pap")
    {
        win[0].innerHTML="";
        computer_score++;
        computer.textContent="Computer score:"+computer_score;
        let a=document.createElement("a");
        let i=document.createElement("i");
        i.className="fas fa-hand-scissors";
        d.textContent="Computer's turn";
        msg.textContent="Computer gets a point";
        a.appendChild(i);
        d.style.fontFamily="Jura";
        d.style.textAlign="center";
        msg.style.fontFamily="Jura";
        msg.style.textAlign="center";
        body[0].classList.add('bod');
        win[0].classList.add('winner-show');
        win[0].appendChild(d);
        win[0].appendChild(a);
        win[0].appendChild(msg);
    }
    else if(opt[comp_opt]=="paper"&&e.target.id=="sci")
    {
        win[0].innerHTML="";
        player_score++;
        player.textContent="Player score:"+player_score;
        let a=document.createElement("a");
        let i=document.createElement("i");
        i.className="fas fa-hand-paper";
        d.textContent="Computer's turn";
        msg.textContent="Player gets a point";
        a.appendChild(i);
        d.style.fontFamily="Jura";
        d.style.textAlign="center";
        msg.style.fontFamily="Jura";
        msg.style.textAlign="center";
        body[0].classList.add('bod');
        win[0].classList.add('winner-show');
        win[0].appendChild(d);
        win[0].appendChild(a);
        win[0].appendChild(msg);
    }
    else if(opt[comp_opt]=="paper"&&e.target.id=="sto")
    {
        win[0].innerHTML="";
        computer_score++;
        computer.textContent="Computer score:"+computer_score;
        let a=document.createElement("a");
        let i=document.createElement("i");
        i.className="fas fa-hand-paper";
        d.textContent="Computer's turn";
        msg.textContent="Computer gets a point";
        a.appendChild(i);
        d.style.fontFamily="Jura";
        d.style.textAlign="center";
        msg.style.fontFamily="Jura";
        msg.style.textAlign="center";
        body[0].classList.add('bod');
        win[0].classList.add('winner-show');
        win[0].appendChild(d);
        win[0].appendChild(a);
        win[0].appendChild(msg);
    }
    else if(opt[comp_opt]=="stone"&&e.target.id=="pap")
    {
        win[0].innerHTML="";
        player_score++;
        player.textContent="Player score:"+player_score;
        let a=document.createElement("a");
        let i=document.createElement("i");
        i.className="fas fa-hand-rock";
        d.textContent="Computer's turn";
        msg.textContent="Player gets a point";
        a.appendChild(i);
        d.style.fontFamily="Jura";
        d.style.textAlign="center";
        msg.style.fontFamily="Jura";
        msg.style.textAlign="center";
        body[0].classList.add('bod');
        win[0].classList.add('winner-show');
        win[0].appendChild(d);
        win[0].appendChild(a);
        win[0].appendChild(msg);
    }  
    else if((opt[comp_opt]=="stone"&&e.target.id=="sto"))
    {
        win[0].innerHTML="";
        let a=document.createElement("a");
        let i=document.createElement("i");
        i.className="fas fa-hand-rock";
        d.textContent="It's a draw. Computer's turn";
        a.appendChild(i);
        d.style.fontFamily="Jura";
        d.style.textAlign="center";
        body[0].classList.add('bod');
        win[0].classList.add('winner-show');
        win[0].appendChild(d);
        win[0].appendChild(a);
    }
    else if((opt[comp_opt]=="paper"&&e.target.id=="pap"))
    {
        win[0].innerHTML="";
        let a=document.createElement("a");
        let i=document.createElement("i");
        i.className="fas fa-hand-paper";
        d.textContent="It's a draw. Computer's turn";
        a.appendChild(i);
        d.style.fontFamily="Jura";
        d.style.textAlign="center";
        body[0].classList.add('bod');
        win[0].classList.add('winner-show');
        win[0].appendChild(d);
        win[0].appendChild(a);
    }
    else if((opt[comp_opt]=="scissor"&&e.target.id=="sci"))
    {
        win[0].innerHTML="";
        let a=document.createElement("a");
        let i=document.createElement("i");
        i.className="fas fa-hand-scissors";
        d.textContent="It's a draw. Computer's turn";
        a.appendChild(i);
        d.style.fontFamily="Jura";
        d.style.textAlign="center";
        body[0].classList.add('bod');
        win[0].classList.add('winner-show');
        win[0].appendChild(d);
        win[0].appendChild(a);
    }
});
game.addEventListener("click",()=>
{
   computer_score=0;
   player_score=0;
   computer.textContent="Computer score:0";
   player.textContent="Player score:0";
   win[0].classList.remove('winner-show');
   body[0].classList.remove('bod');
   win[0].innerHTML="";
});
setInterval(()=>
{
     if(computer_score==10)
     {
        win[0].innerHTML="";
         d.textContent="Computer wins";
         body[0].classList.add('bod');
         computer_score=0;
         player_score=0;
         d.style.fontFamily="Jura";
         d.style.textAlign="center";
         win[0].classList.add('winner-show');
         win[0].appendChild(d);
         computer.textContent="Computer score:0";
         player.textContent="Player score:0";
     }
     else if(player_score==10)
     {
        win[0].innerHTML="";
         d.textContent="Player wins";
         d.style.fontFamily="Jura";
         d.style.textAlign="center";
         body[0].classList.add('bod');
         win[0].classList.add('winner-show');
         win[0].appendChild(d);
         computer_score=0;
         player_score=0;
         computer.textContent="Computer score:0";
         player.textContent="Player score:0"; 
     }
},100);
body[0].addEventListener('click',(e)=>
{
        if(e.target.id=="game-body"||e.target.id=="option"||e.target.id=="score"||e.target.id=="title")
        {
          win[0].classList.remove('winner-show');
          body[0].classList.remove('bod');
          win[0].innerHTML="";
        }
}); 