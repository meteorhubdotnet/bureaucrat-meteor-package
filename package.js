Package.describe({
    name: 'meteorhubdotnet:bureaucrat',
    summary: 'The bureacrat processes your forms and returns tidy objects.',
    version: '1.0.4',
    git: 'https://github.com/meteorhubdotnet/bureaucrat-meteor-package'
});

Package.onUse(function(api) {
    api.versionsFrom('METEOR@2.0');
    api.use(['jquery@3.0.0'], 'client');
    api.addFiles(['bureaucrat.js'], 'client');
    api.export('Bureaucrat');
});