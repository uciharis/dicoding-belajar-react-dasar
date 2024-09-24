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
        children: 'Content of paragraph',
    },
}
`

bila objek dirender pada ReactDOM (DOM) maka akan menghasilkan HTML elemen seperti berikut:

`
<p class='p-blue'>Content of paragraph</p>
`

Jika React element seperti HTML elemen, lalu apa itu React component ?

React component adalah sebuah fungsi yang mengembalikan React elemen. dengan React component, kita dapat mudah membuat antarmuka pengguna yang reusable.

Perhatikan React component berikut :

> fungsi mengembalikan objek 1_fungsi.js

fungsi diatas bersifat reusable. Hal ini dikarenakan kita bisa membuat objek Car dengan nilai yang berbeda hanya dengan menggunakan fungsi yang sama.

begitu juga React component. Alih-alih mengembalikan data, React component mengembalikan sebuah UI dalam bentuk React elemen.

> (function car di 1_car.js )

nb : React memiliki fitur JSX sehingga kita bisa nulis sintaks HTML pada kode JS.

salah satu keunggulan menggunakan React adalah user interface menjadi reusable. React component sangat berperan untuk mencapai tujuan tersebut. Maka dari itu, kita akan banyak bikin React component.

## Komposisi

jika biasanya kita memecah kode komplkes jadi fungsi terpisah, kita juga dapat menggabungkan beberapa fungsi untuk menghasilkan data yang lebih kompleks 

> ( kode di file 1_composition.js)
