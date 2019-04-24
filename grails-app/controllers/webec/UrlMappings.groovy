package webec

class UrlMappings {

    static mappings = {
        "/$controller/$action?/$id?(.$format)?"{
            constraints {
                // apply constraints here
            }
        }

        "/"(controller:'Map', action:'index')
        "500"(view:'/error/error')
        "404"(view:'/error/404')
    }
}
