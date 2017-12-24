(function($){
    'use strict';
    let option = {
        showRowNum: false,
        showPager: true,
        maxRows: 10
    };
    if(typeof $.fn.tpGrid == "undefined"){
        $.fn.tpGrid = opt => {for(var attr in opt){option[attr] = opt[attr]};console.log(option)};
    }


}(jQuery))