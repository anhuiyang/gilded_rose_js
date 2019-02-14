var {Shop, Item} = require('../src/gilded_rose.js');
describe("Gilded Rose", function() {

  it("should Sulfuras, Hand of Ragnaros, null, 80", function() {
    const gildedRose = new Shop([ new Item("Sulfuras, Hand of Ragnaros", null, 80) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual("Sulfuras, Hand of Ragnaros");
    expect(items[0].sellIn).toEqual(null);
    expect(items[0].quality).toEqual(80);
  });
  it("should Aged Brie, 10, 25", function() {
    const gildedRose = new Shop([ new Item("Aged Brie", 10, 25) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual("Aged Brie");
    expect(items[0].sellIn).toEqual(9);
    expect(items[0].quality).toEqual(26);
  });
  it("should Aged Brie, 0, 25", function() {
    const gildedRose = new Shop([ new Item("Aged Brie", 0, 25) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual("Aged Brie");
    expect(items[0].sellIn).toEqual(-1);
    expect(items[0].quality).toEqual(27);
  });
  it("should Aged Brie, 0, 49", function() {
    const gildedRose = new Shop([ new Item("Aged Brie", 0, 49) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual("Aged Brie");
    expect(items[0].sellIn).toEqual(-1);
    expect(items[0].quality).toEqual(50);
  });
  it("Backstage passes to a TAFKAL80ETC concert, 0, 49", function() {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 0, 49) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).toEqual(-1);
    expect(items[0].quality).toEqual(0);
  });
  it("Backstage passes to a TAFKAL80ETC concert, 7, 25", function() {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 7, 25) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).toEqual(6);
    expect(items[0].quality).toEqual(27);
  });
  it("Backstage passes to a TAFKAL80ETC concert, 3, 25", function() {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 3, 25) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).toEqual(2);
    expect(items[0].quality).toEqual(28);
  });
  it("Backstage passes to a TAFKAL80ETC concert, 3, 48", function() {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 3, 48) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).toEqual(2);
    expect(items[0].quality).toEqual(50);
  });
  it("should foo, 0, 0", function() {
    const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual("foo");
    expect(items[0].sellIn).toEqual(-1);
    expect(items[0].quality).toEqual(0);
  });
  it("should foo, 5, 25", function() {
    const gildedRose = new Shop([ new Item("foo", 5, 25) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual("foo");
    expect(items[0].sellIn).toEqual(4);
    expect(items[0].quality).toEqual(24);
  });
  it("should foo, 0, 25", function() {
    const gildedRose = new Shop([ new Item("foo", 0, 25) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual("foo");
    expect(items[0].sellIn).toEqual(-1);
    expect(items[0].quality).toEqual(23);
  });
  it("should Conjured, 0, 0", function() {
    const gildedRose = new Shop([ new Item("Conjured", 0, 0)])
    const item = gildedRose.updateQuality();
    expect(item[0].name).toEqual("Conjured")
    expect(item[0].sellIn).toEqual(-1)
    expect(item[0].quality).toEqual(0)
  })
  it("should Conjured, 5, 25", function() {
    const gildedRose = new Shop([ new Item("Conjured", 5, 25)])
    const item = gildedRose.updateQuality();
    expect(item[0].name).toEqual("Conjured")
    expect(item[0].sellIn).toEqual(4)
    expect(item[0].quality).toEqual(23)
  })
  it("should Conjured, 0, 25", function() {
    const gildedRose = new Shop([ new Item("Conjured", 0, 25)])
    const item = gildedRose.updateQuality();
    expect(item[0].name).toEqual("Conjured")
    expect(item[0].sellIn).toEqual(-1)
    expect(item[0].quality).toEqual(21)
  })
});
