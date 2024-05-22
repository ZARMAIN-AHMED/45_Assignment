//They think of something you could store in a TypeScript Object. 
//Write a program that creates Objects containing these items.



interface item {
    name:string
    type: number
}

const book : item = {
    name: "Essential typescript",
    type: 450

}

const apple :item = {
    name: 'apple',
    type: 200,
}
console.log(`book name: ${book.name}, price: $${book.type}`)
console.log(`apple name: ${apple.name}, price: $${apple.type}`)

