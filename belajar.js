const contohArray  = ['buku','pensil','penghapus','buku tulis']
contohArray[1] = 'Penggaris'
contohArray.unshift('BUKU GAMBAR') // menambahkan data di awal array
contohArray.push() // menambahkan data di akhir array
console.log(contohArray)

contohArray.forEach(element => {
    console.log(element)
});

for (let index = 0; index < contohArray.length; index++) {
    const element = contohArray[index];
    console.log(element)
}

const test = [12,4,2,2,5,3,10,11]
console.log(test.filter((x)=>x >= 9))
// ==========================================================
const numbers =[1,2,3,4,5]
const result = []

numbers.forEach(element => {
    result.push(element*2)
});
console.log(result)

const result2 = numbers.map((x)=>x*2)
console.log(result2)   
// PUSH
// POP
// SHIFT
// UNSHIFT
// FOREACH
// FIND = mencari data ( string, number, object)
// MAP = mengubah data (ARRAY)
// SOME = MENCARI / MENGECEK ( BOOLEAN )
// FILTER = MENCARI / MENGECEK ( ARRAY )
// REDUCE = MENGHITUNG ( NUMBER )

const arrayCon1 = [1,2,3,4,5,6,7,8,9,10]
const arrayCon2 = [11,12,13,14,15,16,17,18,19,20]

// let total = 0
// arrayObj.forEach(element => {
//     total += element.transaksi
// });
// console.log('hasil',total)
// console.log(arrayObj.reduce((acc,cur)=>acc+cur.transaksi,0))

const arrayObj = [
    {
        name:'budi',
        umur:12,
        transaksi : 2000,
    },
    {
        name:'anto',
        umur:15,
        transaksi : 2000,
    },
    {
        name:'doni',
        umur:20,
        transaksi : 2000,
    }
]
arrayCon1.filter((x)=>x==2)
arrayCon1.map((x)=>x*2)
arrayCon1.some((x)=>x==2)
arrayCon1.find((x)=>x==2)
arrayCon1.reduce((acc,cur)=>acc+cur,0)
console.log(arrayObj.filter((x) => x.umur >= 15).map((i)=>({name:i.name})))

const arr1 = [[1,3,4,5],
              [6,7,8,9]]

console.log(arr1[0][0], arr1[0][1], arr1[1][1])
// const arr2 = [6,7,8,9,10]
// const arr33 = [11,12,13,14,15]
// const arr3 = [...arr1,...arr2,...arr33]



// console.log(arr1.some((x)=>x==2))
// console.log(arr1.map((x)=> x * 2))
// // console.log(arrayObj.map((x)=>({name:x.name})))




// const Pesanan = [
//     {
//         id : 1,
//         nama_transaksi : 'BUKU',
//         transaksi : 10000
//     },
//     {
//         id : 2,
//         nama_transaksi : 'PENGHAPUS',
//         transaksi : 10000
//     },
//     {
//         id : 3,
//         nama_transaksi : 'PENSIL',
//         transaksi : 10000
//     }
// ]
// console.log(Pesanan.filter((x) => x.id !== 2))

// Pesanan.push({
//     id : 4,
//     nama_transaksi : 'PENSIL',
//     transaksi : 10000
// })
// console.log(Pesanan)

// console.log()
// API [DELETE PESANAN] /api/pesanana/:id

const test1 = ['Mangga','Jeruk','Anggur','Melon']

const testBuah = [...test1]
testBuah.push('Semangka')

console.log({test1,testBuah})