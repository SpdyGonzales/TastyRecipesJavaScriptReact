export function PostData(path, userData, method) {
    let BaseURL = '/tastyrecipes/src/server/util/';      
        return fetch(BaseURL+path, {
            method: method,
            body: JSON.stringify(userData)
          })
}