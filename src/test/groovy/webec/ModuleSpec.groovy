package webec

import grails.testing.gorm.DomainUnitTest
import spock.lang.Specification

class ModuleSpec extends Specification implements DomainUnitTest<Module> {

    def setup() {
    }

    def cleanup() {
    }

    void "test credits range"() {

        expect: "Range of Credits"
        new Module(credits: moduleCredits).validate(["credits"]) == shouldValid

        where:
        moduleCredits   | shouldValid
        -1              | false
        0               | false
        1               | true
        2               | true
        3               | true
        4               | true
        5               | true
        6               | true
        7               | true
        8               | true
        9               | true
        10              | true
        11              | true
        12              | true
        13              | false
        14              | false
    }
}
