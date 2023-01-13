function setToken() {
    localStorage.setItem('token', 12)
}

function getToken() {
    const token = localStorage.getItem("token")
    return !!token
}
function removeToken() {
   localStorage.removeItem("token")
   
}

export const serviceSecure = {setToken, getToken, removeToken} 