const SERVICE_NAME = 'ingress-nginx-controller';
const SERVICE_NAME_SPACE = 'ingress-nginx';
const SERVICE_BASE_URL = `${SERVICE_NAME_SPACE}.svc.cluster.local`;
const CURRENT_USER_URL = '/api/users/currentuser';
const SSR_URL = `http://${SERVICE_NAME}.${SERVICE_BASE_URL}${CURRENT_USER_URL}`;
const MAIN_HOST = 'tketz.dev';

export { SERVICE_NAME, SERVICE_BASE_URL, CURRENT_USER_URL, SSR_URL, MAIN_HOST };
