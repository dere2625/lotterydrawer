jQuery(function(){
    var ceiling = 99;
    var floor = 1;

    var intervals = [];
    var sequence = 0;
    //start draw
    $("#generate").click(function(){
        const children = $(".numberscontainer").children();
        var randomizeTimer = null;

        for(let i=0; i< children.length; i++){
            randomizeTimer = setInterval(() => {
                randomize(children[i]);
            }, 90);
            intervals.push(randomizeTimer);
            // console.log(intervals);
        }

        setInterval(()=>{
            if(sequence>=intervals.length){
                clearAllIntervals();
            }
            clearInterval(intervals[sequence]);
            sequence++;
        },1500);
        
    })

    function randomize(item){
        if(item != undefined && item.tagName === "DIV"){
            item.textContent = getRandomNumber();
        }
        
    }

    function getRandomNumber(){
        let flr = Math.floor(Math.random() * (ceiling - floor) + floor)
        if(flr < floor){
            getRandomNumber();
        }
        return flr;
    }

    function clearAllIntervals(){
        const interval_id = window.setInterval(function(){}, Number.MAX_SAFE_INTEGER);
        for (let i = 1; i < interval_id; i++) {
            window.clearInterval(i);
        }
    }

    //stop draw
    $("#reset").click(function(){
        clearAllIntervals();
        $(".number").html('-');
    })
})