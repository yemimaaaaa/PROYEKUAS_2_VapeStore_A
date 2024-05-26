const { db } = require('@vercel/postgres');
const {
  invoices,
  produk,
  customers,
  revenue,
  users,
} = require('../app/lib/placeholder-data.js');
const bcrypt = require('bcrypt');

async function seedUsers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
      );
    `;

    console.log(`Created "users" table`);

    // Insert data into the "users" table
    const insertedUsers = await Promise.all(
      users.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return client.sql`
        INSERT INTO users (id, name, email, password)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedUsers.length} users`);

    return {
      createTable,
      users: insertedUsers,
    };
  } catch (error) {
    console.error('Error seeding users:', error);
    throw error;
  }
}

async function seedCustomers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "customer" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS customers (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        nama VARCHAR(255) NOT NULL,
        no_telp VARCHAR(255) NOT NULL,
        pesanan VARCHAR(255) NOT NULL,
        date DATE NOT NULL,
        image_url VARCHAR(255) NOT NULL
      );
    `;

    console.log(`Created "customers" table`);

    // Insert data into the "customer" table
    const insertedCustomers = await Promise.all(
      customers.map(
        (customer) => client.sql`
        INSERT INTO customers (id, nama, no_telp, pesanan, date, image_url)
        VALUES (${customer.id}, ${customer.nama}, ${customer.no_telp}, ${customer.pesanan}, ${customer.date}, ${customer.image_url})
        ON CONFLICT (id) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedCustomers.length} customers`);

    return {
      createTable,
      customers: insertedCustomers,
    };
  } catch (error) {
    console.error('Error seeding customer:', error);
    throw error;
  }
}
async function seedProduk(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "produk" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS produk (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        id_produk UUID NOT NULL,
        nama VARCHAR(255) NOT NULL,
        kategori VARCHAR(255) NOT NULL,
        harga INT NOT NULL,
        stok INT NOT NULL,
        date DATE NOT NULL,
        image_url VARCHAR(255) DEFAULT 'default_image_url'
      );
    `;

    console.log(`Created "produk" table`);

    // Insert data into the "produk" table
    const insertedProduk = await Promise.all(
      produk.map(
        (produk) => client.sql`
        INSERT INTO produk (id_produk, nama, kategori, harga, stok, date, image_url)
        VALUES (${produk.id_produk}, ${produk.nama}, ${produk.kategori}, ${produk.harga}, ${produk.stok}, ${produk.date}, ${produk.image_url || 'default_image_url'})
        ON CONFLICT (id) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedProduk.length} produk`);

    return {
      createTable,
      produk: insertedProduk,
    };
  } catch (error) {
    console.error('Error seeding produk:', error);
    throw error;
  }
}

// async function seedProduk(client) {
//   try {
//     await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

//     // Create the "produk" table if it doesn't exist
//     const createTable = await client.sql`
//       CREATE TABLE IF NOT EXISTS produk (
//         id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//         id_produk UUID NOT NULL,
//         nama VARCHAR(255) NOT NULL,
//         kategori VARCHAR(255) NOT NULL,
//         harga INT NOT NULL,
//         stok INT NOT NULL,
//         date DATE NOT NULL,
//         image_url VARCHAR(255) DEFAULT 'default_image_url'
//       );
//     `;

//     console.log(`Created "produk" table`);

//     // Insert data into the "produk" table
//     const insertedProduk = await Promise.all(
//       produk.map(
//         (produk) => client.sql`
//         INSERT INTO produk (id_produk, nama, kategori, harga, stok, date, image_url)
//         VALUES (${produk.id_produk}, ${produk.nama}, ${produk.kategori}, ${produk.harga}, ${produk.stok}, ${produk.date}, ${produk.image_url || 'default_image_url'})
//         ON CONFLICT (id) DO NOTHING;
//       `,
//       ),
//     );

//     console.log(`Seeded ${insertedProduk.length} produk`);

//     return {
//       createTable,
//       produk: insertedProduk,
//     };
//   } catch (error) {
//     console.error('Error seeding produk:', error);
//     throw error;
//   }
// }

