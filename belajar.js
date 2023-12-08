// // // const contohArray  = ['buku','pensil','penghapus','buku tulis']
// // // contohArray[1] = 'Penggaris'
// // // contohArray.unshift('BUKU GAMBAR') // menambahkan data di awal array
// // // contohArray.push() // menambahkan data di akhir array
// // // console.log(contohArray)

// // // contohArray.forEach(element => {
// // //     console.log(element)
// // // });

// // // // for (let index = 0; index < contohArray.length; index++) {
// // // //     const element = contohArray[index];
// // // //     console.log(element)
// // // // }

// // // // const test = [12,4,2,2,5,3,10,11]
// // // // console.log(test.filter((x)=>x >= 9))
// // // // // ==========================================================
// // // // const numbers =[1,2,3,4,5]
// // // // const result = []

// // // // numbers.forEach(element => {
// // // //     result.push(element*2)
// // // // });
// // // // console.log(result)

// // // // const result2 = numbers.map((x)=>x*2)
// // // // console.log(result2)   
// // // // // PUSH // INSERT DATA DALAM ARRAY PADA INDEX TERAKHIR
// // // // // POP // MENGAMBIL DATA PADA INDEX TERAKHIR
// // // // // SHIFT // MENGAMBIL DATA PADA INDEX PERTAMA
// // // // // UNSHIFT // INSERT DATA DALAM ARRAY PADA INDEX PERTAMA
// // // // // FOREACH // LOOPING
// // // // // FIND = mencari data ( string, number, object)
// // // // // MAP = mengubah data (ARRAY)
// // // // // SOME = MENCARI / MENGECEK ( BOOLEAN )
// // // // // FILTER = MENCARI / MENGECEK ( ARRAY )
// // // // // REDUCE = MENGHITUNG ( NUMBER )

// // // // const arrayCon1 = [1,2,3,4,5,6,7,8,9,10]
// // // // const arrayCon2 = [11,12,13,14,15,16,17,18,19,20]


// // // // // let total = 0
// // // // // arrayObj.forEach(element => {
// // // // //     total += element.transaksi
// // // // // });
// // // // // console.log('hasil',total)
// // // // // console.log(arrayObj.reduce((acc,cur)=>acc+cur.transaksi,0))

// // // // const arrayObj = [
// // // //     {
// // // //         name:'budi',
// // // //         umur:12,
// // // //         transaksi : 2000,
// // // //     },
// // // //     {
// // // //         name:'anto',
// // // //         umur:15,
// // // //         transaksi : 2000,
// // // //     },
// // // //     {
// // // //         name:'doni',
// // // //         umur:20,
// // // //         transaksi : 2000,
// // // //     }
// // // // ]
// // // // arrayCon1.filter((x)=>x==2)
// // // // arrayCon1.map((x)=>x*2)
// // // // arrayCon1.some((x)=>x==2)
// // // // arrayCon1.find((x)=>x==2)
// // // // arrayCon1.reduce((acc,cur)=>acc+cur,0)
// // // // console.log(arrayObj.filter((x) => x.umur >= 15).map((i)=>({name:i.name})))

// // // // const arr1 = [[1,3,4,5],
// // // //               [6,7,8,9]]

// // // // console.log(arr1[0][0], arr1[0][1], arr1[1][1])
// // // // // const arr2 = [6,7,8,9,10]
// // // // // const arr33 = [11,12,13,14,15]
// // // // // const arr3 = [...arr1,...arr2,...arr33]



// // // // // console.log(arr1.some((x)=>x==2))
// // // // // console.log(arr1.map((x)=> x * 2))
// // // // // // console.log(arrayObj.map((x)=>({name:x.name})))




// // // // // const Pesanan = [
// // // // //     {
// // // // //         id : 1,
// // // // //         nama_transaksi : 'BUKU',
// // // // //         transaksi : 10000
// // // // //     },
// // // // //     {
// // // // //         id : 2,
// // // // //         nama_transaksi : 'PENGHAPUS',
// // // // //         transaksi : 10000
// // // // //     },
// // // // //     {
// // // // //         id : 3,
// // // // //         nama_transaksi : 'PENSIL',
// // // // //         transaksi : 10000
// // // // //     }
// // // // // ]
// // // // // console.log(Pesanan.filter((x) => x.id !== 2))

// // // // // Pesanan.push({
// // // // //     id : 4,
// // // // //     nama_transaksi : 'PENSIL',
// // // // //     transaksi : 10000
// // // // // })
// // // // // console.log(Pesanan)

// // // // // console.log()
// // // // // API [DELETE PESANAN] /api/pesanana/:id

// // // // const test1 = ['Mangga','Jeruk','Anggur','Melon']

// // // // const filt = test1.filter((x)=> x !== 'Mangga')

