Package.describe({
	name: 'emenoh:visitor',
	version: '0.0.2',
	summary: 'Anonymous User Tracking Platform',
	git: 'https://github.com/emenoh/visitor.git',
	documentation: 'README.md'
});

Package.onUse(function(api) {

	api.versionsFrom('1.1');

	// ====== BUILT-IN PACKAGES =======

	// ====== 3RD PARTY PACKAGES =======

	api.use('emenoh:visitor-client@0.0.2', 'client');
	api.imply('emenoh:visitor-client', 'client');

	api.use('emenoh:visitor-server@0.0.2', 'server');
	api.imply('emenoh:visitor-server', 'server');

	// ====== BOTH =======

	// ====== SERVER =======

	// ====== CLIENT =======

	// ====== EXPORTS =======

});

Package.onTest(function(api) {
	api.use('tinytest');
});
