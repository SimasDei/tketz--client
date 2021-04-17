const SERVICE_NAME = 'ingress-nginx-controller';
const SERVICE_NAME_SPACE = 'ingress-nginx';
const SERVICE_BASE_URL = `${SERVICE_NAME_SPACE}.svc.cluster.local`;
const SSR_URL = `http://${SERVICE_NAME}.${SERVICE_BASE_URL}`;
const MAIN_HOST = 'tketz.dev';

const AUTH_API = {
  CURRENT_USER: '/api/users/currentuser',
};

export { SERVICE_NAME, SERVICE_BASE_URL, AUTH_API, SSR_URL, MAIN_HOST };
