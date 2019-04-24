// Added by the Spring Security Core plugin:
grails.plugin.springsecurity.userLookup.userDomainClassName = 'webec.SecUser'
grails.plugin.springsecurity.userLookup.authorityJoinClassName = 'webec.SecUserSecRole'
grails.plugin.springsecurity.authority.className = 'webec.SecRole'

grails.plugin.springsecurity.logout.postOnly = false

grails.plugin.springsecurity.securityConfigType = 'InterceptUrlMap'

final statics = [
	[pattern: '/',               access: ['permitAll']],
	[pattern: '/error',          access: ['permitAll']],
	[pattern: '/index',          access: ['permitAll']],
	[pattern: '/index.gsp',      access: ['permitAll']],
	[pattern: '/shutdown',       access: ['permitAll']],
	[pattern: '/assets/**',      access: ['permitAll']],
	[pattern: '/**/js/**',       access: ['permitAll']],
	[pattern: '/**/css/**',      access: ['permitAll']],
	[pattern: '/**/images/**',   access: ['permitAll']],
	[pattern: '/**/favicon.ico', access: ['permitAll']]
]

final chainMap = [
	[pattern: '/assets/**',      filters: 'none'],
	[pattern: '/**/js/**',       filters: 'none'],
	[pattern: '/**/css/**',      filters: 'none'],
	[pattern: '/**/images/**',   filters: 'none'],
	[pattern: '/**/favicon.ico', filters: 'none'],
	[pattern: '/**',             filters: 'JOINED_FILTERS']
]

final interceptUrlMap = statics + [
		[pattern: "/login/auth",    access: ["permitAll"]],
		[pattern: "/dbconsole/**" , access: ['ROLE_ADMIN']], // allow Admin Only to access DBConsole
		[pattern: "/**"        ,    access: ['ROLE_ADMIN', 'ROLE_STUDENT', 'ROLE_GUEST']],
]


grails.plugin.springsecurity.controllerAnnotations.staticRules = statics
grails.plugin.springsecurity.filterChain.chainMap = chainMap
grails.plugin.springsecurity.interceptUrlMap = interceptUrlMap
