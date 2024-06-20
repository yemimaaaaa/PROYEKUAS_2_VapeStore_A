import { sql } from '@vercel/postgres';
import {
  CustomerField,
  CustomersTableType,
  ProdukTableType,
  InvoiceForm,
  InvoicesTable,
  LatestInvoiceRaw,
  User,
  Dummy,
  Revenue,
  Customers,
  Produk,
  PesananTableType,
  ProdukForm,
  CustomersForm,
  ProdukField,
  PesananForm,
  // CustomersTable,
} from './definitions';
import { formatCurrency } from './utils';
import { unstable_noStore as noStore, unstable_noStore } from 'next/cache'; 
import { error } from 'console';
import { dummy } from './placeholder-data';
 
export async function fetchRevenue() {
  // Add noStore() here to prevent the response from being cached.
  // This is equivalent to in fetch(..., {cache: 'no-store'}).
  noStore();

  try {
    // Artificially delay a response for demo purposes.
    // Don't do this in production :)
 
    console.log('Fetching revenue data...');
    await new Promise((resolve) => setTimeout(resolve, 3000));
 
    const data = await sql<Revenue>`SELECT * FROM revenue`;
 
    console.log('Data fetch completed after 3 seconds.');
 
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.');
  }
}
 
export async function fetchLatestInvoices() {
  noStore();
  try {
    const data = await sql<LatestInvoiceRaw>`
      SELECT invoices.total_harga, customers.nama, customers.image_url, invoices.id
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      ORDER BY invoices.date DESC
      LIMIT 6`;  
 
    const latestInvoices = data.rows.map((invoices) => ({
      ...invoices,
      amount: formatCurrency(invoices.total_harga),
    }));
    return latestInvoices;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch the latest invoices.');
  }
}
 
export async function fetchCardData() {
noStore();
  try {
    // You can probably combine these into a single SQL query
    // However, we are intentionally splitting them to demonstrate
    // how to initialize multiple queries in parallel with JS.
    const invoicesCountPromise = sql`SELECT COUNT(*) FROM invoices`;
    const customersCountPromise = sql`SELECT COUNT(*) FROM customers`;
    const invoicesStatusPromise = sql`SELECT
         SUM(CASE WHEN status = 'paid' THEN total_harga ELSE 0 END) AS "paid",
         SUM(CASE WHEN status = 'pending' THEN total_harga ELSE 0 END) AS "pending"
         FROM invoices`;
 
    const data = await Promise.all([
      invoicesCountPromise,
      customersCountPromise,
      invoicesStatusPromise,
    ]);
 
    const numberOfInvoices = Number(data[0].rows[0].count ?? '0');
    const numberOfCustomers = Number(data[1].rows[0].count ?? '0');
    const totalPaidInvoices = formatCurrency(data[2].rows[0].paid ?? '0');
    const totalPendingInvoices = formatCurrency(data[2].rows[0].pending ?? '0');
 
    return {
      numberOfCustomers,
      numberOfInvoices,
      totalPaidInvoices,
      totalPendingInvoices,
    };
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch card data.');
  }
}
 
const ITEMS_PER_PAGE = 6;

// export async function fetchFilteredInvoices(query: string, currentPage: number) {
//   const offset = (currentPage - 1) * ITEMS_PER_PAGE;
//   noStore();
//   try {
//     const invoices = await sql<InvoicesTable>`
//       SELECT i.id, i.total_harga, i.date, i.status, i.kuantitas,
//              c.nama, c.pesanan, c.no_telp, c.image_url, c.gender
//       FROM invoices i 
//       JOIN customers c ON i.customer_id = c.id
//       WHERE c.nama ILIKE ${`%${query}%`} 
//          OR c.pesanan ILIKE ${`%${query}%`} 
//          OR c.no_telp ILIKE ${`%${query}%`} 
//          OR c.gender ILIKE ${`%${query}%`}
//          OR i.kuantitas ILIKE ${`%${query}%`}  -- Cast kuantitas to text
//          OR i.total_harga::text ILIKE ${`%${query}%`} 
//          OR i.date::text ILIKE ${`%${query}%`} 
//          OR i.status ILIKE ${`%${query}%`}
//       ORDER BY i.date DESC
//       LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
//     `;
//     return invoices.rows;
//   } catch (error) {
//     console.error('Database Error:', error);
//     throw new Error('Failed to fetch invoices.');
//   }
// }
export async function fetchFilteredInvoices(
  query: string,
  currentPage: number,
) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  noStore();
  try {
    const invoices = await sql<InvoicesTable>`
      SELECT
        invoices.id,
        invoices.total_harga,
        invoices.date,
        invoices.status,
        invoices.pembayaran,
        customers.nama,
        customers.no_telp,
        customers.image_url
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      WHERE
        customers.nama ILIKE ${`%${query}%`} OR
        customers.no_telp ILIKE ${`%${query}%`} OR
        invoices.total_harga::text ILIKE ${`%${query}%`} OR
        invoices.date::text ILIKE ${`%${query}%`} OR
        invoices.status ILIKE ${`%${query}%`} OR
        invoices.pembayaran ILIKE ${`%${query}%`}
      ORDER BY invoices.date DESC
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `;
 
    return invoices.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoices.');
  }
}

