/**
 * Created by DethGhost on 14.12.2016.
 */
function animate() {
    var back = document.getElementById('back');
    var front = document.getElementById('front');
    var right = document.getElementById('right');

    right.className += ' go';
    back.className += ' go';
    setTimeout(function () {
        front.className += ' go';
    }, 200);
}