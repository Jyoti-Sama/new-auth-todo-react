
const URL = 'https://todoguddu.herokuapp.com';

export const loginFunc = async (email, password) => {
    console.log(email, password, "login fired delete later")

    // * fetch request
    const response = await fetch(`${URL}/user/login`, {
        method: 'POST',
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ email, password })
    });

    // * error handeling
    switch (response.status) {                   
        case 200:
            console.log("success")
            break;
        case 401:
            throw new Error("Invalid credential");  
        case 404:
            throw new Error("User not found"); 
        case 500:
                throw new Error("server error");    
        default:
            throw new Error("failed to login");
    }
    console.log(response.status)
    return response.json();
    // Todo save token to local storage

}

export const registerFunc = async (first_name, last_name, email, password) => {
    console.log(first_name, last_name, email, password, "register fired")

    // * fetch request
    const response = await fetch(`${URL}/user/register`, {
        method: 'POST',
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ first_name, last_name, email, password })
    });
    // * error handling
    switch (response.status) {                   
        case 201:
            console.log("success")
            break;
        case 409:
            throw new Error("user Already exist");  
        case 404:
            throw new Error("all inputs are required"); 
        case 500:
            throw new Error("server error");     
        default:
            throw new Error("failed to login");
    }

    console.log(response.status)
    return response.json();
    // Todo save token to local storage    
}



