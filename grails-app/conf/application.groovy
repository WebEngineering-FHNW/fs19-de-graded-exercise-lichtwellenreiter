// Added by the Spring Security Core plugin:
grails.plugin.springsecurity.userLookup.userDomainClassName = 'webec.SecUser'
grails.plugin.springsecurity.userLookup.authorityJoinClassName = 'webec.SecUserSecRole'
grails.plugin.springsecurity.authority.className = 'webec.SecRole'

grails.plugin.springsecurity.logout.postOnly = false

grails.plugin.springsecurity.securityConfigType = 'InterceptUrlMap'

final statics = [
        [pattern: '/error', access: ['permitAll']],
        [pattern: '/index', access: ['permitAll']],
        [pattern: '/shutdown', access: ['permitAll']],
        [pattern: '/assets/**', access: ['permitAll']],
        [pattern: '/**/js/**', access: ['permitAll']],
        [pattern: '/**/css/**', access: ['permitAll']],
        [pattern: '/**/images/**', access: ['permitAll']],
        [pattern: '/**/favicon.ico', access: ['permitAll']],
        [pattern: '/modules', access: ['permitAll']],
]

final chainMap = [
        [pattern: '/assets/**', filters: 'none'],
        [pattern: '/**/js/**', filters: 'none'],
        [pattern: '/**/css/**', filters: 'none'],
        [pattern: '/**/images/**', filters: 'none'],
        [pattern: '/**/favicon.ico', filters: 'none'],
        [pattern: '/**', filters: 'JOINED_FILTERS']
]

final interceptUrlMap = statics + [
        [pattern: "/login/auth", access: ["permitAll"]],
        [pattern: "/user/register", access: ["permitAll"]],
        [pattern: "/dbconsole/**", access: ['ROLE_ADMIN']], // allow Admin Only to access DBConsole
        [pattern: "/map/**", access: ['ROLE_ADMIN', 'ROLE_STUDENT']],
        [pattern: "/**", access: ['ROLE_ADMIN', 'ROLE_STUDENT']],
]


grails.plugin.springsecurity.controllerAnnotations.staticRules = statics
grails.plugin.springsecurity.filterChain.chainMap = chainMap
grails.plugin.springsecurity.interceptUrlMap = interceptUrlMap


grails.mime.types = [
        json: ['application/json', 'text/json'],
        xml : ['text/xml', 'application/xml']
]
