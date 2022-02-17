let candy = {}

const buyChocolate = (candy) => {
        candy.type = "Milk Chocolate"
        return candy
    
}

const addFlavoring = (chocolate) => {
    chocolate.flavor = "Mint"
    return chocolate
    
}

const makeBarkMixture = (mintChocolate) => {
    if (mintChocolate.flavor === "Mint"){
        mintChocolate.mixed = true
    } else {
        mintChocolate.mixed = false
    }
    return mintChocolate
}

const bakeCandy = (bark) => {
    if (bark.mixed === true) {
        bark.baked = true
    } else {
        bark.baked = false
    }
    return bark
}

const breakBark = (bakedBark) => {
    if (bakedBark.baked === true){
        return ['Mint Chocolate Bark Piece', 'Mint Chocolate Bark Piece', 'Mint Chocolate Bark Piece', 'Mint Chocolate Bark Piece', 'Mint Chocolate Bark Piece', 'Mint Chocolate Bark Piece']
    }
}



let chocolate = buyChocolate(candy);
let mintChocolate = addFlavoring(chocolate);
let bark = makeBarkMixture(mintChocolate);
let bakedBark = bakeCandy(bark)
let barkPieces = breakBark(bakedBark)




console.log(chocolate)
console.log(mintChocolate)
console.log(bark)
console.log(bakedBark)
console.log(barkPieces)
