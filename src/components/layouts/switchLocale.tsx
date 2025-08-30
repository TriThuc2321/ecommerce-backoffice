import { useTranslations } from 'next-intl';
import { useParams, useRouter } from 'next/navigation';

import { Button } from '@heroui/button';
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@heroui/dropdown';
import { cn } from '@heroui/theme';

import FlagUSIcon from '@/assets/icons/flag-us.svg';
import FlagVNIcon from '@/assets/icons/flag-vi.svg';
import { LOCALE } from '@/constants/locale';
import { usePathname } from '@/i18n/navigation';

export default function SwitchLocale() {
  const t = useTranslations('Locale');
  const { locale } = useParams();
  const pathname = usePathname();
  const router = useRouter();

  const iconClasses =
    'text-sm size-6 text-default-500 pointer-events-none shrink-0';

  const onSwitchLocale = (locale: string) => {
    router.push(`/${locale}${pathname}`);
  };

  return (
    <Dropdown className="bg-primary-50">
      <DropdownTrigger>
        <Button
          color="primary"
          variant="light"
          isIconOnly
          className="rounded-full"
        >
          {locale === LOCALE.VI ? (
            <FlagVNIcon className={iconClasses} />
          ) : (
            <FlagUSIcon className={iconClasses} />
          )}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        classNames={{
          list: 'gap-2',
        }}
        aria-label="Locale"
        variant="solid"
      >
        <DropdownItem
          startContent={<FlagVNIcon className={iconClasses} />}
          onPress={() => onSwitchLocale(LOCALE.VI)}
          key="vi"
          color="primary"
          className={cn({
            'bg-default text-default-foreground font-bold':
              locale === LOCALE.VI,
          })}
        >
          {t('vi')}
        </DropdownItem>
        <DropdownItem
          startContent={<FlagUSIcon className={iconClasses} />}
          onPress={() => onSwitchLocale(LOCALE.EN)}
          key="en"
          color="primary"
          className={cn({
            'bg-default text-default-foreground font-bold':
              locale === LOCALE.EN,
          })}
        >
          {t('en')}
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
