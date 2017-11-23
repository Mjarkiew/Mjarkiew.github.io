function ClickF() 
{
    //alert('Clicked within document\'s bounds');
}
 
var Image = document.querySelector('img');

function Rotate() 
{
    var ImageClass = Image.className;

    switch(ImageClass)
    {
        case "rotate0":
        {
            Image.setAttribute('class', 'rotate90');
            break;
        }
        case "rotate90":
        {
            Image.setAttribute('class', 'rotate180');
            break;
        }
        case "rotate180":
        {
            Image.setAttribute('class', 'rotate270');
            break;
        }
        default:
        {
            Image.setAttribute('class', 'rotate0');
        }
    }
}

Image.onclick = Rotate;

document.querySelector('html').onclick = ClickF;

var UserButton = document.querySelector('#userchange');
var Heading = document.querySelector('h1');

function SetUserName()
{
    var Name = prompt('Enter user name.');
    localStorage.setItem('name', Name);
    Heading.textContent = 'Greetings ' + Name;
}

if(!localStorage.getItem('name'))
{
    SetUserName();
}
else
{
    var StoredName = localStorage.getItem('name');
    Heading.textContent = 'Greetings ' + StoredName;
}

UserButton.onclick = SetUserName;