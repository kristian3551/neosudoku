const apiURL : string = 'http://localhost:8000/api/user';

const login : (username: string, password: string) => Promise<unknown> = (username, password) => {
    return fetch(`${apiURL}/login`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username, password
        })
    });
}

const register : (username: string, password: string, firstName: string,
    lastName: string) => Promise<unknown> = (username, password, firstName, lastName) => {
    return fetch(`${apiURL}/register`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username, password, firstName, lastName
        })
    });
}

const verify : (token: string) => Promise<unknown> = (token) => {
    return fetch(`${apiURL}/verify`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            token
        })
    });
}

const logout : () => Promise<any> = () => {
    return fetch(`${apiURL}/logout`, {
        method: "POST"
    });
}

const userApi = { login, register, logout, verify };

export default userApi;