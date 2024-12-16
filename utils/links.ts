type NavLink = {
  href: string;
  label: string;
};

//links logged in users will see
export const links: NavLink[] = [
  { href: '/', label: 'home' },
  { href: '/about', label: 'about' },
  { href: '/products', label: 'products' },
  { href: '/favorites', label: 'favorites' },
  { href: '/cart', label: 'cart' },
  { href: '/orders', label: 'orders' },
  { href: '/admin/sales', label: 'dashboard' },
];

//links only admins will see
export const adminLinks: NavLink[] = [
  { href: '/admin/sales', label: 'sales' },
  { href: '/admin/products', label: 'my products' },
  { href: '/admin/products/create', label: 'create product' },
];
