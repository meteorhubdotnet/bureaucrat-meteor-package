Package.describe({
    name: 'meteorhubdotnet:bureaucrat',
    summary: 'The bureacrat processes your forms and returns tidy objects.',
    version: '1.0.1',
    git: 'https://github.com/meteorhubdotnet/bureaucrat-meteor-package'
});

Package.onUse(function(api) {
    api.versionsFrom('1.8.1');
    api.addFiles(['bureaucrat.js'], 'client');
    api.export('Bureaucrat');
});