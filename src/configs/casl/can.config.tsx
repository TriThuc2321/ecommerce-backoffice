'use client';

import { createContext, useContext } from 'react';

import type { AbilityTuple, MongoAbility, MongoQuery } from '@casl/ability';
import { createContextualCan } from '@casl/react';

export const AbilityContext = createContext<
  MongoAbility<AbilityTuple, MongoQuery>
>(null!);
export const Can = createContextualCan(AbilityContext.Consumer);

export const useCan = () => {
  const ability = useContext(AbilityContext);

  return ability;
};
