export const environment = {
  production: true
};

export let APIURL = '';

switch(window.location.hostname){
  case 'https://e-recruit-client.herokuapp.com/':
    APIURL = "https://erecruit-server.herokuapp.com/"
}
