// import Form from '@/app/ui/produk/edit-form';
// import Breadcrumbs from '@/app/ui/produk/breadcrumbs';
// import { fetchCustomers, fetchProdukById } from '@/app/lib/data';
 
// export default async function Page({ params }: { params: { id: string } }) {
//     const id = params.id;
//       const [customers, produk] = await Promise.all([
//         fetchProdukById(id),
//         fetchCustomers(),
//       ]);
//   return (
//     <main>
//       <Breadcrumbs
//         breadcrumbs={[
//           { label: 'Produk', href: '/dashboard/produk' },
//           {
//             label: 'Edit Produk',
//             href: `/dashboard/produk/${id}/edit`,
//             active: true,
//           },
//         ]}
//       />
//       <Form produk={produk} customers={customers} />
//     </main>
//   );
// }
    