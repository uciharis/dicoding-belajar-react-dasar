# Konsep Dasar React

## Pengantar Konsep Dasar

Modul ini akan mengenalkan konsep di React seperti
* Composition
* Declarative Code
* Unidirectional Data Flow
* React tak lebih dari sekedar Javascript

## React Element dan Component

Elemen dan komponen merupakan 2 hal dalam membangun user interface.
Sama seperti elemen pada standar DOM, elemen di React bisa berupa paragraf, button, images dan tipe lainnya.

Bedanya, React elemen hanya sebatas objek di javascript biasa. Berikut contoh objek React elemen paragraf.

`

    {
     type: 'p',
     props: {
       className: 'p-blue',
       children: 'Content of paragraph.',
     },
    }

`

bila objek dirender pada ReactDOM (DOM) maka akan menghasilkan HTML elemen seperti berikut:

`

<p class='p-blue'>Content of Paragraph. </p>

`

Jika React element seperti HTML elemen, lalu apa itu React component ?

React component adalah sebuah fungsi yang mengembalikan React elemen. dengan React component, kita dapat mudah membuat antarmuka pengguna yang reusable.

React component hanyalah sebuah fungsi yang return React element.

Perhatikan React component berikut :

`


function Car({manufacture, type,color}){
    return {
        manufacture,
        type,
        color,
        unitCode: `${+new Date()}-${manufacture}-${type}-${color}`
    }
}


`

fungsi diatas bersifat reusable. Hal ini dikarenakan kita bisa membuat objek Car dengan nilai yang berbeda hanya dengan menggunakan fungsi yang sama.

begitu juga React component. Alih-alih mengembalikan data, React component mengembalikan sebuah UI dalam bentuk React elemen.


`
      function Car({manufacture, type, color})
        {
            
        return (
        <div className='car-info>
            <dt>manufacture : </dt>
            <dd>{manufacture}</dd>
            <dt>type : </dt>
            <dd>{type}</dd>
            <dt>color : </dt>
            <dd>{color}</dd>
        </div>
    );

    }
`


nb : React memiliki fitur JSX sehingga kita bisa nulis sintaks HTML pada kode JS.

salah satu keunggulan menggunakan React adalah user interface menjadi reusable. React component sangat berperan untuk mencapai tujuan tersebut. Maka dari itu, kita akan banyak bikin React component.

## Komposisi

jika biasanya kita memecah kode komplkes jadi fungsi terpisah, kita juga dapat menggabungkan beberapa fungsi untuk menghasilkan data yang lebih kompleks 

> ( kode di file 1_composition.js)

proses menggabung banyak fungsi utk bikin data yang lebih kompleks dinamakan komposisi.

praktek komposisi di React ditemukan biasanya ketika pembuatan dan penggunaan sebuah komponen.

komponen tsb bersifat reusable
lihat di :
> 1_github.js
> 1_app.js

## Declarative Code

salah satu konsep di React adalah nulis kode secara deklaratif.

Deklaratif adalah memberikan intruksi hasil akhirnya ingin seperti apa tanpa harus menerangkan step step lengkap nya.

seperti halnya mengatur suhu mobil manual (dengan 2 knop, pengatur hembusan dan pendingin)

vs

mobil elektrik yang hanya kita input suhu yang diinginkan di mobil
