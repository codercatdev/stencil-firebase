exports.config = {
  bundles: [
    { components: ['ajonp-firebase-auth-demo',] },
    { components: ['ajonp-firebase-app',] },
    { components: ['ajonp-firebase-auth',] },
  ],
  collections: [
    { name: '@stencil/router' },
    { name: '@ionic/core'},
  ],
  serviceWorker: {
    globPatterns: [
      '**/*.{js,css,json,html,ico,png,jpeg}'
    ],
    globIgnores: [
      'build/app/svg/*.js'
    ]
  }
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
