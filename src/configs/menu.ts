import {
  IoBagOutline,
  IoDocumentTextOutline,
  IoFileTrayFullOutline,
  IoLayersOutline,
  IoNewspaperOutline,
} from 'react-icons/io5';
import { LuLayoutDashboard, LuRadius, LuUsers } from 'react-icons/lu';

import { SubjectName } from '@/types/auth';

export const MENU_LIST = [
  {
    id: 0,
    title: 'Dashboard',
    route: '/',
    icon: LuLayoutDashboard,
    object: SubjectName.Dashboard,
  },
  {
    id: 1,
    title: 'Products',
    route: '/products',
    icon: IoFileTrayFullOutline,
    object: SubjectName.Products,
  },
  {
    id: 2,
    title: 'Categories',
    route: '/categories',
    icon: IoLayersOutline,
    object: SubjectName.Categories,
  },
  {
    id: 4,
    title: 'Orders',
    icon: IoBagOutline,
    route: '/orders',
    object: SubjectName.Orders,
  },
  {
    id: 5,
    title: 'Invoices',
    route: '/invoices',
    icon: IoDocumentTextOutline,
    object: SubjectName.Invoices,
  },
  {
    id: 6,
    title: 'Blogs',
    icon: IoNewspaperOutline,
    route: '/blogs',
    object: SubjectName.Blogs,
  },
  {
    id: 7,
    title: 'Users',
    route: '/users',
    icon: LuUsers,
    object: SubjectName.Users,
  },
  {
    id: 8,
    title: 'Roles',
    route: '/roles',
    icon: LuRadius,
    object: SubjectName.Roles,
  },
];
