'use client';

import Cookies from 'js-cookie';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { IoIosLogOut } from 'react-icons/io';
import type { IconType } from 'react-icons/lib';
import { LuChevronLeft } from 'react-icons/lu';

import type { SubjectType } from '@casl/ability';
import { Button } from '@heroui/button';
import { cn } from '@heroui/theme';

import logo from '@/assets/images/logo.png';
import RenderIf from '@/components/shared/RenderIf';
import { Can } from '@/configs/casl/can.config';
import { MENU_LIST } from '@/configs/menu';
import { Link } from '@/i18n/navigation';
import { PermissionAction } from '@/types/auth';

interface ISideBarProps {
  isOpen: boolean;
  handleOpen: (isOpen: boolean) => void;
}

export default function Sidebar({ isOpen, handleOpen }: ISideBarProps) {
  const [showFullMenu, setShowFullMenu] = useState(true);

  const handleShowFullMenu = (isOpen: boolean) => {
    setShowFullMenu(isOpen);
    Cookies.set('showFullMenu', isOpen.toString());
  };

  return (
    <>
      <div
        className={cn(
          'bg-primary-50 md:transition-width absolute -left-[300px] z-[1001] flex h-full flex-col p-2 transition-transform !duration-[0.3s] max-md:max-h-[calc(100vh-32px)] lg:relative lg:left-0',
          {
            'left-[1rem]': isOpen,
            'w-[76px]': !showFullMenu,
            'w-[320px]': showFullMenu,
          },
        )}
      >
        <Button
          isIconOnly
          color="primary"
          variant="solid"
          className={cn(
            'absolute top-10 -right-3 size-6 min-w-6 rounded-full',
            {
              'rotate-180': !showFullMenu,
            },
          )}
          onPress={() => handleShowFullMenu(!showFullMenu)}
        >
          <LuChevronLeft className="text-lg" />
        </Button>
        <Link href="/">
          <Image
            className="mx-auto mt-4 size-14 rounded-md"
            src={logo}
            alt="Logo"
          />
        </Link>

        <div className="flex h-full flex-col gap-2 overflow-y-auto py-4">
          {MENU_LIST.map(menu => (
            <Can
              I={PermissionAction.Read}
              a={menu.object as SubjectType}
              key={menu.id}
            >
              <MenuItem
                {...menu}
                handleOpen={handleOpen}
                showFullMenu={showFullMenu}
              />
            </Can>
          ))}
        </div>

        <div className="mt-auto flex justify-center pt-4">
          <Button
            onClick={() => {}}
            className={cn(
              'dark:border-foreground flex w-full items-center justify-start gap-6 border py-6',
              {
                'justify-center': !showFullMenu,
              },
            )}
            data-testid="logout-button"
            color="primary"
            variant="bordered"
            isIconOnly={!showFullMenu}
          >
            <IoIosLogOut className="dark:text-foreground text-xl" />
            {showFullMenu && (
              <p className="dark:text-foreground text-base font-medium">
                Logout
              </p>
            )}
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
  showFullMenu: boolean;
  handleOpen: (isOpen: boolean) => void;
};

const MenuItem = ({
  title,
  icon: Icon,
  route,
  handleOpen,
  showFullMenu,
}: IMenuItem) => {
  const currentRoute = usePathname();
  const routeWithoutLocale = `/${currentRoute.split('/').slice(2).join('/')}`;
  const t = useTranslations('Sidebar');

  const isActive = route === routeWithoutLocale;

  return (
    <Button
      className={cn(
        'dark:text-foreground flex w-full items-center justify-start gap-6 rounded-lg py-6 font-medium',
        {
          'font-bold': isActive,
          'justify-center': !showFullMenu,
        },
      )}
      color="primary"
      variant={isActive ? 'flat' : 'light'}
      as={Link}
      href={route}
      onPress={() => handleOpen(false)}
      isIconOnly={!showFullMenu}
    >
      <Icon className="text-xl" />
      {showFullMenu && <p className="text-sm">{t(title)}</p>}
    </Button>
  );
};
