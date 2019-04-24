package webec

class User {


    int id
    String name
    String email
    String password


    String description
    int    capacity

    @Override
    String toString() {
        return description + " (" + capacity + ")"
    }

    def beforeInsert(){
        password = password.encodeAsSHA256()
    }

    def beforeUpdate(){
        password = password.encodeAsSHA256()
    }

    static constraints = {
        id unique: true
    }
}
