package webec

import grails.rest.RestfulController

class ModuleController extends RestfulController {

    static responseFormats = ['json']

    ModuleController() {
        super(Module)
    }
}
