import db from './db';

export const fetchFeaturedProducts = () => {
  const featuredProducts = db.product.findMany({
    where: {
      featured: true,
    },
  });

  return featuredProducts;
};

export const fetchAllProducts = async () => {
  const allProducts = db.product.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

  return allProducts;
};
