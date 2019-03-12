/* eslint-disable */
let {Shop} = require('../src/Shop.js');

describe('Shop with Sulfuras', () => {
  let sulfuras = {'name': 'Sulfuras, Hand of Ragnaros',
'sellIn': null,
'quality': 80}

  it('should Sulfuras, Hand of Ragnaros, null, 80', () => {
    let gildedRose = new Shop([sulfuras]),
    items = gildedRose.updateQuality();
    expect(items[0].name).toEqual('Sulfuras, Hand of Ragnaros');
    expect(items[0].sellIn).toEqual(null);
    expect(items[0].quality).toEqual(80);
  });
});
describe('Shop with Aged Brie', () => {
  let brie1 = {'name': 'Aged Brie',
'sellIn': 10,
'quality': 25},
brie2 = {'name': 'Aged Brie',
'sellIn': 0,
'quality': 25},
brie3 = {'name': 'Aged Brie',
'sellIn': 0,
'quality': 49};

  it('should Aged Brie, 10, 25', () => {
    let gildedRose = new Shop([brie1]),
    items = gildedRose.updateQuality();

    expect(items[0].name).toEqual('Aged Brie');
    expect(items[0].sellIn).toEqual(9);
    expect(items[0].quality).toEqual(26);
  });
  it('should Aged Brie, 0, 25', () => {
    let gildedRose = new Shop([brie2]),
    items = gildedRose.updateQuality();

    expect(items[0].name).toEqual('Aged Brie');
    expect(items[0].sellIn).toEqual(-1);
    expect(items[0].quality).toEqual(27);
  });
  it('should Aged Brie, 0, 49', () => {
    let gildedRose = new Shop([brie3]),
    items = gildedRose.updateQuality();

    expect(items[0].name).toEqual('Aged Brie');
    expect(items[0].sellIn).toEqual(-1);
    expect(items[0].quality).toEqual(50);
  });
});
describe('Shop with Backstage passes', () => {
  let pass1 = {'name': 'Backstage passes to a TAFKAL80ETC concert',
'sellIn': 0,
'quality': 49},
pass2 = {'name': 'Backstage passes to a TAFKAL80ETC concert',
'sellIn': 7,
'quality': 25},
pass3 = {'name': 'Backstage passes to a TAFKAL80ETC concert',
'sellIn': 3,
'quality': 25},
pass4 = {'name': 'Backstage passes to a TAFKAL80ETC concert',
'sellIn': 3,
'quality': 48};

  it('Backstage passes to a TAFKAL80ETC concert, 0, 49', () => {
    let gildedRose = new Shop([pass1]),
    items = gildedRose.updateQuality();

    expect(items[0].name).toEqual('Backstage passes to a TAFKAL80ETC concert');
    expect(items[0].sellIn).toEqual(-1);
    expect(items[0].quality).toEqual(0);
  });
  it('Backstage passes to a TAFKAL80ETC concert, 7, 25', () => {
    let gildedRose = new Shop([pass2]),
    items = gildedRose.updateQuality();

    expect(items[0].name).toEqual('Backstage passes to a TAFKAL80ETC concert');
    expect(items[0].sellIn).toEqual(6);
    expect(items[0].quality).toEqual(27);
  });
  it('Backstage passes to a TAFKAL80ETC concert, 3, 25', () => {
    let gildedRose = new Shop([pass3]),
    items = gildedRose.updateQuality();

    expect(items[0].name).toEqual('Backstage passes to a TAFKAL80ETC concert');
    expect(items[0].sellIn).toEqual(2);
    expect(items[0].quality).toEqual(28);
  });
  it('Backstage passes to a TAFKAL80ETC concert, 3, 48', () => {
    let gildedRose = new Shop([pass4]),
    items = gildedRose.updateQuality();

    expect(items[0].name).toEqual('Backstage passes to a TAFKAL80ETC concert');
    expect(items[0].sellIn).toEqual(2);
    expect(items[0].quality).toEqual(50);
  });
});
describe('Shop with normal item', () => {
  let foo1 = {'name': 'foo',
'sellIn': 0,
'quality': 0},
foo2 = {'name': 'foo',
'sellIn': 5,
'quality': 25},
foo3 = {'name': 'foo',
'sellIn': 0,
'quality': 25};

  it('should foo, 0, 0', () => {
    let gildedRose = new Shop([foo1]),
    items = gildedRose.updateQuality();

    expect(items[0].name).toEqual('foo');
    expect(items[0].sellIn).toEqual(-1);
    expect(items[0].quality).toEqual(0);
  });
  it('should foo, 5, 25', () => {
    let gildedRose = new Shop([foo2]),
    items = gildedRose.updateQuality();

    expect(items[0].name).toEqual('foo');
    expect(items[0].sellIn).toEqual(4);
    expect(items[0].quality).toEqual(24);
  });
  it('should foo, 0, 25', () => {
    let gildedRose = new Shop([foo3]),
    items = gildedRose.updateQuality();

    expect(items[0].name).toEqual('foo');
    expect(items[0].sellIn).toEqual(-1);
    expect(items[0].quality).toEqual(23);
  });
});

describe('Shop with conjured item', () => {
  let conjured1 = {'name': 'Conjured',
'sellIn': 0,
'quality': 0},
conjured2 = {'name': 'Conjured',
'sellIn': 5,
'quality': 25},
conjured3 = {'name': 'Conjured',
'sellIn': 0,
'quality': 25};

  it('should Conjured, 0, 0', () => {
    let gildedRose = new Shop([conjured1]),
    item = gildedRose.updateQuality();

    expect(item[0].name).toEqual('Conjured')
    expect(item[0].sellIn).toEqual(-1)
    expect(item[0].quality).toEqual(0)
  })
  it('should Conjured, 5, 25', () => {
    let gildedRose = new Shop([conjured2]),
    item = gildedRose.updateQuality();

    expect(item[0].name).toEqual('Conjured')
    expect(item[0].sellIn).toEqual(4)
    expect(item[0].quality).toEqual(23)
  })
  it('should Conjured, 0, 25', () => {
    let gildedRose = new Shop([conjured3]),
    item = gildedRose.updateQuality();

    expect(item[0].name).toEqual('Conjured')
    expect(item[0].sellIn).toEqual(-1)
    expect(item[0].quality).toEqual(21)
  })
});