export async function fetchInvoicesPages(query: string) {
  noStore();
  try {
    const count = await sql`SELECT COUNT(*)
    FROM invoices
    JOIN customers ON invoices.customer_id = customers.id
    WHERE
      customers.nama ILIKE ${`%${query}%`} OR
      customers.no_telp ILIKE ${`%${query}%`} OR
      invoices.total_harga::text ILIKE ${`%${query}%`} OR
      invoices.date::text ILIKE ${`%${query}%`} OR
      invoices.status ILIKE ${`%${query}%`} OR
      invoices.pembayaran ILIKE ${`%${query}%`}
  `;
 
    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of invoices.');
  }
}

// // export async function fetchReservationsWithId(id: string) {
// //   noStore();
// //   try {
// //     const data = await sql<ReservationsForm>`
// //       SELECT
// //         reservations.id,
// //         reservations.customer_id,
// //         reservations.amount,
// //         reservations.status
// //       FROM reservations
// //       WHERE reservations.id = ${id};
// //     `;

// //     const reservation = data.rows.map((reservation) => ({
// //       ...reservation,
// //       // Convert amount from cents to dollars
// //       amount: reservation.amount / 100,
// //     }));

// //     return reservation[0];
// //   } catch (error) {
// //     console.error('Database Error:', error);
// //     throw new Error('Failed to fetch reservations.');
// //   }
// // }

// // export async function fetchReservationsById(id: string) {
// //   noStore();
// //   try {
// //     const data = await sql<ReservationsForm>`
// //       SELECT
// //         reservations.id,
// //         reservations.customer_id,
// //         reservations.amount,
// //         reservations.status
// //       FROM reservations
// //       WHERE reservations.id = ${id};
// //     `;

// //     const reservation = data.rows.map((reservation) => ({
// //       ...reservation,
// //       // Convert amount from cents to dollars
// //       amount: reservation.amount / 100,
// //     }));
    
// //     console.log(reservations);
// //     return reservation[0];
// //   } catch (error) {
// //     console.error('Database Error:', error);
// //     throw new Error('Failed to fetch reservations.');
// //   }
// // }
  
export async function fetchFilteredCustomers(
  query: string,
  currentPage: number,
) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  noStore();
  try {
    const data = await sql<CustomersTableType>`
    SELECT
      customers.id,
      customers.nama,
      customers.no_telp,
      customers.pesanan,
      customers.date,
      customers.image_url,
      customers.gender,
      COUNT(invoices.id) AS total_invoices,
      SUM(CASE WHEN invoices.status = 'paid' THEN invoices.total_harga ELSE 0 END) AS total_paid
    FROM customers
    LEFT JOIN invoices ON customers.id = invoices.customer_id
    WHERE
      customers.nama ILIKE ${`%${query}%`} OR
      customers.no_telp ILIKE ${`%${query}%`}
    GROUP BY customers.id, customers.nama, customers.no_telp, customers.pesanan, customers.date, customers.image_url, customers.gender
    ORDER BY customers.nama ASC
    LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `;
 
    const customers = data.rows.map((customer) => ({
      ...customer,
      total_paid: formatCurrency(customer.total_paid),
    }));
 
    return customers;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch customer table.');
  }
}
 
