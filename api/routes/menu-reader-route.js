'use strict';
module.exports = function(app) {
  var todoList = require('../controller/menu-reader-controller');

  // todoList Routes
app.route('/Eatery')
.get(todoList.get_all_eatery);
  
app.route('/Eatery/:restName')
.get(todoList.get_menu_type);  

};