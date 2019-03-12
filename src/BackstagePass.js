class BackstagePass{
    update(item){
        item.sellIn -= 1
        if (item.sellIn<0){
            item.quality = 0
        } else if (item.sellIn <5){
            item.quality += 3
        } else if (item.sellIn <10){
            item.quality += 2
        } else {
            item.quality +=1
}
    }
}
module.exports = {BackstagePass}
