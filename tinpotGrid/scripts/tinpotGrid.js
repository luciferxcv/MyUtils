(function($){
    'use strict';
    let dom;
    let option = {
        showRowNum: false,
        showPager: true,
        maxRows: 10
    };

    if(typeof $.fn.tpGrid == "undefined"){
        $.fn.tpGrid = tpGrid;
    }

    function reload(){
        console.log('reload');
    }

    function tpGrid(opt){
        dom = this;
        if(typeof opt == "string")
            eval(opt + "()");
        else{
            for(let attr in opt){
                option[attr] = opt[attr]
            }
            console.log(option);
        }
    }
}(jQuery))