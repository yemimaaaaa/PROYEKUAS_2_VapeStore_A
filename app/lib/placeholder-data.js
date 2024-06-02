// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'User',
    email: 'user@nextmail.com',
    password: '123456',
  },
];

// const customers = [
//   {
//     id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
//     name: 'Delba de Oliveira',
//     email: 'delba@oliveira.com',
//     image_url: '/customers/delba-de-oliveira.png',
//   },
//   {
//     id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
//     name: 'Lee Robinson',
//     email: 'lee@robinson.com',
//     image_url: '/customers/lee-robinson.png',
//   },
//   {
//     id: '3958dc9e-737f-4377-85e9-fec4b6a6442a',
//     name: 'Hector Simpson',
//     email: 'hector@simpson.com',
//     image_url: '/customers/hector-simpson.png',
//   },
//   {
//     id: '50ca3e18-62cd-11ee-8c99-0242ac120002',
//     name: 'Steven Tey',
//     email: 'steven@tey.com',
//     image_url: '/customers/steven-tey.png',
//   },
//   {
//     id: '3958dc9e-787f-4377-85e9-fec4b6a6442a',
//     name: 'Steph Dietz',
//     email: 'steph@dietz.com',
//     image_url: '/customers/steph-dietz.png',
//   },
//   {
//     id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
//     name: 'Michael Novotny',
//     email: 'michael@novotny.com',
//     image_url: '/customers/michael-novotny.png',
//   },
//   {
//     id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
//     name: 'Evil Rabbit',
//     email: 'evil@rabbit.com',
//     image_url: '/customers/evil-rabbit.png',
//   },
//   {
//     id: '126eed9c-c90c-4ef6-a4a8-fcf7408d3c66',
//     name: 'Emil Kowalski',
//     email: 'emil@kowalski.com',
//     image_url: '/customers/emil-kowalski.png',
//   },
//   {
//     id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
//     name: 'Amy Burns',
//     email: 'amy@burns.com',
//     image_url: '/customers/amy-burns.png',
//   },
//   {
//     id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
//     name: 'Balazs Orban',
//     email: 'balazs@orban.com',
//     image_url: '/customers/balazs-orban.png',
//   },
// ];

// const invoices = [
//   {
//     customer_id: customers[0].id,
//     amount: 15795,
//     status: 'pending',
//     date: '2022-12-06',
//   },
//   {
//     customer_id: customers[1].id,
//     amount: 20348,
//     status: 'pending',
//     date: '2022-11-14',
//   },
//   {
//     customer_id: customers[4].id,
//     amount: 3040,
//     status: 'paid',
//     date: '2022-10-29',
//   },
//   {
//     customer_id: customers[3].id,
//     amount: 44800,
//     status: 'paid',
//     date: '2023-09-10',
//   },
//   {
//     customer_id: customers[5].id,
//     amount: 34577,
//     status: 'pending',
//     date: '2023-08-05',
//   },
//   {
//     customer_id: customers[7].id,
//     amount: 54246,
//     status: 'pending',
//     date: '2023-07-16',
//   },
//   {
//     customer_id: customers[6].id,
//     amount: 666,
//     status: 'pending',
//     date: '2023-06-27',
//   },
//   {
//     customer_id: customers[3].id,
//     amount: 32545,
//     status: 'paid',
//     date: '2023-06-09',
//   },
//   {
//     customer_id: customers[4].id,
//     amount: 1250,
//     status: 'paid',
//     date: '2023-06-17',
//   },
//   {
//     customer_id: customers[5].id,
//     amount: 8546,
//     status: 'paid',
//     date: '2023-06-07',
//   },
//   {
//     customer_id: customers[1].id,
//     amount: 500,
//     status: 'paid',
//     date: '2023-08-19',
//   },
//   {
//     customer_id: customers[5].id,
//     amount: 8945,
//     status: 'paid',
//     date: '2023-06-03',
//   },
//   {
//     customer_id: customers[2].id,
//     amount: 8945,
//     status: 'paid',
//     date: '2023-06-18',
//   },
//   {
//     customer_id: customers[0].id,
//     amount: 8945,
//     status: 'paid',
//     date: '2023-10-04',
//   },
//   {
//     customer_id: customers[2].id,
//     amount: 1000,
//     status: 'paid',
//     date: '2022-06-05',
//   },
// ];


