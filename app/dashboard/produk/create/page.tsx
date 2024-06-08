// // import Form from '@/app/ui/produk/create-form';
// // import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
// // import { fetchCustomers, fetchProdukById } from '@/app/lib/data';
// // import { produk } from '@/app/lib/placeholder-data';
 
// // export default async function Page() {
// //   const produk = await fetchProdukById(produkId);
 
// //   return (
// //     <main>
// //       <Breadcrumbs
// //         breadcrumbs={[
// //           { label: 'Produk', href: '/dashboard/produk' },
// //           {
// //             label: 'Create Produk',
// //             href: '/dashboard/produk/create',
// //             active: true,
// //           },
// //         ]}
// //       />
// //       <Form produk={produk} />
// //     </main>
// //   );
// // }
// import Form from '@/app/ui/produk/create-form';
// import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
// import { fetchCustomers, fetchProdukById } from '@/app/lib/data'; // Combined imports

// export default async function Page({ params }) {
//   const produkId = params.id; 

//   const [customers, produk] = await Promise.all([
//     fetchCustomers(),
//     fetchProdukById(produkId)
//   ]); 

//   return (
//     <main>
//       <Breadcrumbs
//         breadcrumbs={[
//           { label: 'Produk', href: '/dashboard/produk' },
//           {
//             label: 'Edit Produk', 
//             href: `/dashboard/produk/edit/${produkId}`, 
//             active: true,
//           },
//         ]}
//       />
//       <Form produk={produk} customers={customers} /> 
//     </main>
//   );
// }
