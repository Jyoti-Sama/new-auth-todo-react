

// Todo add a base URL

const URL = 'https://todoguddu.herokuapp.com';


export const getTodos = async () => {
    
    // * token verification
    const token = localStorage.getItem("token");
    if (!token) {
        return gotoLoginPage();
    }

    // * fetch request
    
    const response = await fetch(`${URL}/todo/get`, {
        method: 'POST',
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ token:token })
      });   

    return response.json();
}

export const addTodo = async (title, content) => {
    console.log(title, content)

    // * token verification
    const token = localStorage.getItem("token");
    if (!token) {
        return gotoLoginPage();
    }

    // * fetch request
    const response = await fetch(`${URL}/todo/add`, {
        method: 'POST',
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ token:token, title, content })
      });   

    return response.json();
}

export const deleteTodo = async (_id) => {

    // * token verification
    const token = localStorage.getItem("token");
    if (!token) {
        return gotoLoginPage();
    }

    // * fetch request

    const response = await fetch(`${URL}/todo/delete`, {
        method: 'POST',
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ token:token,_id })
      });   

    return response.json();

}


export const editTodo = async (_id, title, content) => {
    console.log(_id, title, content)

    // * token verification
    const token = localStorage.getItem("token");
    if (!token) {
        return gotoLoginPage();
    }

    // * fetch request
    const response = await fetch(`${URL}/todo/update`, {
        method: 'POST',
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ token:token, _id , title, content })
      });   

    return response.json();
}

export const sendMessage = async (name, message) => {
    console.log(name, message)

    const response = await fetch(`${URL}/contactMessage`,{
        method: 'POST',
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ name, message })
    })

    return response.json();
}

// * if token empty then fo to login page
function gotoLoginPage() {
    document.location.href = '/login'
} 



  
