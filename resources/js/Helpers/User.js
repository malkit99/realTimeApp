import Token from "./Token";
import AppStorage from './AppStorage'
class User {
    login(data){
        axios.post('/api/auth/login' , data)
        .then(res => this.responseAfterLogin(res))
        .catch(error => console.log(error.response.data))
    }

    responseAfterLogin(res){
        const access_token = res.data.access_token
        const username = res.data.user
        if(Token.isvalid(access_token)){
            AppStorage.store(username,access_token)
            window.location = '/fourm'
        }
    }

    hasToken(){
        const storedToken = AppStorage.getToken();
        // console.log(storedToken);
        if(storedToken){
            return Token.isvalid(storedToken) ? true : false
        }
        return false
    }

    logedIn(){
        return this.hasToken()

    }

    logout(){
        AppStorage.clear()
        window.location = '/fourm'
    }

    name(){
        if(this.logedIn()){
            return AppStorage.getUser()
        }
    }

    id(){
        if(this.logedIn()){
            const payload = Token.payload(AppStorage.getToken())
            return payload.sub
        }
    }

    own(id){
        return this.id() == id
    }

    admin(){
        return this.id() == 24
    }
}
 export default User = new User();
