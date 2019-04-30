package webec

import grails.rest.Resource

@Resource(uri='/modules', formats=['json'])
class Module {

    int id
    String name
    String abbreviation
    boolean msp = false
    int credits

    static constraints = {
        id unique: true
        credits range: 1..12
    }
}




