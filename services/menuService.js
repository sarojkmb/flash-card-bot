'use strict'

exports.getMenuService = function(){
    console.log('getMenuService menthof invoked.');
    var menuString = 'Topic1, Topic2, Topic3, Topic4';
    return JSON.stringify(menuString);
};