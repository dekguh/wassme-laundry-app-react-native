export function emailRegexValid(email) {
    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g
    return pattern.test(email.toLowerCase())
}

export function usernameRegexValid(user) {
    const pattern = /^[a-z]+[0-9]*$/g
    return pattern.test(user.toLowerCase())
}