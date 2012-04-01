var Cart = function($root, title) {
  $root.on("item_deleted", function(ev, item) {
    item.$root.remove();
    this.delete(item);
  }.bind(this));
  this.$root = $root;
  this.title = title;
  this.items = [];
};

Cart.prototype = $.extend(new Object, {
  render: function() {
    var $cart = $(this.templates.cart(this));
    $cart.find(".add")
           .click(function(ev) {
             this.add(new CartItem);
           }.bind(this))
         .end()
         .find(".sum")
           .click(function(ev) {
             alert(this.sum());
           }.bind(this))
         .end()  
    return this.$root.html($cart);
  },

  add: function(item) {
    this.items.push(item);
    this.$root.find(".form-actions").before(item.$root);
    return this;
  },

  delete: function(target) {
    this.each_items(function(i, item){
      if(target == item) {
        this.delete_item_by_index(i);
        return false;
      }
    });
    return this;
  },
  
  sum: function() {
    var result = 0;
    this.each_items(function(i, item){
      if(item.price == undefined) return true;
      result += item.price; 
    });
    return result;
  },

  serialize: function() {
  },

  each_items: function(block) {
    $.each(this.items, function(i, item){
      return block.call(this, i, item);
    }.bind(this));
  },

  delete_item_by_index: function(index) {
    this.items.splice(index, 1);
  },

  templates: $.templates({
    cart:
      '<form class="form-inline">' + 
        '<fieldset class="span5 cart_items">' +
          '<legend>{{:title}}</legend>' +
          '<div class="form-actions">' +
            '<a class="btn add" href="#add">' +
              '<i class="icon-plus"></i>' +
              '入力欄を追加' +
            '</a> \r\n' +
            '<a class="btn btn-success sum" href="#sum">' +
              '<i class="icon-shopping-cart icon-white"></i>' +
              '合計' +
            '</a> \r\n' +
            '<a class="btn btn-primary save" href="#add">' +
              '<i class="icon-pencil icon-white"></i>' +
              '保存' +
            '</a>' +
          '</div>' +
        '</fieldset>' +
      '</form>'
  }).render 
});
