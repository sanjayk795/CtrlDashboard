import {Injectable} from '@angular/core';



@Injectable()
export class JwtService {

    getToken(): String {
        return window.localStorage['jwtToken'];
    }

    saveToken(token: String) {
        window.localStorage['jwtToken'] = token;
        window.localStorage['ctrl-user'] = token;
    }

    destroyToken() {
        window.localStorage.clear();
    }

    setCurrentUser(User) {
        //swindow.localStorage['landingPage'] = User.landingPage;
        window.localStorage['ctrl-user'] = User.username;
        // localStorage.setItem('dashboards', JSON.stringify(User.dashboards));
    }

    getCurrentUser() {
        return window.localStorage;
    }

}
