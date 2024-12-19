import React from 'react';
import Link from 'next/link';
import EmptyList from '@/components/global/EmptyList';
import { fetchAdminProducts, deleteProductAction } from '@/utils/actions';
import { formatCurrency } from '@/utils/format';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { IconButton } from '@/components/form/FormButtons';
import FormContainer from '@/components/form/FormContainer';

const DeleteProduct = (productId: { productId: string }) => {
  //deleteProduct becomes a new function that, when called, automatically includes the productId argument
  //Binding ensures that deleteProductAction always receives the required productId
  const deleteProduct = deleteProductAction.bind(null, productId);

  return (
    <FormContainer action={deleteProduct}>
      <IconButton actionType='delete' />
    </FormContainer>
  );
};

const AdminProductsPage = async () => {
  const products = await fetchAdminProducts();
  if (products.length === 0) {
    return <EmptyList />;
  }

  return (
    <section>
      <Table>
        <TableCaption>Total Products: {products.length}</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Product Name</TableHead>
            <TableHead>Company</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => {
            const { id, name, company, price } = product;
            const formattedPrice = formatCurrency(price);
            return (
              <TableRow key={id}>
                <TableCell>
                  <Link
                    className='capitalize text-muted-foreground underline tracking-wide'
                    href={`/products/${id}`}
                  >
                    {name}
                  </Link>
                </TableCell>
                <TableCell>{company}</TableCell>
                <TableCell>{formattedPrice}</TableCell>
                <TableCell>
                  <div className='flex gap-x-2 items-center'>
                    <Link href={`/admin/products/${id}/edit`}>
                      <IconButton actionType='edit' />
                    </Link>
                    <DeleteProduct productId={id} />
                  </div>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </section>
  );
};

export default AdminProductsPage;
