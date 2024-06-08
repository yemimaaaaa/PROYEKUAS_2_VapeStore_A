// import Form from '@/app/ui/produk/edit-form';
// import Breadcrumbs from '@/app/ui/produk/breadcrumbs';
// import { fetchCustomers, fetchProdukById } from '@/app/lib/data';
// import EditProdukForm from '@/app/ui/produk/edit-form';
 
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
//       <EditProdukForm produk={produk} customers={customers} />
//     </main>
//   );
// }
    
import Form from '@/app/ui/produk/edit-form'; 
import Breadcrumbs from '@/app/ui/produk/breadcrumbs';
import { fetchProdukById, fetchCustomers } from '@/app/lib/data';
import { notFound } from 'next/navigation';
// Rename the component to match the export (and its likely usage)
import EditProdukForm from '@/app/ui/produk/edit-form'; 

export default async function EditProdukPage({ params }: { params: { id: string } }) {
  const id = params.id;

  // Fetch data concurrently for efficiency
  const [produk, customers] = await Promise.all([
    fetchProdukById(id),
    fetchCustomers(),
  ]);

  if (!produk) {
    // Handle the case where the product isn't found
    // You might redirect to an error page or show a "Not Found" message
    return <div>Produk tidak ditemukan.</div>; 
  }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Produk', href: '/dashboard/produk' },
          {
            label: 'Edit Produk',
            href: `/dashboard/produk/${id}/edit`,
            active: true,
          },
        ]}
      />
      <EditProdukForm produk={produk} customer={customers} /> 
    </main>
  );
}