export async function getUser(email: string) {
  try {
    const user = await sql`SELECT * FROM users WHERE email=${email}`;
    return user.rows[0] as User;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}

export async function getDummy(email: string) {
  try {
    const dummy = await sql`SELECT * FROM dummy WHERE email=${email}`;
    return dummy.rows[0] as Dummy;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}
 
export async function fetchCustomersPages(query: string) {
  try {
    const count = await sql`
      SELECT COUNT(*)
      FROM customers
      WHERE customers.nama ILIKE ${`%${query}%`} OR
            customers.no_telp ILIKE ${`%${query}%`} 
    `;
    const totalCount = Number(count.rows[0].count) || 0;
    const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of customers.');
  }
}

// fix
export async function fetchCustomersById(id: string) {
  unstable_noStore();
  try {
    // await new Promise((resolve) => setTimeout(resolve,5000));
    const data = await sql<CustomersForm>`
      SELECT
        customers.id,
        customers.nama,
        customers.no_telp,
        customers.pesanan,
        customers.image_url,
        customers.gender
      FROM customers
      WHERE customers.id = ${id};
    `;
 
    const customer = data.rows.map((customer) => ({
      ...customer,
    }));
 
    console.log(customer); // Invoice is an empty array []
    return customer[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch customer.');
  }
}

// export async function fetchCustomersById(id: string) {
//   noStore(); 
//   try {
//     const data = await sql<CustomersForm>`
//       SELECT id, nama, no_telp, pesanan, image_url, gender
//       FROM customers
//       WHERE id = ${id};
//     `;

//     if (data.rows.length === 0) {
//       return null;  // Return null if no customer found
//     }
//     return data.rows[0]; 
//   } catch (error) {
//     console.error('Database Error:', error);
//     throw new Error('Failed to fetch customer.');
//   }
// }

export async function fetchProdukPages(query: string) {
  try {
    const count = await sql`
      SELECT COUNT(*)
      FROM produk
      WHERE produk.nama ILIKE ${`%${query}%`} OR
            produk.kategori ILIKE ${`%${query}%`} OR
            produk.garansi ILIKE ${`%${query}%`}
    `;
    const totalCount = Number(count.rows[0].count) || 0;
    const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of produk.');
  }
}

export async function fetchFilteredProduk(
  query: string,
  currentPage: number,
) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  noStore();
  try {
    const data = await sql<ProdukTableType>`
      SELECT
        produk.id,
        produk.nama,
        produk.kategori,
        produk.harga,
        produk.stok,
        produk.date,
        produk.image_url,
        produk.garansi
      FROM produk
      WHERE
        produk.nama ILIKE ${`%${query}%`} OR
        produk.kategori ILIKE ${`%${query}%`}
      GROUP BY
        produk.id,
        produk.nama,
        produk.kategori,
        produk.harga,
        produk.stok,
        produk.date,
        produk.image_url,
        produk.garansi
      ORDER BY
        produk.nama ASC
      LIMIT
        ${ITEMS_PER_PAGE} OFFSET ${offset};
    `;
    return data.rows; 
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch produk table.');
  }
}

// export async function fetchFilteredPesanan(query: string, currentPage: number) {
//   const offset = (currentPage - 1) * ITEMS_PER_PAGE;
//   noStore(); // Assuming this is a function to disable caching

//   try {
//     const data = await sql<PesananTableType>`
//       SELECT
//           pesanan.id,
//           pesanan.nama,
//           pesanan.harga,
//           pesanan.barang,
//           pesanan.jumlah,
//           pesanan.date,
//           pesanan.keterangan,
//           pesanan.image_url
//           FROM pesanan
//       WHERE
//           pesanan.nama ILIKE ${`%${query}%`} OR 
//           pesanan.barang ILIKE ${`%${query}%`} 
//       GROUP BY
//           pesanan.id,
//           pesanan.nama,
//           pesanan.harga,
//           pesanan.barang,
//           pesanan.jumlah,
//           pesanan.date,
//           pesanan.keterangan,
//           pesanan.image_url
//       ORDER BY
//         pesanan.nama ASC
//       LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset};
//     `;

//     return data.rows;
//   } catch (error) {
//     console.error('Database Error:', error);
//     throw new Error('Failed to fetch pesanan table.');
//   }
// }

export async function fetchCustomers() {
  try {
    const data = await sql<CustomerField>`
      SELECT id, nama, no_telp, pesanan, date, image_url, gender
      FROM customers
      ORDER BY nama ASC
    `;

    if (data.rows.length === 0) {
      return []; // Atau penanganan lain jika tidak ada data
    }
    return data.rows;

  } catch (err) {
    console.error('Database Error:', err);
    throw new Error(`Failed to fetch all customers`); 
  }
}

//fix
// export async function fetchInvoicesById(id: string) {
//   noStore();
//   try {
//     const data = await sql<InvoiceForm>`
//       SELECT
//         invoices.id,
//         invoices.customer_id,
//         invoices.total_harga,
//         invoices.status,
//         invoices.image_url
//       FROM invoices
//       WHERE invoices.id = ${id};
//     `;

//     const invoice = data.rows.map((invoice) => ({
//       ...invoice,
//       // Convert amount from cents to dollars
//       total_harga: invoice.total_harga / 100,
//     }));
    
//     console.log(invoice); // Invoice is an empty array []
//     return invoice[0];
//   } catch (error) {
//     console.error('Database Error:', error);
//     throw new Error('Failed to fetch invoice.');
//   }
// }
export async function fetchInvoiceById(id: string) {
  noStore();
  try {
    const data = await sql<InvoiceForm>`
      SELECT
        invoices.id,
        invoices.customer_id,
        invoices.total_harga,
        invoices.status,
        invoices.pembayaran
      FROM
        invoices 
      WHERE
        invoices.id = ${id};
    `;

    if (!data.rows.length) {
      throw new Error(`Invoice with id ${id} not found`);
    }

    const invoice = data.rows[0];
    invoice.total_harga = invoice.total_harga / 100; // Convert amount from cents to dollars

    console.log(invoice);
    return invoice;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoice.');
  }
}

export async function fetchProdukById(id: string) {
  noStore();
  try {
    const data = await sql<ProdukForm>`
      SELECT
        produk.id,
        produk.nama,
        produk.kategori,
        produk.harga,
        produk.stok,
        produk.date,
        produk.image_url,
        produk.garansi
      FROM produk
      WHERE produk.id = ${id};
    `;

    const produk = data.rows.map((produk) => ({
      ...produk,
      // Convert amount from cents to dollars
      harga: produk.harga / 100,
    }));
    
    console.log(produk); // Invoice is an empty array []
    return produk[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch produk.');
  }
}

export async function fetchProduk() {
  try {
    const data = await sql<ProdukField>`
      SELECT id, nama, produk, kategori, garansi
      FROM produk
      ORDER BY nama ASC
    `;

    if (data.rows.length === 0) {
      return []; // Atau penanganan lain jika tidak ada data
    }
    return data.rows;

  } catch (err) {
    console.error('Database Error:', err);
    throw new Error(`Failed to fetch all customers`); 
  }
}

//PESANAN
export async function fetchFilteredPesanan(
  query: string, 
  currentPage: number) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  noStore(); // Assuming this is a function to disable caching

  try {
    const pesanan = await sql<PesananTableType>`
      SELECT
          pesanan.id,
          pesanan.customers_id,
          pesanan.harga,
          pesanan.barang,
          pesanan.jumlah,
          pesanan.date,
          pesanan.keterangan,
          pesanan.image_url,
          customers.nama
      FROM pesanan
      JOIN customers ON pesanan.customer_id = customers.id
      WHERE
          pesanan.id ILIKE ${`%${query}%`} OR
          pesanan.customers_id ILIKE ${`%${query}%`} OR
          pesanan.harga::text ILIKE ${`%${query}%`} OR
          pesanan.barang ILIKE ${`%${query}%`} OR
          pesanan.jumlah::text ILIKE ${`%${query}%`} OR
          pesanan.date::text ILIKE ${`%${query}%`} OR
          pesanan.keterangan ILIKE ${`%${query}%`} OR
          pesanan.image_url ILIKE ${`%${query}%`}
      ORDER BY customers.nama ASC
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset};
    `;

    return pesanan.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch pesanan table.');
  }
}

export async function fetchPesananPages(query: string) {
  try {
    const count = await sql`
      SELECT COUNT(*)
      FROM pesanan
      JOIN customers ON pesanan.customer_id = customers.id
      WHERE 
        pesanan.id ILIKE ${`%${query}%`} OR
        customers.id ILIKE ${`%${query}%`} OR
        pesanan.harga::text ILIKE ${`%${query}%`} OR
        pesanan.barang ILIKE ${`%${query}%`} OR
        pesanan.jumlah::text ILIKE ${`%${query}%`} OR
        pesanan.date::text ILIKE ${`%${query}%`} OR
        pesanan.keterangan ILIKE ${`%${query}%`} OR
        pesanan.image_url ILIKE ${`%${query}%`}
  `;
    // const totalCount = count.rows[0].count ? parseInt(count.rows[0].count, 10) : 0;
    // const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);
    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of pesanan.');
  }
}

export async function fetchPesananById(id: string) {
  noStore();
  try {
    const data = await sql<PesananForm>`
      SELECT
        pesanan.id,
        pesanan.customer_id,
        pesanan.harga,
        pesanan.barang,
        pesanan.jumlah,
        pesanan.date,
        pesanan.keterangan,
        pesanan.image_url
      FROM pesanan
      WHERE pesanan.id = ${id};
    `;

    const pesanan = data.rows.map((pesanan) => ({
      ...pesanan,
      image_url: pesanan.image_url || 'default-image-url.jpg'
    }));

    // console.log(pesanan); 
    return pesanan[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch pesanan.');
  }
}
