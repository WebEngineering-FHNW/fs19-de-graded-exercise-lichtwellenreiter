package webec

class World {

    int id
    String worldname
    boolean enabled = false

    static constraints = {
        id unique: true
    }
}
