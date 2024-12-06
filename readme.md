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

```javascript

    {
     type: 'p',
     props: {
       className: 'p-blue',
       children: 'Content of paragraph.',
     },
    }

```

bila objek dirender pada ReactDOM (DOM) maka akan menghasilkan HTML elemen seperti berikut:

```html

    <p class='p-blue'>
    Content of Paragraph.
    </p>

```

Jika React element seperti HTML elemen, lalu apa itu React component ?

React component adalah sebuah fungsi yang mengembalikan React elemen. dengan React component, kita dapat mudah membuat antarmuka pengguna yang reusable.

React component hanyalah sebuah fungsi yang return React element.

Perhatikan React component berikut :

```javascript

    function Car({manufacture, type,color}){
        return {
            manufacture,
            type,
            color,
            unitCode: `${+new Date()}-${manufacture}-${type}-${color}`
                }
    }

```

fungsi diatas bersifat reusable. Hal ini dikarenakan kita bisa membuat objek Car dengan nilai yang berbeda hanya dengan menggunakan fungsi yang sama.

begitu juga React component. Alih-alih mengembalikan data, React component mengembalikan sebuah UI dalam bentuk React elemen.


```jsx
      function Car({manufacture, type, color}){
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
```


nb : React memiliki fitur JSX sehingga kita bisa nulis sintaks HTML pada kode JS.

salah satu keunggulan menggunakan React adalah user interface menjadi reusable. React component sangat berperan untuk mencapai tujuan tersebut. Maka dari itu, kita akan banyak bikin React component.

## Komposisi

jika biasanya kita memecah kode komplkes jadi fungsi terpisah, kita juga dapat menggabungkan beberapa fungsi untuk menghasilkan data yang lebih kompleks

```javascript
       function getProfilePicture(userId){
            return `https://avatars.githubusercontent.com/u/${userId}`;
        }


        function getProfileLink(username){
            return `https://github.com/${username}`;
        }

        function getGithubInfo(username,userId){
            return {
                profilePict: getProfilePicture(userId),
                profileLink: getProfileLink(username)
            };
        }
console.log(getGithubInfo('jokontol',25724809));

```

proses menggabung banyak fungsi utk bikin data yang lebih kompleks dinamakan komposisi.

praktek komposisi di React ditemukan biasanya ketika pembuatan dan penggunaan sebuah komponen.

praktek ini adalah pondasi di dalam react.

komponen tsb bersifat reusable
lihat di :
> GithubInfo.js
```javascript

function ProfilePicture({ userId }) {
  return (
    <img
      src={"https://avatars.githubusercontent.com/u/" + userId}
      alt="GitHub Profile"
    />
  );
}

function ProfileLink({ username }) {
  return <a href={"https://github.com/" + username}>{username}</a>;
}

function GithubInfo({ username, userId }) {
  return (
    <div className="github-info">
      <ProfilePicture userId={userId} />
      <ProfileLink username={username} />
    </div>
  );
}

export default GithubInfo;

```

> App.js
```javascript

import GithubInfo from './GithubInfo.js';
export default function App(){
    return <GithubInfo username={'dimas'} userId={25724809}/>;
}

```

## Declarative Code

salah satu konsep di React adalah nulis kode secara deklaratif.

Deklaratif adalah memberikan intruksi hasil akhirnya ingin seperti apa tanpa harus menerangkan step step lengkap nya.

Berbeda halnya dengan imperative yang menjelaskan secara detil kepada javascript compiler

seperti halnya mengatur suhu mobil manual (dengan 2 knop, pengatur hembusan dan pendingin)

vs

mobil elektrik yang hanya kita input suhu yang diinginkan di mobil

contoh imperative code :

```javascript

const names = ['asep','jokontol', 'cika'];
const uppernames = [];

for (let i=0;i < names.length; i++){
    uppernames[i] = names[i].toUpperCase();
}
console.log(uppernames);

```

contoh deklaratif :

```javascript

const names = ['asep','jokontol', 'cika'];
const uppercaseNames = names.map((name=>name.toUpperCase()));

console.log(uppercaseNames);

```

## React merupakan Deklaratif

React mendorong kita menggunakan gaya deklaratif, dengan memanfaatkan map,filter, atau fungsi array sejenis.

```jsx

function Contacts(){
  const names = ['asep', 'jokonto7', 'bagas'];

  return (
    <ol className='contacts>
      {names.map((name)=><li>{name}</li>)}
    </ol>
  );
}

export default Contacts;

```

contoh lain menetapkan event pada elemen secara deklaratif:



```html

<button onClick={callContact}>Call Contact</button>

