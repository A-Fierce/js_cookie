const img  = document.getElementById('cookie')
const click = document.getElementById('clicker__counter')

img.onclick = function() {
    click.textContent = Number(click.textContent) + 1
    if (click.textContent % 2 !== 0) {
        img.width += 20
        img.height += 20
    } else {
        img.width -= 20
        img.height -= 20
    }
}
