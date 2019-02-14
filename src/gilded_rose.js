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
          case 'Conjured':
          item.sellIn -= 1
          if (item.sellIn < 0){
            item.quality -= 4
          }else{
            item.quality -= 2
          }
          if(item.quality < 0){
            item.quality = 0
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
    })
    return this.items;
  }
}
module.exports = {
  Item,
  Shop
}
