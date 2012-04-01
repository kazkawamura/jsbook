beforeEach(function() {
  this.addMatchers({
    toContainCartTitle: function(expected_title) {
      var $root = this.actual;
      return $root.find("legend").html() == expected_title;
    },
    toHavePriceValue: function(expected_price) {
      var $root = this.actual;
      return $root.find("input.item_price").val() == expected_price;
    },
    toHavePriceHtml: function(expected_price) {
      var $root = this.actual;
      return $root.find("p.item_price").html() == expected_price;
    },
    toHaveNameValue: function(expected_name) {
      var $root = this.actual;
      return $root.find("input.item_name").val() == expected_name;
    },
    toHaveNameHtml: function(expected_name) {
      var $root = this.actual;
      return $root.find("p.item_name").html() == expected_name;
    },
  })
});
