package webec

class UrlMappings {

    static mappings = {
        "/$controller/$action?/$id?(.$format)?" {
            constraints {
                // apply constraints here
            }
        }

        "/modules"(controller: "Module", action: "getModules")
        "/"(controller: 'Map', action: 'index')
        "500"(view: '/error/error')
        "404"(view: '/error/404')
    }
}
