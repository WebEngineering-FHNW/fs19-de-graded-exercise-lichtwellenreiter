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
        SecUser student = save(new SecUser(username: 'student', password: 'student'))
        SecUser guest = save(new SecUser(username: 'guest', password: 'guest'))

        SecUserSecRole.create(admin, adminRole, true)
        SecUserSecRole.create(student, studentRole, true)
        SecUserSecRole.create(guest, guestRole, true)

        // Assertions
        assert SecRole.count() == 3
        assert SecUser.count() == 3
        assert SecUserSecRole.count() == 3


        /**
         * Add Map Data
         */
        save(World.findOrCreateWhere(worldname: "Starter", enabled: true))
        save(World.findOrCreateWhere(worldname: "Becoming Expert", enabled: true))
        save(World.findOrCreateWhere(worldname: "Context", enabled: true))
        save(World.findOrCreateWhere(worldname: "Project", enabled: true))

        assert World.count() == 4


        /**
         * Add Module Data
         */
        save(Module.findOrCreateWhere(name: "Objectoriented Programming 1", abbreviation: "oop1", msp: true, credits: 3, type: "node", description: "-"))
        save(Module.findOrCreateWhere(name: "Objectoriented Programming 2", abbreviation: "oop2", msp: true, credits: 3, type: "node", description: "-"))
        save(Module.findOrCreateWhere(name: "Algorithms and Datastructures 1", abbreviation: "algd1", msp: true, credits: 3, type: "node", description: "-"))
        save(Module.findOrCreateWhere(name: "Algorithms and Datastructures 2", abbreviation: "algd2", msp: true, credits: 3, type: "node", description: "-"))
        save(Module.findOrCreateWhere(name: "C++ Programming", abbreviation: "prcpp", msp: true, credits: 3, type: "node", description: "-"))
        save(Module.findOrCreateWhere(name: "Compiler Build", abbreviation: "cpib", msp: true, credits: 3, type: "node", description: "-"))
        save(Module.findOrCreateWhere(name: "Concurrent Programming", abbreviation: "conpr", msp: true, credits: 3, type: "node", description: "-"))
        save(Module.findOrCreateWhere(name: "Functional Programming", abbreviation: "fprog", msp: true, credits: 3, type: "node", description: "-"))

        assert Module.count() == 8

        /**
         * Add Edges
         */

        save(Edge.findOrCreateWhere(parent: Module.findByAbbreviation("oop1"), child: Module.findByAbbreviation("oop2")))

        assert Edge.count() == 1

    }

    static save(domainObject) {
        domainObject.save(failOnError: true, flush: true)
    }

    def destroy = {
    }
}
