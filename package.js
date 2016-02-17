Package.describe({
  name: 'ivansglazunov:inserted',
  version: '0.0.4',
  summary: 'Driving storing the date and the user who created the document.',
  git: 'https://github.com/ivansglazunov/meteor-inserted.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');

  api.use('ecmascript');
  api.use('mongo');
  api.use('accounts-base');
  
  api.use('aldeed:simple-schema@1.5.3');
  api.use('ivansglazunov:refs@0.1.0');
  
  api.addFiles('inserted.js');
  
  api.export('insertedSchema');
});