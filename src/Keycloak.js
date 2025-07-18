import Keycloak from 'keycloak-js';

export const keycloak = new Keycloak({
  url: 'http://localhost:8080',
  realm: 'prompt-ui-realm',
  clientId: 'prompt-ui-front',
});

export default keycloak