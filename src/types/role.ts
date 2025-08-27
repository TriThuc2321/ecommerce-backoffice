import type { Audit, Params, Response } from './common';
import type { Permission } from './permission';
import type { User } from './user';

export type Role = {
  id: string;
} & Partial<{
  name: string;
  isActive: boolean;
  isDefault: boolean;
  permissions: Permission[];
  users?: User[];
  code?: string;
  level?: number;
  audit?: Audit;
}>;

export type GetRoleParams = Params & {
  isActive?: boolean;
};

export type GetRolesResponse = Response<Role[]>;

export type CreateRolePayload = {
  name: string;
  isActive: boolean;
  permissionIds: string[];
  isDefault?: boolean;
};

export type EditRolePayload = Partial<CreateRolePayload> & {
  id: string;
};
