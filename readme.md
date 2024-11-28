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

```jsx

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

```jsx
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

```jsx

React.createElement(
  // tipe,
  // properti,
  // content
)

```
misalkan kita ingin membuat element paragraf "Hello React", membuatnya sebagai berikut.

```jsx

const elemen = React.createElement('p',null,'Hello React');
console.log(elemen);

```

jika dicek, maka output dari elemen hasil createElement hanyalah objek JS biasa. contoh lain misal membuat paragraf dengan id = myP dan className = red yang berisi teks "Helo Bambang"

```jsx

const elements = React.createElement('p',{
  id: 'myP',
  className: 'red'
},
'Helo Bambang'
);

```
Dalam menggunakan React, menjadi suatu praktek yang lazim digunakan untuk menetapkan parameter child secara nested.

```jsx

const heading = React.createElement('h1',null, 'React');
const strong = React.createElement('strong',null, 'best tools');
const paragraf = React.createElement('p',null, ['the',strong,'for building UI']);
const divContainer = React.createElement('div', {className: 'container'},[heading, paragraf]);

export default divContainer ;

```