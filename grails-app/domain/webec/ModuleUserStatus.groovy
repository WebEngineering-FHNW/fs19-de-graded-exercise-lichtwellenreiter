package webec

class ModuleUserStatus {

    int     id
    Module  module
    SecUser user
    int     status = 0 // 0: Nothing done yet, 1: Accepted Module, 2: Finished Module

    static constraints = {
        status range: 0..2
    }
}
