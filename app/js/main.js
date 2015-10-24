'use strict';

var $ = require('jquery');

// 使用 Amaze UI 源码中的模块
//var addToHome = require('../../node_modules/amazeui/js/ui.add2home.js');
//$(function() {
//  addToHome();
//});

// 使用 NPM 中的模块
var detector = require('detector');

$(function() {
  $('#browser-info').append('浏览器信息：<pre>' +
    JSON.stringify(detector.browser) +
    '</pre>'
  );

  console.log('Hello World. This is Amaze UI Starter Kit.');
});



$(document).ready(function() {
  $(window).load(function(){
    var htmlobj = $.ajax({url:"modules/about-us/investment-religion.html",async:false});
    $("body").html(htmlobj.responseText);
  });

  $("#about-us-investment-religion").click(function(){
    var htmlobj = $.ajax({url:"modules/about-us/investment-religion.html",async:false});
    $("body").html(htmlobj.responseText);
  });

  $("#about-us-company-info").click(function(){
    var htmlobj = $.ajax({url:"modules/about-us/company-info.html",async:false});
    $("body").html(htmlobj.responseText);
  });

  //$('.am-panel-title').collapse({
  //  parent: false
  //})


})

