package webec


import groovy.json.JsonBuilder

class ModuleController {

    def getModules() {

        def module = Module.list()

        JsonBuilder jsonBuilder = new JsonBuilder()

        jsonBuilder.result {
            id module.id
            abbreviation module.abbreviation
            edges Edge.findById(module.edges)
            msp module.msp
            credits module.credits
            name module.name
            type module.type
            description module.description
        }

        response jsonBuilder.toString()

    }

}
