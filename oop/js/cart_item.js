var CartItem = function(price) {
  this.price = price;
  this.name  = "";
  this.$root = $(this.templates.container(this));
  this.to_edit();
};

CartItem.prototype = $.extend(new Object, {
  to_view: function() {
    var $view = $(this.templates.view(this));
    $view.click(function(ev, target){
      this.to_edit();
    }.bind(this));
    return this.$root.html($view);
  },

  to_edit: function() {
    var $edit = $(this.templates.edit(this));
    $edit.find('input[type="text"]')
           .focusout(function() {
             this.update_by_$edit($edit);
             if(this.is_valid()) this.to_view();
           }.bind(this))
         .end()
         .find('input[type="button"]')
           .click(function(ev) {
             $(ev.target).trigger("item_deleted", [this]);
           }.bind(this));
    return this.$root.html($edit);
  },
  
  update_by_$edit: function($edit) {
    this.name  = $edit.find(".item_name").val();
    var price  = $edit.find(".item_price").val();
    this.price = price.length == 0 || isNaN(price - 0) ? undefined : price - 0;
  },

  is_valid: function() {
    return this.name.length != 0 
           && this.price != undefined
  },

  templates: $.templates({
    container:
      '<div class="control-group cart_item">' +
      '</div>',
    view:
      '<div class="controls">' +
        '<p class="inputting span3 item_name">{{:name}}</p>' +
        '<p class="item_price">{{:price}}</p>' +
      '</div>',
    edit:
      '<div class="controls">' +
        '<input type="text" class="span3 item_name" placeholder="項目名" value="{{:name}}">\r\n' +
        '<div class="input-append">' +
          '<input type="text" class="span1 item_price" placeholder="金額" value="{{:price}}">' +
          '<span class="add-on">円</span>' +
        '</div>\r\n' +
        '<input class="btn btn-danger" type="button" value="削除">' +
      '</div>'
  }).render 
});

