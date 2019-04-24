package webec

class BootStrap {

    def init = { servletContext ->

        SecRole adminRole = save(SecRole.findOrCreateWhere(authority: 'ROLE_ADMIN'))
        SecRole studentRole = save(SecRole.findOrCreateWhere(authority: 'ROLE_STUDENT'))


        SecUser admin = save(new SecUser(username: 'admin', password: 'admin'))
        SecUser student = save(new SecUser(username: 'student@students.fhnw.ch', password: 'student'))

        SecUserSecRole.create(admin, adminRole, true)
        SecUserSecRole.create(student, studentRole, true)
    }

    static save(domainObject) {
        domainObject.save(failOnError: true, flush:true)
    }

    def destroy = {
    }
}
