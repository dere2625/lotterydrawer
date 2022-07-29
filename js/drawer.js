jQuery(function(){
    var ceiling = 99;
    var floor = 1;
    //start draw
    $("#generate").click(function(){
        const children = $(".numberscontainer").children();
        var randomizeTimer = null;

        for(let i=0; i< children.length; i++){
            randomizeTimer = setInterval(() => {
                randomize(children[i]);
            }, 90);
        }

        
    })

    function randomize(item){
        console.log("Inside randomize");
        if(item != undefined && item.tagName === "DIV"){
            console.log("Inside the condition");
            item.textContent = getRandomNumber();
        }
        
    }

    function getRandomNumber(){
        console.log('Inside randomizer');
        let flr = Math.floor(Math.random() * (ceiling - floor) + floor)
        if(flr < floor){
            getRandomNumber();
        }
        return flr;
    }

    //stop draw
    $("#reset").click(function(){
        const interval_id = window.setInterval(function(){}, Number.MAX_SAFE_INTEGER);
        for (let i = 1; i < interval_id; i++) {
            window.clearInterval(i);
        }
    })
})