export enum HttpRequest {
  GET = 'GET',
  POST = 'POST',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

export type Error = {
  message: string;
  field?: string;
};

export type User = {
  email: string;
  password?: string;
  id?: string;
};
