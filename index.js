function redirect()
{
    let gameName = document.getElementById("game_name").value;
    
    switch (gameName)
    {
        case 'PUBG':
            location.href = 'PUBG.html';
            break;
        case 'pubg':
            location.href = 'PUBG.html';
            break;
        case 'cyberpunk 2077':
            location.href = 'cyberpunk 2077.html';
            break;
        case 'CYBERPUNK 2077':
            location.href = 'cyberpunk 2077.html';
            break;
        case 'valorant':
            location.href = 'Valorant.html';
            break;
        case 'VALORANT':
            location.href = 'Valorant.html';
            break;
        case 'watchdogs':
            location.href = 'watchdogs.html';
            break;
        case 'WATCHDOGS':
            location.href = 'watchdogs.html';
            break;
        case 'it takes two':
            location.href = 'it takes two.html';
            break;
        case 'IT TAKES TWO':
            location.href = 'it takes two.html';
            break;
        default:
            location.href = '404.html';
            break;

    }
}
function goBack()
{
    window.history.back();
}

function PUBG()
{
    location.href = 'PUBG.html';
}

function VALORANT()
{
    location.href = 'Valorant.html';
}

function CYBERPUNK_2077()
{
    location.href = 'cyberpunk 2077.html';
}

function WATCHDOGS()
{
    location.href = 'watchdogs.html';
}

function IT_TAKES_TWO()
{
    location.href = 'it takes two.html';
}