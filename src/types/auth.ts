export enum PermissionAction {
  Manage = 'manage',
  Create = 'create',
  Update = 'update',
  Read = 'read',
  Delete = 'delete',
}

export enum SubjectName {
  All = 'all',
  Users = 'users',
  Roles = 'roles',
  Tasks = 'tasks',
  States = 'states',
  StatePipelines = 'pipeline_configuration',
  Tickets = 'tickets',
  StateApplications = 'state_tickets',
  Customers = 'customers',
  Comments = 'comments',
  Attachments = 'attachments',
  Dashboard = 'dashboard',
  ActivityLogs = 'activity_logs',
  Reports = 'reports',
  ApiKeys = 'api_keys',
  Webhooks = 'webhooks',
}
