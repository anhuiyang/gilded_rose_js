const {AgeBrie} = require('./AgeBrie');
const {Conjured} = require('./Conjured');
const {BackstagePass} = require('./BackstagePass');
const {Normal} = require('./Normal');

class Shop {
    constructor(items=[]){
        this.items = items;
        this.qualityMax = 50;
        this.qualityMin = 0;
    }
    
    qualityAdjust(item){
        if (item.quality > this.qualityMax){
            item.quality = this.qualityMax
        } else if (item.quality<this.qualityMin){
            item.quality = this.qualityMin
        }
    }
    updateQuality(ageBrie = new AgeBrie, conjured = new Conjured,
        backstagePass = new BackstagePass, normal = new Normal) {
            const THIS = this;
            this.items.forEach((item) => {
            switch (item.name) {
                case 'Sulfuras, Hand of Ragnaros':
                return THIS.items;
                case 'Aged Brie':
                ageBrie.update(item);
                break;
                case 'Conjured':
                conjured.update(item);
                break;
                case 'Backstage passes to a TAFKAL80ETC concert':
                backstagePass.update(item);
                break;
                default:
                normal.update(item);
                break
                }
                THIS.qualityAdjust(item)
            })
        return this.items;
    }
}
module.exports = {Shop};
