var btn = document.createElement('button');
console.log(btn);
btn.innerText = "thêm ghế";
btn.onclick = function()
{
    var room = document.createElement('div');
    room.innerText = 'goc';
    document.body.appendChild(room);
}
// document.body.appendChild(btn);