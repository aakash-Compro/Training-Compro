(()=>{
    let N=3;
    let player=1;

    let winner=null;

    let row=Array(N).fill(0);
    let col=Array(N).fill(0);
    let count=0;
    let dig=0;
    let antidig=0;

    const board=document.getElementById('board');
    const winnerText=document.getElementById('winner');

    function createBoard(rows,cols){
        for(let i=0;i<rows;i++){
            const row=document.createElement('div');
            row.classList.add('row');
            for(let j=0;j<cols;j++){
                const col=document.createElement('div');
                col.classList.add('col');
                col.setAttribute('r',i);
                col.setAttribute('c',j);
                row.appendChild(col);   
            }
            board.appendChild(row);
        }
    }
    createBoard(row.length,col.length);

    const checkWinner=(r,c,currplayer)=>{
        count++;
        row[r]+=currplayer;
        col[c]+=currplayer;
        if(r+c==2){
            antidig+=currplayer;
        }
        if(r==c){
            dig+=currplayer;
        }
        if([row[r],col[c],dig,antidig].includes(N)){
            winner="Player A";
            winnerText.innerText=winner;
        }
        else if([row[r],col[c],dig,antidig].includes(-N)){
            winner="Player B";
            winnerText.innerText=winner;
        }
        if(count>=9){
            winner="Draw";
            winnerText.innerText=winner;
        }

    }

    const changePlayer=()=>{
        player=player===1?-1:1;
    }

    board.addEventListener('click',(e)=>{
        const target=e.target;
        if(!winner && !target.innerText){
            target.innerText=(player===1?'X':'O');
            const r=Number(target.getAttribute('r'));
            const c=Number(target.getAttribute('c'));
            checkWinner(r,c,player);
            changePlayer();
        }
    })

})()