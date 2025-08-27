import { SubjectName } from '@/types/auth';
import { BsAppIndicator } from 'react-icons/bs';
import { GiMatterStates } from 'react-icons/gi';
import { GoTasklist } from 'react-icons/go';
import { IoBarChartOutline } from 'react-icons/io5';
import {
  LuKeyRound,
  LuLayoutDashboard,
  LuRadius,
  LuUser,
  LuUsers,
} from 'react-icons/lu';
import { MdOutlineWebhook } from 'react-icons/md';
import { TbTemplate } from 'react-icons/tb';

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
    title: 'Tickets',
    route: '/tickets',
    icon: BsAppIndicator,
    object: SubjectName.Tickets,
  },
  {
    id: 2,
    title: 'States',
    route: '/states',
    icon: GiMatterStates,
    object: SubjectName.States,
  },
  {
    id: 4,
    title: 'My tasks',
    icon: GoTasklist,
    route: '/tasks',
    object: SubjectName.Tasks,
  },
  {
    id: 5,
    title: 'Users',
    route: '/users',
    icon: LuUser,
    object: SubjectName.Users,
  },
  {
    id: 6,
    title: 'Customers',
    icon: LuUsers,
    route: '/customers',
    object: SubjectName.Customers,
  },
  {
    id: 7,
    title: 'Configurations',
    route: '/pipeline-configurations',
    icon: TbTemplate,
    object: SubjectName.StatePipelines,
  },
  {
    id: 8,
    title: 'Reports',
    route: '/reports',
    icon: IoBarChartOutline,
    object: SubjectName.Reports,
  },
  {
    id: 9,
    title: 'Roles',
    route: '/roles',
    icon: LuRadius,
    object: SubjectName.Roles,
  },
  {
    id: 10,
    title: 'API Keys',
    route: '/api-keys',
    icon: LuKeyRound,
    object: SubjectName.Roles,
  },
  {
    id: 11,
    title: 'Webhooks',
    route: '/webhooks',
    icon: MdOutlineWebhook,
    object: SubjectName.Roles,
  },
];
