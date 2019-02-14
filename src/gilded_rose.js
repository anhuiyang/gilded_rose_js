class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    this.items.forEach(function(item){
      switch(item.name){
        case 'Sulfuras, Hand of Ragnaros':
          break;
        case 'Aged Brie':
        item.sellIn -= 1
        if (item.sellIn > -1){
          item.quality += 1;
        } else {
          item.quality += 2;
        }
        if (item.quality >= 50){
          item.quality = 50
        }
          break;
        case 'Backstage passes to a TAFKAL80ETC concert':
        item.sellIn -= 1
        if (item.sellIn < 0){
          item.quality = 0
        } else if(item.sellIn <= 5){
          item.quality += 3
        } else if(item.sellIn <= 10){
          item.quality += 2
        } else{
          item.quality +=1
        }
        if (item.quality >= 50){
          item.quality = 50
        }
          break;
        default:
        item.sellIn -= 1
        if (item.sellIn < 0){
          item.quality -= 2
        }else{
          item.quality -= 1
        }
        if(item.quality < 0){
          item.quality = 0
        }
      }
      // if (item.name == 'Sulfuras, Hand of Ragnaros'){
      // } else if(item.name == 'Aged Brie'){
      //   item.sellIn -= 1
      //   if (item.sellIn > -1){
      //     item.quality += 1;
      //     if (item.quality >= 50){
      //       item.quality = 50
      //     }
      //   } else {
      //     item.quality += 2;
      //     if (item.quality >= 50){
      //       item.quality = 50
      //     }
      //   }
      // } else if(item.name ==)

      // if (item.name != 'Aged Brie' && item.name != 'Backstage passes to a TAFKAL80ETC concert') {
      //   if (item.quality > 0) {
      //     if (item.name != 'Sulfuras, Hand of Ragnaros') {
      //       item.quality = item.quality - 1;
      //     }
      //   }
      // } else {
      //   if (item.quality < 50) {
      //     item.quality = item.quality + 1;
      //     if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
      //       if (item.sellIn < 11) {
      //         if (item.quality < 50) {
      //           item.quality = item.quality + 1;
      //         }
      //       }
      //       if (item.sellIn < 6) {
      //         if (item.quality < 50) {
      //           item.quality = item.quality + 1;
      //         }
      //       }
      //     }
      //   }
      // }
      // if (item.name != 'Sulfuras, Hand of Ragnaros') {
      //   item.sellIn = item.sellIn - 1;
      // }
      // if (item.sellIn < 0) {
      //   if (item.name != 'Aged Brie') {
      //     if (item.name != 'Backstage passes to a TAFKAL80ETC concert') {
      //       if (item.quality > 0) {
      //         if (item.name != 'Sulfuras, Hand of Ragnaros') {
      //           item.quality = item.quality - 1;
      //         }
      //       }
      //     } else {
      //       item.quality = item.quality - item.quality;
      //     }
      //   } else {
      //     if (item.quality < 50) {
      //       item.quality = item.quality + 1;
      //     }
      //   }
      // }
    })
    return this.items;
  }
}
module.exports = {
  Item,
  Shop
}
