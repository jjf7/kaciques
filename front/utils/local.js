export function setLocal(user) {
    window.localStorage.setItem('user', user);
}
export function checkLocal(router) {
  if (!localStorage.getItem('user')) {
    router.push('/')
  }else{
    return localStorage.getItem('user')
  } 
}