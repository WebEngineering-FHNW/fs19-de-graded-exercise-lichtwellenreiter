package webec

import grails.rest.RestfulController

class ModuleController extends RestfulController {

    ModuleController(Class resource) {
        super(resource)
    }

    def index() {
        render text: "Hello from ModuleController"
    }




}