async function seedInvoices(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "transaksi" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS invoices (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        customer_id UUID NOT NULL,
        total_harga INT NOT NULL,
        status VARCHAR(255) NOT NULL,
        kuantitas VARCHAR(255) NOT NULL,
        date DATE NOT NULL,
        image_url VARCHAR(255) NOT NULL
      );
    `;

    console.log(`Created "invoices" table`);

    // Insert data into the "transaksi" table
    const insertedInvoices = await Promise.all(
      invoices.map(
        (invoices) => client.sql`
        INSERT INTO invoices (customer_id, total_harga, status, kuantitas, date, image_url)
        VALUES (${invoices.customer_id}, ${invoices.total_harga}, ${invoices.status}, ${invoices.kuantitas}, ${invoices.date}, ${invoices.image_url || 'default_image_url'})
        ON CONFLICT (id) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedInvoices.length} invoices`);

    return {
      createTable,
      invoices: insertedInvoices,
    };
  } catch (error) {
    console.error('Error seeding invoices:', error);
    throw error;
  }
}

// async function seedInvoices(client) {
//   try {
//     await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

//     // Create the "invoices" table if it doesn't exist
//     const createTable = await client.sql`
//     CREATE TABLE IF NOT EXISTS invoices (
//     id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//     customer_id UUID NOT NULL,
//     amount INT NOT NULL,
//     status VARCHAR(255) NOT NULL,
//     date DATE NOT NULL
//   );
// `;

//     console.log(`Created "invoices" table`);

//     // Insert data into the "invoices" table
//     const insertedInvoices = await Promise.all(
//       invoices.map(
//         (invoice) => client.sql`
//         INSERT INTO invoices (customer_id, amount, status, date)
//         VALUES (${invoice.customer_id}, ${invoice.amount}, ${invoice.status}, ${invoice.date})
//         ON CONFLICT (id) DO NOTHING;
//       `,
//       ),
//     );

//     console.log(`Seeded ${insertedInvoices.length} invoices`);

//     return {
//       createTable,
//       invoices: insertedInvoices,
//     };
//   } catch (error) {
//     console.error('Error seeding invoices:', error);
//     throw error;
//   }
// }

// async function seedRevenue(client) {
//   try {
//     await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

//     // Create the "customers" table if it doesn't exist
//     const createTable = await client.sql`
//       CREATE TABLE IF NOT EXISTS revenue (
//         id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//         name VARCHAR(255) NOT NULL,
//         email VARCHAR(255) NOT NULL,
//         image_url VARCHAR(255) NOT NULL
//       );
//     `;
//     console.log(`Created "customers" table`);

//     // Insert data into the "customers" table
//     const insertedCustomers = await Promise.all(
//       customers.map(
//         (customer) => client.sql`
//         INSERT INTO customers (id, name, email, image_url)
//         VALUES (${customer.id}, ${customer.name}, ${customer.email}, ${customer.image_url})
//         ON CONFLICT (id) DO NOTHING;
//       `,
//       ),
//     );

//     console.log(`Seeded ${insertedCustomers.length} customers`);

//     return {
//       createTable,
//       customers: insertedCustomers,
//     };
//   } catch (error) {
//     console.error('Error seeding customers:', error);
//     throw error;
//   }
// }

// async function seedRevenue(client) {
//   try {
//     // Create the "revenue" table if it doesn't exist
//     const createTable = await client.sql`
//       CREATE TABLE IF NOT EXISTS revenue (
//         month VARCHAR(4) NOT NULL UNIQUE,
//         revenue INT NOT NULL
//       );
//     `;

//     console.log(`Created "re" table`);

//     // Insert data into the "revenue" table
//     const insertedRevenue = await Promise.all(
//       revenue.map(
//         (rev) => client.sql`
//         INSERT INTO revenue (month, revenue)
//         VALUES (${rev.month}, ${rev.revenue})
//         ON CONFLICT (month) DO NOTHING;
//       `,
//       ),
//     );

//     console.log(`Seeded ${insertedRevenue.length} revenue`);

//     return {
//       createTable,
//       revenue: insertedRevenue,
//     };
//   } catch (error) {
//     console.error('Error seeding revenue:', error);
//     throw error;
//   }
// }

async function seedRevenue(client) {
  try {
    // Create the "revenue" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS revenue (
        month VARCHAR(4) NOT NULL UNIQUE,
        revenue INT NOT NULL
      );
    `;
 
    console.log(`Created "revenue" table`);
 
    // Insert data into the "revenue" table
    const insertedRevenue = await Promise.all(
      revenue.map(
        (rev) => client.sql`
        INSERT INTO revenue (month, revenue)
        VALUES (${rev.month}, ${rev.revenue})
        ON CONFLICT (month) DO NOTHING;
      `,
      ),
    );
 
    console.log(`Seeded ${insertedRevenue.length} revenue`);
 
    return {
      createTable,
      revenue: insertedRevenue,
    };
  } catch (error) {
    console.error('Error seeding revenue:', error);
    throw error;
  }
}
 

async function main() {
  const client = await db.connect();
  await seedUsers(client);
  await seedProduk(client);
  await seedCustomers(client);
  await seedInvoices(client);
  await seedRevenue(client);
  await client.end();
}

main().catch((error) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    error,
  );

});

