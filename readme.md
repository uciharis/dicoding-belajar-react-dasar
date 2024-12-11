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

> "components let you split the ui into independent, reusable pieces, and think about each piece in isolation"
> - React Team


Konsep komponen sangat baik karena memecah UI ke bagian bagian kecil.
Bagian tersebut punya tanggung jawab yang jelas
dan properti yang sudah didefinisikan.

hal ini sangat penting ketika membangun aplikasi karena kita dapat fokus
pada bagian terkecil tanpa mengganggu keseluruhan kode yang ada.

Cara paling sederhana untuk membuat React component adalah menulis fungsi
dengan mengembalikan React component.

nb : React komponen adalah sebuah fungsi JS yang mengembalikan UI (react element)

```jsx

function SayHello(){
  // blablabla

  return <p> Helo world</p>
}

// catatan : penulisan React component selalu diawali dg huruf Kapital
// hal ini utk membedakan built-in HTML element dan component React

```
berikut penjelasan tentang penulisan komponen React :    
[naming_ReactComponent_rules](https://react.dev/learn/your-first-component#what-the-browser-sees)

lalu cara menggunakannya berbeda dengan fungsi JS biasa, yaitu dengan cara :

```jsx

<SayHello />

```

## Properti Komponent

React komponen merupakan fungsi JS, maka kita dapat memberikan parameter. 
Namun, React komponen hanya dapat menerima satu parameter berupa objek, yang biasa disebut props.

Contoh :

```jsx

function SayHello(props){
  const name = props.name;
  const company = props.company;

  return (
    <p>
      Hello, {name} from {company} .
    </p>
  );
}

```

Ingat, meskipun react komponent adalah fungsi JS, tetapi memanggilnya tidak
seperti kita memanggil fungsi pada umumnya. hal ini dikarenakan React secara otomatis
mengenali jika kita memanggil komponen : 

```html

'<Blabla />'

```

daripada
memanggil seperti :

```javascript
Blabla(); // cara yang salah memanggil komponen
```

berikut penggunaan/ memanggil React komponen kode diatas.

```jsx

<SayHello name='bil' company='mikocok' />
<SayHello name='mark' company='fesbuk' />

```

Best practice saat mengirim props di React komponen adalah dengan tidak mengirimkan JS objek.
Jika tidak bisa dihindari, maka sebaiknya di-destructure di dalam komponen sebelum digunakan
ke dalam return nya.

Berikut contoh mengirimkan objek sebagai props :

```jsx

function InstaProfile(props){
  const profile = props.profile;

  const name = profile.name;
  const username = profile.name;
  const bio = profile.bio;
  const isVerified = profile.isVerified;

  return (
    <>
      <dl>
        <dt>Name: </dt>
        <dd>{name}</dd>
        <dt>username: </dt>
        <dd>{username}</dd>
        <dt>Bio: </dt>
        <dd>{bio}</dd>
        <dt>Verified: </dt>
        <dd>{isVerified}</dd>
      </dl>
    </>
  );
}

const profile = {
  name: 'Dicoding Indonesia',
  username: 'dicoding',
  bio: 'bangun karirmu sbg developer profesional',
  isVerified: true
};

<InstaProfile profile={profile} /> ;
```

nb : praktek diatas tidak disarankan oleh dicoding, meskipun demikian
menurut chatgpt, hal tersebut boleh saja. apalagi jika berurusan dengan data yang
sangat banyak dan kompleks. Sehingga lebih mudah mengirimkan objek. Asalkan
dilakukan desctructuring agar menjadi struktur yang lebih ringkas.

nb : pada percobaan kode diatas via [codesandbox](https://codesandbox.io/p/sandbox/jsx-praktek-sp4dn8),
objek perlu diinisiasi di index.js atau di tempat rendernya.

index.js
```javascript

profile = {
   name: "samsul",
  warna: "pink",
  umur: 99,
  isVerif: true
}

```

Begini praktek yang disarankan dicoding utk mengirimkan props satu per satu

```jsx

    function InstagramProfile(props) {
      const name = props.name;
      const username = props.username;
      const bio = props.bio;
      const isVerified = props.isVerified;
     
      return (
        <div className="container">
          <dl>
            <dt>Name: </dt>
            <dd>{name}</dd>
            <dt>Username: </dt>
            <dd>{username}</dd>
            <dt>Bio: </dt>
            <dd>{bio}</dd>
            <dt>Verified: </dt>
            <dd>{isVerified ? 'yes' : 'no'}</dd>
          </dl>
        </div>
      );
    }
     
    <InstagramProfile
      name="Dicoding Indonesia"
      username="dicoding"
      bio="Bangun Karirmu Sebagai Developer Profesional"
      isVerified // pemberian nilai boolean "true" cukup dengan menuliskan nama properti 

```

cara seperti diatas, punya 1 pertimbangan. pertimbangan tersebut
adalah kita menghindari mengirimkan data yang sebenarnya tidak perlu.

Best practice lainnya adalah menggunakan fitur ES6 objek desctructuring
seperti berikut:

```jsx

    function InstagramProfile({ name, username, bio, isVerified }) {
      return (
        <div className="container">
          <dl>
            <dt>Name: </dt>
            <dd>{name}</dd>
            <dt>Username: </dt>
            <dd>{username}</dd>
            <dt>Bio: </dt>
            <dd>{bio}</dd>
            <dt>Verified: </dt>
            <dd>{isVerified ? 'yes' : 'no'}</dd>
          </dl>
        </div>
      );
    }

```

### children

React komponen punya 1 properti spesial bernama children.
Properti ini spesial karna memberikan nilainya beda dengan properti biasa.

Nilai properti children didtetapkan diantara tag pembuka dan penutup komponen.
contohnya seperti berikut: 

SayName.jsx
```jsx

function SayName({children}){
  return (
    <p>hello {children}</p>
  )
}
```
index.js

```jsx
// cara memanggil children
<SayName> mulyono </SayName> ;

```

contoh lain misal :

SayName.jsx
```jsx
function SayName({name, children}){
  return (
    <>
    <h1>Perusahaan{name}</h1>
    {children}
    </>
  )
}
```

Sedangkan cara memanggil dan menggunakannya :

index.js
```javascript
createRoot(document.querySelector('#root')).render(
  <SayName name='Mulyo no'>
    <p>Owner ni bos</p>
    <h2>senggol donk</h2>  
  </SayName>
)

```
nb : untuk {name, children} adalah teknik destructuring. lebih enak dilihat
dan kelihatan langsung apa yang digunakan komponen.

Selain itu, memang props spesial itu menggunakan keyword children. Itu adalah
konvensi yang berlaku di React Component. Props juga. meskipun nanti akan di-destruct ke objek yang lebih kecil.

contoh kode nya ada link berikut : [stackblitz](https://stackblitz.com/edit/vitejs-vite-rdzhexxp?file=src%2Fmain.jsx)

![tampilan kode](/assets-img/pic005.png)

## Compositional Component

Komponen di React dapat menampung dan menghasilkan UI yang kompleks.
Biasanya Komponen kompleks dibangun dari beberapa komponen yang kecil.
Konsep ini dinamakan Composition.


Kita harus selalu menekankan prinsip single-responsibility. Prinsip tersebut menyatakan
bahwa tiap fungsi harus memiliki 1 tanggung jawab saja. Demikian halnya
dengan komponen yang komplek, dapat diterjemahkan ke beberapa komponen yang lebih kecil.

Berikut ini adalah UI dari card tabel produk.

![Komposisi](/assets-img/pic006.png)

Jika kita pecah komponen card diatas, didapatkan beberapa komponen sebagai berikut :

1. CardContainer
2. SearchBar
3. ProductContainer
4. ProductCategoryRow
5. ProductRow

Setelah mengidentifikasi pemecahan komponen, kodenya menjadi sebagai berikut :

```jsx

function SearchBar(){
  return (
    <div className = 'search-bar__container' >
      <input type='text' placeholder='search ... ' />
      <div className='search-bar__in_stock_checkbox'>
        <input type='checkbox' />
        <label>only show product in stock</label>
      </div>
    </div>
  );
}

function ProductCategoryRow({name}){
  return (
    <tr>
      <td colSpan='2' >
      <strong>{name}</strong>
      </td>
    </tr>
  );
}

function ProductRow({name,price}){
  return (
    <tr>
    <td>{name}</td>
    <td>{price}</td>
    </tr>
  );
}

function ProductContainer(){
  return (
    <div className='product-container>
      <table>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
        <ProductCategoryRow name='sporting goods' />
        <ProductRow name='Football' price='$49' />
        <ProductRow name='Baseball' price='$9' />
        <ProductRow name='basketball' price='$40' />
        <ProductCategoryRow name='electronics' />
        <ProductRow name='iPod touch' price='$100' />
        <ProductRow name='iPhone 5x' price='$239' />
        <ProductRow name='Nexus 9' price='$140' />
      </table>
    </div>
  );
}

function CardContainer(){
  return (
    <div className ='container'>
    <SearchBar />
    <ProductContainer />
    </div>
  )
}

```
Berikut hirarki dari komponen diatas :

CardContainer  
  - SearchBar   
  - ProductContainer   
    - ProductCategoryRow   
    - ProductRowP

Saatnya berlatih membuat halaman news dengan komponen.

Berikut tampilan yang akan dibuat dengan rincian sebagai berikut :

![latihan komponen](/assets-img/pic007.png)

1. NewsContainer
2. Header
3. Card
4. CardHeader
5. CardBody
6. Button

dengan struktur/hirarki komponen adalah :

NewsContainer
 - Header
 - Card
     - CardHeader
     - CardBody
         - Button

Berikut kode masing masing komponen

NewsContainer.jsx
```jsx
import Header from './Header';
import Card from './Card';
import './App.css';

function NewsContainer() {
  const someNews = [
    {
      title: 'CNN Acuire BEME',
      date: 'March 20 2022',
      content: "CNN purchased Casey Neistat's Beme app for $25million.",
      image: 'https://picsum.photos/600/400?random=1',
      category: 'News',
      link: '#'
    },
    {
      title: 'React and the WP-API',
      date: 'March 19 2022',
      content: 'The first ever decoupled starter theme for React & the WP-API.',
      image: 'https://picsum.photos/600/400?random=2',
      category: 'News',
      link: '#'
    },
    {
      title: 'Nomad Lifestyle',
      date: 'March 19 2022',
      content: 'Learn our tips and tricks on living a nomadic lifestyle.',
      image: 'https://picsum.photos/600/400?random=3',
      category: 'Travel',
      link: '#'
    }
  ];

  return (
    <>
      <Header title="Latest News" subtitle="Covering March & April 2022" />
      {someNews.map((news, index) => (
        <Card
          key={index}
          title={news.title}
          date={news.date}
          content={news.content}
          image={news.image}
          category={news.category}
          link={news.link}
        />
      ))}
    </>
  );
}

export default NewsContainer;

```

Header.jsx
```jsx

export default function Header({ title, subtitle }) {
  return (
    <header>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </header>
  );
}

```

Card.jsx
```jsx
import CardHeader from './CardHeader';
import CardBody from './CardBody';

export default function Card({ image, category, date, title, content, link }) {
  return (
    <article>
      <CardHeader image={image} category={category} />
      <CardBody date={date} title={title} content={content} link={link} />
    </article>
  );
}

```

CardHeader.jsx
```jsx

export default function CardHeader({ image, category }) {
  return (
    <header>
      <h4>{category}</h4>
      <img src={image} alt={category} />
    </header>
  );
}

```
CardBody.jsx
```jsx
import Button from './Button';

export default function CardBody({ date, title, content, link }) {
  return (
    <div>
      <p>{date}</p>
      <h2>{title}</h2>
      <p>{content}</p>
      <Button link={link} />
    </div>
  );
}

```

Button.jsx
```jsx

export default function Button({ link }) {
  return (
    <a href={link}>
      find out more
    </a>
  );
}

```

lalu komponen NewsContainer dimuat ke main.jsx untuk dirender ke root

main.jsx
```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NewsContainer from './NewsContainer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NewsContainer />
  </StrictMode>,
)

```

Pada latihan selanjutnya, kita akan menampilkan UI dalam bentuk list.
Tujuan utama adalah mengubah penggunaan componen card yang dilakukan
secara manual dan repetitif agar menjadi lebih efektif.

Dengan menggunakan React, kita dpat menampilkan list memanfaatkan fungsi
Array map sebagai berikut :

```jsx
<ul id='news>
  { someNews.map((news)=> <li>{news.title}</li>)}
</ul>
```

Dengan cara yang sama, kita akan merubah beberapa kode di Card menjadi seperti berikut :

```jsx

    function News() {
      // data news
      const someNews = [
        {
          title: 'CNN Acuire BEME',
          date: 'March 20 2022',
          content: "CNN purchased Casey Neistat's Beme app for $25million.",
          image: 'https://source.unsplash.com/user/erondu/600x400',
          category: 'News',
          link: '#'
        },
        {
          title: 'React and the WP-API',
          date: 'March 19 2022',
          content: 'The first ever decoupled starter theme for React & the WP-API.',
          image: 'https://source.unsplash.com/user/ilyapavlov/600x400',
          category: 'News',
          link: '#'
        },
        {
          title: 'Nomad Lifestyle',
          date: 'March 19 2022',
          content: 'Learn our tips and tricks on living a nomadic lifestyle.',
          image: 'https://source.unsplash.com/user/erondu/600x400',
          category: 'Travel',
          link: '#'
        }
      ];
     
     
      return (
        <div>
          <Header title="Latest News" subtitle="Covering March & April 2022" />
          {someNews.map((news) => (
            <Card {...news} key={news.title} />
          ))}
        </div>
      );
    }

```

dengan menggunakan map, kita dapat mencetak sebanyak item dari Array.

nb : ketika merender komponen sebagai list, perlu menambahkan key karna masing-masing komponen adalah unik.
maka menambahkan key diperlukan karena cara kerja React adalah hanya render ulang komponen yang berubah saja. dengan memberi key maka itu React dapat lebih mudah membaca perubahan hal tersebut.

### Studi Kasus

Kita akan membuat aplikasi Daftar Kontak. Cara kerjanya sederhana, untuk menampilkan, menghapus dan menambah kontak baru.

Sebelumnya kita menjalankan kode React di codesandbox atau stackblitz karena mudah tanpa deploy dan seting ina itu. Tapi kali ini kita akan menulis kode React secara lokal menggunakan bantuan Vite.

Berikut langkah-langkah menyiapkan kelengkapan projek React :

1. Pastikan sudah terinstall nodejs di sistem. Selanjutnya cek versi node dan npm.
> node --version   
> npm --version

2. selanjutnya, masuk ke dalam folder projek. Saya membuat folder bernama "react-projek".

3. selanjutnya arahkan terminal ke dalam folder tersebut. Lalu jalankan command berikut.

> npm create vite

selanjutnya node package manager akan menginstal template React yang disediakan oleh vite.

4. vite akan memandu via terminal, mulai dari nama projek, library/ framework yang ingin dipakai ( React) dan bahasa yang digunakan. Kita pilih javascript biasa. Saya menamai projeknya adalah "konak-app"

5. node menjalankan pembuatan template tersebut dengan mengunduh file-file dan folder di dalam folder bernama konak-app.

6. Seluruh struktur file dan folder telah terunduh. Selanjutnya kita akan menginstal package yang tertulis di file package.json dengan cara :
> npm install

7. node mengunduh semua module yang dibutuhkan untuk pembangunan aplikasi React. Selanjutnya, jalankan template tersebut dengan :
> npm run dev

Jika berhasil, maka akan muncul link localhost di terminal.

Langkah selanjutnya, kita akan hapus file yang ada di 'src' sebelum memulai menulis kode kita.

Sebelum memulai menulis kode, berikut adalah hasil breakdown dari komponen penyusun Konak App.

![sketch aplikasi](/assets-img/pic008.png)

Penjelasan

1. KonakApp(merah) : kontainer dari komponen nomor 2
2. KonakList(kuning) : kontainer dari nomor 3
3. KonakItem : kontainer berisi foto dan data kontak
4. ItemImg : foto kontak
5. ItemBody : data kontak berisi nama dan profil sosmed

Sebelumnya, mari kita sediakan data dulu di file data.js

data.js
```javascript

export const getData = () => {
    return [
        {
            id: 1,
            name: 'dima sapitra',
            tag: 'dimasaputra',
            imageUrl: '/images/dimasmds.jpeg'
        },
        {
            id: 2,
            name: 'ari faizin',
            tag: 'arifaizin',
            imageUrl: '/images/arifaizin.jpeg'
        },
        {
            id: 3,
            name: 'rahm farji',
            tag: 'rfarj69',
            imageUrl: '/images/rfajri27.jpeg'
        }
    ];
}
```