```

cara diatas adalah menetapkan event listener di React, tanpa perlu menuliskan addEventListener. hal ini karna sudah di handle oleh React.

## Unidirectional Data Flow

pada React, data terletak di parent component. Bila child membutuhkan, data akan dikirim oleh parent.

ketika terjadi perubahan data, parent lah yang meng-update. Child hanya bisa mengirim sinyal/event atau callback func ke parent.

parent akan merespons dan memperbarui state. Perubahan state pada parent akan merender ulang child komponen.

Penjelasan lain :

- Props : cara utama mengirim data dari parent ke child. props read-only di child
- state : data yang berubah ubah dan dideklarasi dengan 'useState' hook
- callback funct : fungsi yang diberikan parent ke child, yang pakai child utk picu perubahan di parent

## React hanyala Javascript

- tingkat abstraksi di React sangat dangkal. tidak perlu mengingat banyak API baru
- React tidak buat fungsionalitas baru, sudah ada di JS standar

contoh perulangan array contacts ke sebuah list contact :


```jsx
<ul>
  {contacts.map((contact) => (<li>{contact}</li>))}
</ul>
```

## Rangkuman Konsep dasar React

### Elemen dan Komponen

- Elemen : blok terkecil dalam bangunan UI react
- komponen : fungsi yang me-return elemen

### Komposisi

- adalah menggabung banyak fungsi menjadi data yang lebih komplek.
- selalu diingat bahwa React komponen mengembalikan UI

fungsi Komposisi

```javascript

function getProfilePicture(userId) {
 return `https://avatars.githubusercontent.com/u/${userId}`;
}

function getProfileLink(username) {
 return `https://github.com/${username}`;
}


function getGithubInfo(username, userId) {
 return {
   profilePicture: getProfilePicture(userId),
   profileLink: getProfileLink(username),
 };
}

console.log(getGithubInfo('dimasmds', 25724809));

```

Komponen komposisi

```javascript
function ProfilePicture({ userId }) {
 return (
   <img src={`https://avatars.githubusercontent.com/u/${userId}`} />
 );
}

function ProfileLink({ username }) {
 return (
   <a href={`https://github.com/${username}`} />
 )
}


