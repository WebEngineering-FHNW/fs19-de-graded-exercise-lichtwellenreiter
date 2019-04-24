package webec

class Path {

    int id
    String pathname
    World world

    static constraints = {
        id unique: true
    }
}