// // // // console.log(filt)
// // // // const testBuah = [...test1]
// // // // testBuah.push('Semangka')

// // // // console.log({test1,testBuah})

// // // // const number = [1,2,3,4,5,6,7]

// // // // const filMap = number.map((x)=> {
// // // //     return x * 2
// // // // })


// // // // const cekSome = test1.some((x) => x === 'Jambu')

// // // // const cekFind = test1.find((x) => x === 'Anggur')


// // // // // MAP
// // // // // FILTER = []
// // // // // FIND undefin , 
// // // // // SOME TRUE FALSE
// // // // // FOREACH
// // // // console.log(cekFind)


// // // // const arr11 = [1,2,3,4,5,6,7,8,9,10]
// // // // const arr22 = [11,12,13,14]
// // // // const arr33 = [20,21,22]
// // // // const arrConcat = arr11.concat(arr22)
// // // // const arrGabungan = [...arr11, ...arr22, ...arr33.filter((x)=> x <=20)]
// // // // console.log(arrGabungan)
// // // // console.log(arrConcat)


// // // // const obj = {
// // // //     hello : 'world',
// // // //     gender : 'male',
// // // //     alamat: 'BANDUNG'
// // // // }
// // // // console.log(obj)

// // // // OBJECT CONSTRACTOR
// // // const student = new Object() 

// // // student.name = 'BUDI'
// // // student.address = 'DEPOK'
// // // student.gender = 'MALE'
// // // student.isAvailable = true,
// // // student.age = 25
// // // student.family = {
// // //     father: 'BAMBANG',
// // //     siblings : ['DENDI']
// // // }

// // // console.log(student)

// // // // CONSTRUCTOR FUNCTION
// // // function User (name, age, gender) {
// // //     (this.name = name), (this.age = age), (this.gender = gender)
// // // }

// // // const us = new User('BUDI', 20, 'MALE')

// // // console.log(us)



// // // // OBJECT ASSIGN

// // // const obj2 = Object.assign({name:'BUDI', gender:'male'}) // create object
// // // const obj22 = Object.assign({alamat:'bogor'})

// // // const objass = Object.assign({},obj2,obj22) // merge obj atau menggabungkan obj
// // // console.log(objass)


// // // class Student {
// // //     constructor(name, address){
// // //         this.name = name
// // //         this.address = address
// // //     }
// // // }

// // // const dataStd = new Student('Budi','BOgor')
// // // console.log(dataStd)

// // const test = {
// //     name:'budi',
// //     age: 12,
// // }

// // Object.keys(test).forEach((key)=>{
// //     console.log(key, test[key])
// // })

// // console.log(test['name'], test.name)


// // const customers = [
// //     {
// //       customer_name: 'Negan', 
// //       customer_age: 45, 
// //       customer_weapon: 'Bat',
// //       customer_email: 'negan@sanctuary.com',
// //       customer_city: 'Washington' 
// //     },
// //     {
// //       customer_name: 'Daryl', 
// //       customer_age: 41, 
// //       customer_weapon: 'Crossbow',
// //       customer_email: 'daryl.dixon@kickass.com',
// //       customer_city: 'Atlanta' 
// //     },
// //     {
// //       customer_name: 'Rick', 
// //       customer_age: 45, 
// //       customer_weapon: 'Magnum 357',
// //       customer_email: 'rick@alexandria.com',
// //       customer_city: 'King County' 
// //     },
// //   ];

// //   const result = customers.filter((x)=>x.customer_age >= 45).map((i)=>({name:i.customer_name, age:i.customer_age}))
// //   console.log(result)

// console.log('line 1')
// // akses layer database
// console.log('line')

// console.log('Hellooo BInar')

// setTimeout(()=>{
//   console.log('Javascript')
// },100)
// console.log('developer')




// function kuadradAsync (x) {
//   setTimeout(() => x*x, 100)
// }

// console.log(kuadradAsync(5))


// function kuadradAsync2 (x, callback) {
//   setTimeout(() => callback(x*2), 100)
// }

// function test (x) {
//   console.log(x)
// }

// kuadradAsync2(10,test)
const anak1 = {
  name: 'budi',
  kelas: '1A',
}

const family = {
  ayah: 'anto',
  ibu: 'tini',
}

const gab = {
  ...anak1,
  ...family,
  saudara: 'andi',
}

console.log(gab.name)

function isPasswordCorrect (password){
  return new Promise((resolve, reject) => {
    console.log('Password',password)
    if (password !== '123456') return reject({ 
      status: 400,
      message:'Password Salah'
    })
    resolve('Correct Password Ganti')
  })
}

isPasswordCorrect('1232456').then(resolve => console.log(resolve))
.catch(reject => console.log(reject))


async function test11 () {
  const test = isPasswordCorrect('123456')
}