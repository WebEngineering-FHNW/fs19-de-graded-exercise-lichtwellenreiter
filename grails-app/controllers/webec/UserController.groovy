package webec

class UserController {

    def register(String username, String password, String passwordConfirmation) {

        if( password.equals(passwordConfirmation) ){
            render text: "yes they are the same"
        }


    }
}
