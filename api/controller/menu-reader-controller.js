'use strict';
var db = require('../dbctx/firebase-context');
var helper = require('../helper/helper')

exports.get_all_eatery = function(req, res) {
    console.log("HTTP Get Eatery Name Request");
	//Attach an asynchronous callback to read the data
	db.on("child_added", snap => {
        var restName= snap.val();
        var names = [];
        restName.forEach(function(item) 
            { 
                if(helper.checkIfEateryOperating(item.Eatery.name) == true)
                {
                names.push(item.Eatery.name);
                }
            })
        console.log(names);
    });
  };

  exports.get_menu_type = function(req, res) {
    console.log("HTTP Get Menu Type Request");
    var restname = req.params.restName;
    var menutypes = [];
    db.on("child_added", snap => {
        var restaurant= snap.val();
        restaurant.forEach(function(item){
            if(item.Eatery.name==restname)
            {
                if(helper.checkIfEateryOperating(restname) == true)
                {
                    for (var i = 0; i < item.Eatery.Menus.length; i++) {
                        var type = item.Eatery.Menus[i].Menu.Type;
                        if(helper.checkMenuTypeAvailability(restname,type) == true)
                        {
                            menutypes.push(type);
                        }
                    }
                }
            }
        });
        console.log(menutypes);
    });
  };

  exports.get_operating_hours = function(req, res) {
    console.log("HTTP Get Menu Type Request");
    var restname = req.params.restName;
    db.on("child_added", snap => {
        var restaurant= snap.val();
        restaurant.forEach(function(item){
            if(item.Eatery.name==restname)
            {
                console.log(item.Eatery.schedule.StartTime,'-',item.Eatery.schedule.EndTime)
            }
        });
    });
  };

  exports.get_item_by_type = function(req, res) {
    console.log("HTTP Get Item by Type Request");
    var restname = req.params.restName;
    var reqtype = req.params.type;
    var menutypes = [];
    db.on("child_added", snap => {
        var restaurant= snap.val();
        restaurant.forEach(function(item){
            if(item.Eatery.name==restname)
            {
                if(helper.checkIfEateryOperating(restname) == true)
                {
                    for (var i = 0; i < item.Eatery.Menus.length; i++) {
                        var type = item.Eatery.Menus[i].Menu.Type;
                        if(type==reqtype)
                        {
                            for(var j=0;j<item.Eatery.Menus[i].Menu.Items.length;j++)
                            {
                                var dict = {};
                                dict['name'] = item.Eatery.Menus[i].Menu.Items[j].name;
                                dict['price'] = item.Eatery.Menus[i].Menu.Items[j].price;
                                console.log(dict);
                            }
                        }
                    }
                }
            }
        });
    });
  };