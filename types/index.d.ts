enum HttpRequest {
  GET = 'GET',
  POST = 'POST',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

type Error = {
  message: string;
  field?: string;
};
