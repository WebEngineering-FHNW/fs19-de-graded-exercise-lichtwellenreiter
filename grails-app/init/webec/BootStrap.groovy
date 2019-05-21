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
        save(Module.findOrCreateWhere(name: "-", abbreviation: "start", msp: false, credits: 0, type: "start", description: "-", x: 12, y: 5))
        save(Module.findOrCreateWhere(name: "Objectoriented Programming 1", abbreviation: "oop1", msp: true, credits: 3, type: "base", description: "In this course, students learn a typical object-oriented programming language, its options and potential.", x: 18, y: 5))
        save(Module.findOrCreateWhere(name: "Objectoriented Programming 2", abbreviation: "oop2", msp: true, credits: 3, type: "node", description: "The module Object Oriented Programming I (oopI1) focussed on basic programming language elements and how to use them. The focus of this module shifts towards developing applications with a graphical user interface and data persistency. Therefore, the use of several important classes and packages of standard libraries, fundamental architectural principles for applications and established best practices, like early use of Unit-Tests, will be picked up as a central theme.", x: 20, y: 9))
        save(Module.findOrCreateWhere(name: "Algorithms and Datastructures 1", abbreviation: "algd1", msp: true, credits: 3, type: "node", description: "The module Algorithms and Data Structures 1 gives students a deeper insight into machine-oriented programming. The focus is on the language tools of the Java programming language for machine-oriented data manipulation and algorithms that operate on arrays or strings. An important part of this module is the analysis of algorithms regarding efficiency and correctness.", x: 15, y: 11))
        save(Module.findOrCreateWhere(name: "Algorithms and Datastructures 2", abbreviation: "algd2", msp: true, credits: 3, type: "node", description: "The Algorithms and Data Structures 2 module builds on the Algorithms and Data Structures 1 module. Students gain a deeper insight into the design and implementation of central dynamic data structures. Based on these data structures, typical applications and algorithms are presented.", x: 18, y: 15))
        save(Module.findOrCreateWhere(name: "C++ Programming", abbreviation: "prcpp", msp: true, credits: 3, type: "node", description: "The C++ programming language has been one of the most important programming languages for many years. Many program libraries, especially from the technical-scientific field, are developed in C++ because of its high efficiency. Knowledge of C++ is indispensable for computer scientists with a technical-scientific orientation.", x: 25, y: 5))
        save(Module.findOrCreateWhere(name: "Compiler Build", abbreviation: "cpib", msp: true, credits: 3, type: "node", description: "Compilers belong to the most important tools of computer science, are themselves complex programs and are based on theoretical principles. The students extend a small imperative programming language with a language construct and build their own compiler for the whole. This leads to a deeper understanding of programming languages and theory, as well as additional practice in software development.", x: 30, y: 5))
        save(Module.findOrCreateWhere(name: "Concurrent Programming", abbreviation: "conpr", msp: true, credits: 3, type: "node", description: "To fully exploit the power of modern multicore computers and to be able to react to asynchronous events, concurrent programming is necessary. The Concurrent Programming module introduces various models to solve synchronization and coordination problems: Locks & Conditions, Lock-Free Programming, Message-Passing Models and Transactional Memory.", x: 27, y: 9))
        save(Module.findOrCreateWhere(name: "Functional Programming", abbreviation: "fprog", msp: true, credits: 3, type: "base", description: "Functional programming has established itself as an important paradigm alongside object-oriented programming. This module teaches the basics of functional programming.", x: 12, y: 10))

        assert Module.count() == 9

        /**
         * Add Edges
         */

        save(Edge.findOrCreateWhere(parent: Module.findByAbbreviation("start"), child: Module.findByAbbreviation("oop1")))
        save(Edge.findOrCreateWhere(parent: Module.findByAbbreviation("start"), child: Module.findByAbbreviation("fprog")))
        save(Edge.findOrCreateWhere(parent: Module.findByAbbreviation("oop1"), child: Module.findByAbbreviation("oop2")))
        save(Edge.findOrCreateWhere(parent: Module.findByAbbreviation("oop1"), child: Module.findByAbbreviation("algd1")))
        save(Edge.findOrCreateWhere(parent: Module.findByAbbreviation("algd1"), child: Module.findByAbbreviation("algd2")))
        save(Edge.findOrCreateWhere(parent: Module.findByAbbreviation("oop2"), child: Module.findByAbbreviation("cpib")))
        save(Edge.findOrCreateWhere(parent: Module.findByAbbreviation("oop2"), child: Module.findByAbbreviation("algd2")))
        save(Edge.findOrCreateWhere(parent: Module.findByAbbreviation("algd2"), child: Module.findByAbbreviation("prcpp")))
        save(Edge.findOrCreateWhere(parent: Module.findByAbbreviation("algd2"), child: Module.findByAbbreviation("conpr")))


        assert Edge.count() == 9

    }

    static save(domainObject) {
        domainObject.save(failOnError: true, flush: true)
    }

    def destroy = {
    }
}
