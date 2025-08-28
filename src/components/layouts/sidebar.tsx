'use client';

import RenderIf from '@/components/shared/RenderIf';
import { Can } from '@/configs/casl/can.config';
import { MENU_LIST } from '@/configs/menu';
import { PermissionAction } from '@/types/auth';
import type { SubjectType } from '@casl/ability';
import { Button } from '@heroui/button';
import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IoIosLogOut } from 'react-icons/io';
import type { IconType } from 'react-icons/lib';

interface ISideBarProps {
  isOpen: boolean;
  handleOpen: (isOpen: boolean) => void;
}

export default function Sidebar({ isOpen, handleOpen }: ISideBarProps) {
  return (
    <>
      <div
        className={classNames(
          'bg-primary-50 absolute -left-[300px] z-[1001] flex h-full max-w-[280px] min-w-[280px] flex-col p-2 transition-transform !duration-[0.3s] max-md:max-h-[calc(100vh-32px)] lg:relative lg:left-0',
          { 'left-[1rem]': isOpen },
        )}
      >
        <Link href="/">
          {/* <Image
            className="mx-auto mt-2 size-12 rounded-md md:size-16"
            src={logo}
            alt="Logo"
          /> */}
          <p className="text-primary dark:text-foreground mt-4 text-center text-2xl font-bold">
            Toards
          </p>
        </Link>

        <div className="mt-4 flex h-full flex-col gap-2 overflow-y-auto py-4">
          {MENU_LIST.map(menu => (
            <Can
              I={PermissionAction.Read}
              a={menu.object as SubjectType}
              key={menu.id}
            >
              <MenuItem {...menu} handleOpen={handleOpen} />
            </Can>
          ))}
        </div>

        <div className="mt-auto flex justify-center pt-4">
          <Button
            onClick={() => {}}
            className="dark:border-foreground flex w-full items-center justify-start gap-6 border py-6"
            data-testid="logout-button"
            color="primary"
            variant="bordered"
          >
            <IoIosLogOut className="text-xl" />
            <p className="dark:text-foreground text-base font-medium">Logout</p>
          </Button>
        </div>
      </div>

      <RenderIf condition={isOpen}>
        <div
          className="absolute inset-0 z-[1000] bg-white/30 backdrop-blur-sm"
          onClick={() => handleOpen(false)}
        />
      </RenderIf>
    </>
  );
}

type IMenuItem = {
  title: string;
  id: number;
  route: string;
  icon: IconType;
  handleOpen: (isOpen: boolean) => void;
};

const MenuItem = ({ title, icon: Icon, route, handleOpen }: IMenuItem) => {
  const currentRoute = usePathname();

  const isActive =
    route === '/' ? route === currentRoute : currentRoute?.startsWith(route);

  return (
    <Button
      className={classNames(
        'dark:text-foreground w-full justify-start gap-6 rounded-lg py-6 font-medium',
        {
          'font-bold': isActive,
        },
      )}
      color="primary"
      variant={isActive ? 'flat' : 'light'}
      as={Link}
      href={route}
      onClick={() => handleOpen(false)}
    >
      <Icon className="text-xl" />
      <p className="text-sm">{title}</p>
    </Button>
  );
};