function GithubInfo({ username, userId }) {
 return (
   <div className='github-info'>
     <ProfilePicture userId={userId} />
     <ProfileLink username={username} />
   </div>
 )

 ```


 # React UI komponen

 ## Pengantar

 Yang akan dibahas adalah :

 - buat react elemen dan component
 - memahami component properties
 - komposisi component
 - membuat aplikasi sederhana

 ### React Element

 antarmuka aplikasi react dibangun menggunakan react element. React element berisi paragraf, heading, atau gambar.

walaupun mirip dengan element dom, tetapi react sebenarnya tidaklah identik. React elemen hanyalah objek js polos dan ringat. cara paling simpel membuat react elemen adalah sbb :

```javascript

React.createElement(
  // tipe,
  // properti,
  // content
)

```
misalkan kita ingin membuat element paragraf "Hello React", membuatnya sebagai berikut.

```javascript

const elemen = React.createElement('p',null,'Hello React');
console.log(elemen);

```

jika dicek, maka output dari elemen hasil createElement hanyalah objek JS biasa. contoh lain misal membuat paragraf dengan id = myP dan className = red yang berisi teks "Helo Bambang"

```javascript

const elements = React.createElement('p',{
  id: 'myP',
  className: 'red'
},
'Helo Bambang'
);

```
Dalam menggunakan React, menjadi suatu praktek yang lazim digunakan untuk menetapkan parameter child secara nested.

```javascript
import React from 'react';
const heading = React.createElement('h1',null, 'React');
const strong = React.createElement('strong',null, 'best tools');
const paragraf = React.createElement('p',null, ['the',strong,'for building UI']);
const divContainer = React.createElement('div', {className: 'container'},[heading, paragraf]);

export default divContainer ;

```

hasil react elemen diatas :

![tampilan sederhana](/assets-img/pic001.png)

### Latihan membuat React element

Mari kita mulai dg hal yang sederhana yaitu membuat UI 'biodata perusahaan' seperti contoh berikut :

![membuat company profile](/assets-img/pic002.jpeg)

Lakukan dulu import modul react :

```javascript
import React from 'react';

const header = React.createElement('h1', null,'Biodata Perusahaan');
// console.log(header);

```

output console.log(header) menunjukkan bahwa React element hanyalah objek JS biasa.

React elemen sejatinya hanyalah objek JS yang ukurannya kecil, dan dapat diubah menjadi DOM (virtual DOM) di browser.

untuk tampilkan react element di browser, kita perlu membuat root untuk menampung react element yang akan di-render

untuk membuat root, kita gunakan fungsi createRoot dari module react-dom/client

```javascript
import React from 'react';
import {createRoot} from 'react-dom/client';

const rootElement = document.querySelector('#root');

const header = React.createElement('h1', null,'Biodata Perusahaan');
// console.log(header);

const root = createRoot(rootElement);
root.render(header);
```

dengan file html.index :

```html
<!DOCTYPE html>
<head>
  <title> React APP</title>
</head>
<body>
  <div id='root'></div>
</body>
</html>

```
kita akan coba menambahkan 3 elemen react baru berupa list. kode Reactnya akan menjadi seperti berikut.

```javascript

import React from 'react';
import {createRoot} from 'react-dom/client';

const rootElement = document.querySelector('#root');

const header = React.createElement('h1',null, 'Biodata Perusahaan');

const item1 = React.createElement('li', null, 'Nama : Dicoding Indonesia');
const item2 = React.createElement('li', null, 'Tagline : Decode Ideas, Discover Potential');
const itemParent = React.createElement('ul', null, [item1, item2]);

// kita buat element container utk membungkus itemParent dan header
// lalu yang dirender adalah containernya, bukan header lagi

const container = React.createElement('div', null, [header, itemParent]);
const root = createRoot(rootElement);

root.render(container); // ganti dari header -> container

```
### JSX

membuat react element serasa ribet apalagi kalo nested.Maka dari itu React punya solusi yaitu dengan
penggunaan sintaksis JSX. Berikut contoh penggunaan JSX.

```jsx

const element = <p className = 'string' > Halo React </p>;

```

 kode diatas jika diterjemahkan oleh JSX akan menjadi react element sbb :

 ```javascript

 const element = React.createElement('p', {className : 'string'}, 'Halo React');

 ```

 Ternyata lebih enak menulis react element menggunakan JSX, mirip menulis di html.

 Untuk menulis js expression, kita harus menuliskannya menggunakan kurung kurawal { ... }. Berikut
 contoh penulisan expression di JSX :

 ```jsx

 const name = 'Dicoding';
 const element = <p>Helo {name}</p>;

 ```

 Berikut contoh lain kesederhanaan JSX dan kode yang dihasilkan ketika dikonversi ke js biasa.

File JSX
 ```jsx

 const kontainer = (
  <div className='kontainer'>
  <h1><React/h1>
  <p>The <strong>best tool</strong> for building UI</p>
  </div>
 );

export default element;
 ```

 versi javascript (createElement)

 ```javascript

 const heading = React.createElement('h1', null, 'React');
 const strong = React.createElement('strong', null, 'best tool');
 const paragraf = React.createElement('p', null, ['The', strong, 'for Building UI' ]);
 const kontainer = React.createElement('div', [className: 'container'], [heading, paragraf]);

 ```

 Ketika menulis kode JSX, pastikan hanya mengembalikan 1 element. Meskipun React element bisa berisi nested element,
 tetapi pastikan hanya ada 1 root elemen yang membungkus seluruh elemen.

 Berikut referensi lebi lengkap tentang JSX :

 [1. referensi JSX-new](https://react.dev/learn/writing-markup-with-jsx 'dokumentasi React terbaru')   
 [2. referensi JSX-old](https://legacy.reactjs.org/docs/introducing-jsx.html 'dokumentasi React legacy')

 ### Latihan menggunakan JSX

 Kita coba menambahkan juga gambar logo dicoding. Meletakkan gambar atau aset statis
 yang tidak memerlukan proses, sebaiknya di folder public.

 ```jsx

 import React from 'react';
 import {createRoot} from 'react-dom/client';
 const rootElement = document.querySelector('#root');

 const elemen = (
  <div>
    <h1>Biodata Perusahaan</h1>
    <img src='/dicoding-logo.png' alt='gambar logo dicoding' />
    <ul>
      <li>Nama      : Dicoding Indonesia</li>
      <li>Bidang    : Edukasi</li>
      <li>Tagline   : Decode ideas, discover potentials</li>
    </ul>
  </div>
 );

 rootElement.render(elemen);

 ```

 cara lain utk menampilkan gambar adalah dengan meletakkan file gambar di folder src lalu mengimpor
 gambar menjadi module.

 ```jsx

import React from 'react' ;
import { createRoot} from 'react-dom/client' ;
import DicodingImg from './dicoding-logo.png' ;
const iniRoot = document.querySelector('#root');

const element = (
  <div>
    <h1>Biodata Perusahaan</h1>
    <img src={DicodingImg} />
    <ul>
      <li>Nama    : dicoding Indonesia</li>
      <li>Bidang  : edukasi</li>
      <li>Tagline : decode Ideas, Discover Potential</li>
    </ul>
  </div>
)

const root = createRoot(iniRoot);
root.render(element)

 ```

 Berikut implementasi penulisan ( sedikit berbeda karna di codesandbox, kode react diatas dijadikan komponen App.jsx)

Cuplikan Layar kode codesandbox :

![elemen App.jsx](/assets-img/pic003.png)

file gambar 'circle-g.jpg' di folder src. lalu gambar diimpor sbg module dan dipanggil
di dalam elemen react App.jsx. Berikut previewnya :

![tampilan](/assets-img/pic004.png)