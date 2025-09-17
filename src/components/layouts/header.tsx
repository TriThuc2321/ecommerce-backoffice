import { Button } from '@heroui/button';

import avatarDefault from '@/assets/images/default-avatar.jpg';
import { useGetProfile } from '@/hooks/apis/users';

import ImageFallback from '../shared/ImageFallback';
import SwitchLocale from './switchLocale';

export default function Header() {
  const { data: profile } = useGetProfile();

  const { firstName, lastName, email, avatar } = profile || {};

  return (
    <div className="flex items-center justify-between">
      <h5 className="font-bold">Welcome to My English</h5>

      <div className="flex items-center gap-2">
        <SwitchLocale />

        <Button className="h-12 pr-2 pl-3">
          <div>
            <p className="text-end text-sm font-semibold">
              {firstName} {lastName}
            </p>
            <p className="text-xs text-gray-500">{email}</p>
          </div>
          <ImageFallback
            alt="avatar"
            src={avatar ?? avatarDefault}
            width={32}
            height={32}
            className="rounded-lg"
          />
        </Button>
      </div>
    </div>
  );
}
