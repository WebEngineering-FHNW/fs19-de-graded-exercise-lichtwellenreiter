package webec

class UrlMappings {

    static mappings = {
        "/$controller/$action?/$id?(.$format)?"{
            constraints {
                // apply constraints here
            }
        }

        "/"(controller:'Start', action:'index')
        "500"(view:'/error')
        "404"(view:'/notFound')
    }
}
