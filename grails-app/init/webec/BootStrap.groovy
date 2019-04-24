package webec

class BootStrap {

    def init = { servletContext ->

        /**
         * Add User and Roles
         */
        SecRole adminRole = save(SecRole.findOrCreateWhere(authority: SecRole.ADMIN))
        SecRole studentRole = save(SecRole.findOrCreateWhere(authority: SecRole.STUDENT))
        SecRole guestRole = save(SecRole.findOrCreateWhere(authority: SecRole.GUEST))


        SecUser admin = save(new SecUser(username: 'admin', password: 'admin'))
        SecUser student = save(new SecUser(username: 'student@students.fhnw.ch', password: 'student'))
        SecUser guest = save(new SecUser(username: 'guest', password: 'guest'))

        SecUserSecRole.create(admin, adminRole, true)
        SecUserSecRole.create(student, studentRole, true)
        SecUserSecRole.create(guest, guestRole, true)

        // Assertions
        assert SecRole.count()          == 3
        assert SecUser.count()          == 3
        assert SecUserSecRole.count()   == 3


        /**
         * Add Map Data
         */

        save(World.findOrCreateWhere(worldname: "Starter", enabled: true))
        save(World.findOrCreateWhere(worldname: "Becoming Expert", enabled: true))
        save(World.findOrCreateWhere(worldname: "Context", enabled: true))
        save(World.findOrCreateWhere(worldname: "Project", enabled: true))

        assert World.count() == 4

    }

    static save(domainObject) {
        domainObject.save(failOnError: true, flush: true)
    }

    def destroy = {
    }
}
