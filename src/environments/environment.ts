// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyDWPRVFdR3fW0s79rMahQrJgazpTnZbux4',
    authDomain: 'articles-galore.firebaseapp.com',
    databaseURL: 'https://articles-galore.firebaseio.com',
    projectId: 'articles-galore',
    storageBucket: 'articles-galore.appspot.com',
    messagingSenderId: '1049939193124'
  }
  // firebaseConfig: {
  //   apiKey: 'AIzaSyDrPHDMhID01Gt39lPW0f0K-obnKh7iBeo',
  //   authDomain: 'gst-common-portal.firebaseapp.com',
  //   databaseURL: 'https://gst-common-portal.firebaseio.com',
  //   projectId: 'gst-common-portal',
  //   storageBucket: 'gst-common-portal.appspot.com',
  //   messagingSenderId: '985198041045'
  // }
};
