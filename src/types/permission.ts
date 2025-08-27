import type { Audit, Params, Response } from './common';

export type Permission = Partial<{
  id: string;
  action: string;
  subject: string;
  isActive: boolean;
  audit: Audit;
}>;

export type GetPermissionParams = Params & {
  isActive?: boolean;
};

export type GetPermissionsResponse = Response<Permission[]>;
