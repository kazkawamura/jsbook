describe("Cart", function() {
  var cart;

  beforeEach(function() {
    cart = new Cart(sandbox(), "見出し");
  });

  it("CartItemが追加できること", function() {
    cart.add(new CartItem);
  });

  it("CartItemを削除できること", function() {
    var item = new CartItem(10);
    cart.add(item)
        .add(new CartItem(20))
        .delete(item);
    expect(cart.items.length).toEqual(1);
  });

  it("合計値を算出できること", function() {
    cart.add(new CartItem(10))
        .add(new CartItem(20));
    expect(cart.sum()).toEqual(30);
  });

  it("描画結果がaddボタンを持つこと", function() {
    expect(cart.render()).toContain("a.add")
  });

  it("描画結果がsumボタンを持つこと", function() {
    expect(cart.render()).toContain("a.sum")
  });

  it("描画結果がsaveボタンを持つこと", function() {
    expect(cart.render()).toContain("a.save")
  });

  it("描画結果が見出しを持つこと", function() {
    expect(cart.render()).toContainCartTitle("見出し");
  });

});
