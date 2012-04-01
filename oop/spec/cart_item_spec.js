describe("CartItem", function() {
  var item;

  beforeEach(function() {
    item = new CartItem(10);
  });

  it("CartItemが描画できること", function() {
    expect(item.$root).toHaveClass("cart_item");
  });

  it("#build_$itemが編集モードであること", function() {
    expect(item.$root).toContain("input");
  });

  it("編集モードが金額入力欄を持つこと", function() {
    expect(item.$root).toContain("input.item_price");
  });

  it("編集モードが項目入力欄を持つこと", function() {
    expect(item.$root).toContain("input.item_name");
  });
  
  it("表示モードが金額表示欄を持つこと", function() {
    expect(item.to_view()).toContain("p.item_price");
  });

  it("表示モードが項目表示欄を持つこと", function() {
    expect(item.to_view()).toContain("p.item_name");
  });

  it("項目入力欄に状態が反映されていること", function() {
    item.name = "かまぼこ";
    expect(item.to_edit()).toHaveNameValue("かまぼこ");
    expect(item.to_view()).toHaveNameHtml("かまぼこ");
  });

  it("金額入力欄に状態が反映されていること", function() {
    item.price = 20;
    expect(item.to_edit()).toHavePriceValue(20);
    expect(item.to_view()).toHavePriceHtml("20");
  });
});
