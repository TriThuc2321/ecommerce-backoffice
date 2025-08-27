'use client';

import { ThemeMode } from '@/types/common';
import { Button } from '@heroui/button';
import classNames from 'classnames';
import { useTheme } from 'next-themes';
import { HiOutlineComputerDesktop } from 'react-icons/hi2';
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';

const ThemeSwitch = () => {
  const { setTheme, theme } = useTheme();
  const buttonClass =
    'h-8 min-h-8 w-8 min-w-8 rounded-full border-typography-secondary';

  return (
    <div className="absolute right-4 bottom-4 z-50 flex gap-2 rounded-full border p-1">
      <Button
        className={classNames(buttonClass, {
          'bg-typography-secondary': theme === ThemeMode.LIGHT,
        })}
        isIconOnly
        variant="light"
        onClick={() => setTheme(ThemeMode.LIGHT)}
      >
        <IoSunnyOutline size={16} />
      </Button>

      <Button
        className={classNames(buttonClass, {
          'bg-typography-secondary': theme === ThemeMode.SYSTEM,
        })}
        onClick={() => setTheme(ThemeMode.SYSTEM)}
        isIconOnly
        variant="light"
      >
        <HiOutlineComputerDesktop size={16} />
      </Button>

      <Button
        className={classNames(buttonClass, {
          'bg-typography-secondary': theme === ThemeMode.DARK,
        })}
        onClick={() => setTheme(ThemeMode.DARK)}
        isIconOnly
        variant="light"
      >
        <IoMoonOutline size={16} />
      </Button>
    </div>
  );
};

export default ThemeSwitch;
