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
