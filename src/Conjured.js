class Conjured{
    update(item){
        item.sellIn -= 1
        if (item.sellIn < 0){
            item.quality -= 4
        } else {
            item.quality -= 2
        }
    }
}
module.exports = {Conjured}
