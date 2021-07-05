window.onload = function(){

    var tens = 0;
    var secs = 0;
    var appendtens = document.getElementById("tens");
    var appendsecs = document.getElementById("seconds");
    var btnstart = document.getElementById("button-start");
    var btnstop = document.getElementById("button-stop");
    var btnreset = document.getElementById("button-reset");
    var Interval;

    btnstart.onclick = function(){
        clearInterval(Interval);
        Interval = setInterval(timer, 10)

    }

    btnstop.onclick = function(){
        clearInterval(Interval);
    }

    btnreset.onclick = function(){
        tens = 0;
        secs = 0
        clearInterval(Interval);
        appendtens.innerHTML = "0" + tens;
        appendsecs.innerHTML = "0" + secs;
    }



    function timer(){
        tens++

        if(tens <=9){
            appendtens.innerHTML = "0" + tens;
        }

        if(tens > 9){
            appendtens.innerHTML = tens;
        }
        if(tens> 99)
        {
            secs++
            appendsecs.innerHTML = "0" + secs;
            tens = 0;
            appendtens.innerHTML = "0" + 0;
        }

        if(secs > 9)
        {
            appendsecs.innerHTML = secs;
        }



    }





}