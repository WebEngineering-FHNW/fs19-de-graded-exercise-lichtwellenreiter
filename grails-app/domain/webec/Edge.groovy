package webec

import grails.rest.Resource

@Resource(uri="/edge")
class Edge {

    int id
    Module parent
    Module child

    static constraints = {
        parent nullable: false
        child nullable: false
    }

}
