package webec

class BootStrap {

    def init = { servletContext ->

        SecRole adminRole = save(SecRole.findOrCreateWhere(authority: SecRole.ADMIN))
        SecRole studentRole = save(SecRole.findOrCreateWhere(authority: SecRole.STUDENT))
        SecRole guestRole = save(SecRole.findOrCreateWhere(authority: SecRole.GUEST))


        SecUser admin = save(new SecUser(username: 'admin', password: 'admin'))
        SecUser student = save(new SecUser(username: 'student@students.fhnw.ch', password: 'student'))
        SecUser guest = save(new SecUser(username: 'guest', password: 'guest'))

        SecUserSecRole.create(admin, adminRole, true)
        SecUserSecRole.create(student, studentRole, true)
        SecUserSecRole.create(guest, guestRole, true)
    }

    static save(domainObject) {
        domainObject.save(failOnError: true, flush:true)
    }

    def destroy = {
    }
}
