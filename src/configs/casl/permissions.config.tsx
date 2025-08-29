import { AbilityBuilder, createMongoAbility } from '@casl/ability';

import type { Permission } from '@/types/permission';

export default function defineAbilityFor(permissions: Permission[] = []) {
  const { can, build } = new AbilityBuilder(createMongoAbility);

  permissions.forEach(({ action, subject }) => {
    can(action!, subject!);
  });

  return build();
}
