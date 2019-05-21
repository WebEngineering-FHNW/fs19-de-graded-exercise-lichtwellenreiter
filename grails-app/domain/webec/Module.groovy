package webec

import grails.rest.Resource

@Resource(uri = "/module")
class Module {

    int        id
    String     type
    String     name
    String     abbreviation
    String     description
    boolean    msp   = false
    int        credits
    int        x
    int        y


    static constraints = {
        id unique: true
        credits range: 0..12
        abbreviation nullable: false
        name nullable: false
        type nullable: false
        description nullable: true
    }
    static mapping = {
        description type: 'text'
    }


}




