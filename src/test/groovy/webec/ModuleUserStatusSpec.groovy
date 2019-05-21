package webec

import grails.testing.gorm.DomainUnitTest
import spock.lang.Specification

class ModuleUserStatusSpec extends Specification implements DomainUnitTest<ModuleUserStatus> {


    void "test user status range"() {
        expect: "Status Codes"
        new ModuleUserStatusSpec(status:modStatus).validate("status") == shouldValid

        where:
        modStatus   | shouldValid
        -1              | false
        0               | true
        1               | true
        2               | true
        3               | false
        99              | false
    }
}
