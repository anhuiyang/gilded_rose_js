class Normal{
    update(item){
        item.sellIn -= 1
        if (item.sellIn < 0){
            item.quality -= 2
        } else {
            item.quality -= 1
        }
    }
}
module.exports = {Normal}
