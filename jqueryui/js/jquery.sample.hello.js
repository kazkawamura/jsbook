(function($) {
  $.widget("sample.hello", {
    options: {
      event: "click"
    },
    _create: function() {
      self = this;
      originalText = self.element.text();
      originalStyle = self.element.attr('style');
      self.element.addClass("demo-hello")
          .text("Hello " + originalText + "!");
      self.element.bind(self.options.event, self._eventCallback);
    },
    destory: function() {
      self.element.removeClass("demo-hello")
          .removeAttr('style').text(originalText);
      if (originalStyle != null) {
        self.element.attr('style', originalStyle);
      }
      self.element.off(self.options.event);
    },
    _setOption: function(option, value) {
      if (option == 'event') {
        self.element.off(self.options.event);
        self.element.on(value, self._eventCallback);
      } 
      $.Widget.prototype._setOption.apply(this, arguments);
    },
    _eventCallback: function(eventObject) {
      self.element.animate({color: "white", backgroundColor: "Orange"}, function() {
        self._trigger("changed", eventObject, {target: self.element});
      });
    }
  });
})(jQuery);