'use strict';
var db = require('../dbctx/firebase-context');

exports.get_all_eatery = function(req, res) {
    console.log("HTTP Get Eatery Name Request");
	//Attach an asynchronous callback to read the data
	db.on("child_added", snap => {
        var restName= snap.val();
        var names = [];
        restName.forEach(function(item) 
            { 
                names.push(item.Eatery.name);
            })
        console.log(names);
    });
  };

  exports.get_menu_type = function(req, res) {
    //console.log("HTTP Get Menu Type Request");
    //console.log(req.params.restName);
    var p = req.params.restName;
    var menutypes = [];
    db.equalTo("Dell 6 Cafeteria").on("child_added", snap => {
        var restaurants= snap.val();
        console.log(restaurants);
        restaurants.forEach(function(item){
           menutypes.push(item.Eatery.Menus);
           //console.log(menutypes);
        });
        menutypes.forEach(function(x){
           console.log(x[0]);
        });
        //console.log(menutypes);
    });
  };