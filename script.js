//initial data

let square = 
{ a1:'', a2:'', a3:'',
  b1:'', b2:'', b3:'',
  c1:'', c2:'', c3:''
};

let player = '';
let warning = '';
let playing = false;
//Events
reset()

document.querySelector('.reset').addEventListener('click', reset);

document.querySelectorAll('.item').forEach( item => 
    {
        item.addEventListener('click', itemClick)
    });

//Functions
function itemClick(event)
    {
        let item = event.target.getAttribute('data-item')

        if(playing && square[item] === '')
        { square[item] = player;
            toggleplayers()
            renderSquare()      
            checkGame()
        }
    };


function reset()
    {   warning = '';
        playing = false;

        let random = Math.floor(Math.random() * 2)
        if( random == 0)
            {
                player = "X";
            } else 
                {
                    player = 'O'
                };
        
        for(let i in square)
            {  square[i] = '';

            };
        
        playing = true;

        renderInfo();
        renderSquare();
        
    };


function renderSquare()
{ for( let i  in square)
    {
        let item = document.querySelector(`div[data-item = ${i}]`);
        item.innerHTML = square[i]
    }

};

function renderInfo()
{ document.querySelector('.vez').innerHTML = player
  document.querySelector('.resultado').innerHTML = warning

};
function toggleplayers()
{
    if(player =='X')
    {
        player ='O'
    } else {
        player='X'
    }
    renderInfo()
}

function checkGame()
{
    if(checkWinner('X'))
        {   warning = 'O "X" Venceu'
            playing = false 
        } else if(checkWinner('O'))
                { warning = 'O "O" Venceu'
                playing = false
                }
          else if(isFull())
                { warning = 'Deu Empate';
                  playing = false
                 }
    renderInfo();
};

function checkWinner(player)
    { let pos =  
        ['a1,a2,a3',
         'b1,b2,b3',
         'c1,c2,c3',

         'a1,b1,c1',
         'a2,b2,c2',
         'a3,b3,c3',

         'a3,b2,c1',
         'a1,b2,c3'
        

        ];

        for( let w in pos)
            { let parray = pos[w].split(',')
                
             let haswon = parray.every((option)=>{
                    return (square[option] === player)
                })

            
                if(haswon)
                {
                    return true;
                }
            }
            return false;

    };

    function isFull()
        {
            for(let i in square)
                {
                    if (square[i] ===''){
                        return false;   }
                };

            return true;
        };