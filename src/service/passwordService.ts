export default function generatePass(){
    let password:string=''
    let characteres:string='Aa@$#123456789abcdefghijFfGHIJKkLMNOPpZz!'
    let length=8

    for (let i=0; i<length; i++) {
        password+=characteres.charAt(
            Math.floor(Math.random()*characteres.length)
        )
    }
    
    return password;
}