const customers = [
  {
    id: '3958dc9e-737f-4377-85e9-fec4b6a6442a',
    nama: 'Lando Norris',
    no_telp: '081234567898',
    pesanan: 'Device ',
    date: '2024-05-20',
    image_url: '/customers/lando noWIN.png',
  },
{
    id: '3958dc9e-738f-4377-85e9-fec4b6a6442a',
    nama: 'Amdran Eko',
    no_telp: '085298641955',
    pesanan: 'Device & E-liquid & Atomizer',
    date: '2024-05-20',
    image_url: '/customers/wbb2.png',
  },
  {
    id: '3958dc9e-757f-4377-85e9-fec4b6a6442a',
    nama: 'Nilan Denus',
    no_telp: '089816842185',
    pesanan: 'Device & E-liquid ',
    date: '2024-05-20',
    image_url: '/customers/CUST 2.png',
  },
  {
    id: '3958dc9e-740f-4377-85e9-fec4b6a6442a',
    nama: 'Max De Lose',
    no_telp: '085622489161',
    pesanan: 'Device & Atomizer',
    date: '2024-05-20',
    image_url: '/customers/MAX LOSE.png',
  },
];

//dfggjhkgyvfvyffkjffgj
const produk = [
  {
    id: '3958dc9e-658f-4377-85e9-fec4b6a6442a',
    nama: 'Vaporesso',
    kategori: 'Device',
    harga: 550000,
    stok: 25,
    date: '2024-05-20',
    image_url: '/produk/Vaporesso.png',
  },
  {
    id: '3958dc9e-888f-4377-85e9-fec4b6a6442a',
    nama: 'Indonesia Dream Juice',
    kategori: 'E-liquid',
    harga: 155000,
    stok: 100,
    date: '2024-05-20',
    image_url: '/produk/Indonesia dj.png',
  },
  {
    id: '3958dc9e-628f-4377-85e9-fec4b6a6442a',
    nama: 'Voopoo',
    kategori: 'Device',
    harga: 290000,
    stok: 10,
    date: '2024-05-20',
    image_url: '/produk/Voopoo.png',
  },
  {
    id: '3958dc9e-798f-4377-85e9-fec4b6a6442a',
    nama: 'Druga x Panda',
    kategori: 'Atomizer',
    harga: 125000,
    stok: 48,
    date: '2024-05-20',
    image_url: '/produk/druga.png',
  },
  {
    id:'3958dc9e-898f-4377-85e9-fec4b6a6442a',
    nama: 'Movi',
    kategori: 'E-liquid',
    harga: 95000,
    stok: 10,
    date: '2024-05-20',
    image_url: '/produk/movi.png',
  },
  {
    id:'3958dc9e-698f-4377-85e9-fec4b6a6442a',
    nama: 'GEEKVAPE',
    kategori: 'Device',
    harga: 400000,
    stok: 20,
    date: '2024-05-20',
    image_url: '/produk/Geekvape.png',
  },
  {
    id:'3958dc9e-868f-4377-85e9-fec4b6a6442a',
    nama: 'Dragon Cloudz',
    kategori: 'E-liquid',
    harga: 155000,
    stok: 15,
    date: '2024-05-20',
    image_url: '/produk/dragon cloudz.png',
  },
  {
    id:'3958dc9e-768f-4377-85e9-fec4b6a6442a',
    nama: 'INHALE',
    kategori: 'Atomizer',
    harga: 400000,
    stok: 40,
    date: '2024-05-20',
    image_url: '/produk/inhale.png',
  },
];

