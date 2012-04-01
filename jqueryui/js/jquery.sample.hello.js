(function($) {
  $.widget("sample.hello", {
    options: {
      event: "click"
    },
    _create: function() {
      self = this;
      originalText = self.element.text();
      self.element.text("Hello " + originalText + "!");
      self.element.addClass("demo-hello");
      self.element.bind(self.options.event, self._eventCallback);
    },
    destory: function() {
      self.element.text(originalText);
      self.element.unbind(self.options.event);
    },
    _setOption: function(option, value) {
      if (option == 'event') {
        self.element.unbind(self.options.event);
        self.element.bind(value, self._eventCallback);
      } 
      $.Widget.prototype._setOption.apply(this, arguments);
    },
    _eventCallback: function() {
      self.element.animate({color: "white", backgroundColor: "Orange"}, function() {
        self._trigger("changed", null, self.element);
      });
    }
  });
})(jQuery);