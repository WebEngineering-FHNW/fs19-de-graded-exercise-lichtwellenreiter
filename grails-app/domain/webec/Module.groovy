package webec


class Module {

    int     id
    String  type
    String  name
    String  abbreviation
    String  description
    boolean msp = false
    int     credits
    Edge    edges


    static constraints = {
        id unique: true
        credits range: 1..12
        edges nullable: true
    }
}