const invoices = [
{
    customer_id: customers[0].id,
    total_harga: 550000,
    status: 'paid',
    date: '2024-05-20',
    kuantitas: '1',
    image_url: '/produk/liquid1.png',
  },
{
    customer_id: customers[1].id,
    total_harga: 99000,
    status: 'pending',
    date: '2024-05-20',
    kuantitas: '10',
    image_url: '/produk/liquid2.png',
  },
{
    customer_id: customers[2].id,
    total_harga: 100000,
    status: 'paid',
    date: '2024-05-20',
    kuantitas: '10',
    image_url: '/produk/device2.png',
  },
{
    customer_id: customers[3].id,
    total_harga: 125000,
    status: 'paid',
    date: '2024-05-20',
    kuantitas: '5',
    image_url: '/produk/acc1.png',
  },
  {
    customer_id: customers[2].id,
    total_harga: 200000,
    status: 'paid',
    date: '2024-05-20',
    kuantitas: '6',
    image_url: '/produk/acc3.png',
  },
];

const revenue = [
  { month: 'Jan', revenue: 2000 },
  { month: 'Feb', revenue: 1400 },
  { month: 'Mar', revenue: 4200 },
  { month: 'Apr', revenue: 3500 },
  { month: 'May', revenue: 2300 },
  { month: 'Jun', revenue: 2000 },
  { month: 'Jul', revenue: 4500 },
  { month: 'Aug', revenue: 700 },
  { month: 'Sep', revenue: 1500 },
  { month: 'Oct', revenue: 4800 },
  { month: 'Nov', revenue: 5000 },
  { month: 'Dec', revenue: 4000 },
];

const order = [
  {
     id: '3958dc9e-009f-4377-85e9-fec4b6a6452a',
     nama: 'Max Delose',
     harga: 250000,
     pesanan: 'Dragon Cloudz',
     jumlah: 2,
     date: '2024-05-31', 
     keterangan: 'sedang diproses',
     image_url: '/produk/dragon cloudz.png',
  },
  {
    id: '3958dc9e-008f-4377-85e9-fec4b6a6452a',
    nama: 'Lando Norris',
    harga: 400000,
    pesanan: 'GEEKVAPE',
    jumlah: 2,
    date: '2024-05-31', 
    keterangan: 'done',
    image_url: '/produk/Geekvape.png',
 },
 {
  id: '3958dc9e-001f-4377-85e9-fec4b6a6452a',
  nama: 'Lando Norris',
  harga: 250000,
  pesanan: 'Dragon Cloudz',
  jumlah: 4,
  date: '2024-05-31', 
  keterangan: 'done',
  image_url: '/produk/dragon cloudz.png',
},
{
  id: '3958dc9e-004f-4377-85e9-fec4b6a6452a',
  nama: 'Nilan Denus',
  harga: 95000,
  pesanan: 'Movi',
  jumlah: 1,
  date: '2024-05-31', 
  keterangan: 'sedang diproses',
  image_url: '/produk/movi.png',
},
];
  
// const revenue = [
// {
//    kode_revenue: 'AB900001',
//    invoices_id: customers[0].id,
//    jenis_laporan:'penjualan | pembelian | pengembalian',
//    metode_pembayaran:'tunai | kartu kredit | transfer | qris',
//    date:'2024-05-20', 
//    image_url: '/customers/delba-de-oliveira.png',
// },
// {
//    kode_revenue: 'AB900002',
//    invoices_id: customers[1].id,
//    jenis_laporan:'penjualan | pembelian | pengembalian',
//    metode_pembayaran:'tunai | kartu kredit | transfer | qris',
//    date:'2024-05-20', 
//    image_url: '/customers/delba-de-oliveira.png',
// },
// {
//    kode_revenue: 'AB900003',
//    invoices_id: customers[3].id,
//    jenis_laporan:'penjualan | pembelian | pengembalian',
//    metode_pembayaran:'tunai | kartu kredit | transfer | qris',
//    date:'2024-05-20',
//    image_url: '/customers/delba-de-oliveira.png',
// },
// {
//    kode_revenue: 'AB900004',
//    invoices_id: customers[2].id,
//    jenis_laporan:'penjualan | pembelian | pengembalian',
//    metode_pembayaran:'tunai | kartu kredit | transfer | qris',
//    date:'2024-05-20',
//    image_url: '/customers/delba-de-oliveira.png',
// }
// ];

module.exports = {
  users,
  customers,
  invoices,
  revenue,
  order,
  produk
};
