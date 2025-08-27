'use client';

import { AbilityContext } from '@/configs/casl/can.config';
import defineAbilityFor from '@/configs/casl/permissions.config';
import { PermissionAction, SubjectName } from '@/types/auth';

const permissions = [
  {
    action: PermissionAction.Manage,
    subject: SubjectName.All,
  },
];

type AccessProviderProps = {
  children: React.ReactNode;
};

export function AccessProvider({ children }: AccessProviderProps) {
  return (
    <AbilityContext.Provider value={defineAbilityFor(permissions)}>
      {children}
    </AbilityContext.Provider>
  );
}
