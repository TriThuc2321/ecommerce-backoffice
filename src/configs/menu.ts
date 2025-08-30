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
    title: 'dashboard',
    route: '/',
    icon: LuLayoutDashboard,
    object: SubjectName.Dashboard,
  },
  {
    id: 1,
    title: 'products',
    route: '/products',
    icon: IoFileTrayFullOutline,
    object: SubjectName.Products,
  },
  {
    id: 2,
    title: 'categories',
    route: '/categories',
    icon: IoLayersOutline,
    object: SubjectName.Categories,
  },
  {
    id: 4,
    title: 'orders',
    icon: IoBagOutline,
    route: '/orders',
    object: SubjectName.Orders,
  },
  {
    id: 5,
    title: 'invoices',
    route: '/invoices',
    icon: IoDocumentTextOutline,
    object: SubjectName.Invoices,
  },
  {
    id: 6,
    title: 'blogs',
    icon: IoNewspaperOutline,
    route: '/blogs',
    object: SubjectName.Blogs,
  },
  {
    id: 7,
    title: 'users',
    route: '/users',
    icon: LuUsers,
    object: SubjectName.Users,
  },
  {
    id: 8,
    title: 'roles',
    route: '/roles',
    icon: LuRadius,
    object: SubjectName.Roles,
  },
];
