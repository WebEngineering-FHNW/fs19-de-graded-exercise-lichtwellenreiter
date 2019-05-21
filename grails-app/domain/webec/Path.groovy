package webec

import grails.rest.Resource

@Resource(uri="/path")
class Path {

    int id
    String pathname
    World world

    static constraints = {
        id unique: true
    }
}
