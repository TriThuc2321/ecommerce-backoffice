import { IoDocumentTextOutline } from 'react-icons/io5';
import { LuLayoutDashboard, LuRadius, LuUsers } from 'react-icons/lu';
import { PiChalkboardTeacher, PiStudent } from 'react-icons/pi';

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
    title: 'students',
    route: '/students',
    icon: PiStudent,
    object: SubjectName.Students,
  },
  {
    id: 2,
    title: 'teachers',
    route: '/teachers',
    icon: PiChalkboardTeacher,
    object: SubjectName.Teachers,
  },
  {
    id: 3,
    title: 'onlineTests',
    route: '/online-tests',
    icon: IoDocumentTextOutline,
    object: SubjectName.OnlineTests,
  },
  {
    id: 4,
    title: 'users',
    route: '/users',
    icon: LuUsers,
    object: SubjectName.Users,
  },
  {
    id: 5,
    title: 'roles',
    route: '/roles',
    icon: LuRadius,
    object: SubjectName.Roles,
  },
];
