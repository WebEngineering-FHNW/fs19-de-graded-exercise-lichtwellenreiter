package webec

import grails.rest.Resource

@Resource(uri="/world")
class World {

    int id
    String worldname
    boolean enabled = false

    static constraints = {
        id unique: true
    }
}
