package webec

import grails.plugin.springsecurity.annotation.Secured


class StartController {


    def index() {
        render view: "StartIndex"
    }
}
