const form = document.querySelector("#validationForm")
const firstname = document.querySelector("#firstName")
const lastname = document.querySelector("#lastName")
const email = document.querySelector("#email")
const password = document.querySelector("#password")
const repeatPassword = document.querySelector("#repeatPassword")
const checkbox = document.querySelector("#terms")
const errorMessage = document.querySelector("#errorMessage")


form.addEventListener('submit', e =>{
    e.preventDefault()
    const errorsArray = checkInputValue()

    if(errorsArray.length > 0) {      

    }
    else {
        const user ={
            firstname : firstname.value,
            lastname : lastname.value,
            email : email.value,
            password : password.value,
        }
        console.log(user);

    }

})

const errors =[]

const checkInputValue = ()=>{

 const firstnameValu = firstname.value.trim()
 const lastnameValu = lastname.value.trim()
 const emailValue = email.value.trim()
 const passwordValue = password.value.trim()
 const repeatPasswordValue = repeatPassword.value.trim()


    const regText = /^[a-zAZ]{2,10}$/
  if (firstnameValu === ''){
    console.log('firstname måste ha ett värde');
       errors.push(setError(firstname, 'Fylla på fältet'))
    } 
    else if (!regText.test(firstnameValu)){
        console.log('Namnet får inte innehålla några siffror');
        errors.push(setError(firstname, 'Namnet ska vara korrekt'))
    }
    else {
     setSuccess(firstname)
    }

  if (lastnameValu === ''){
    console.log('Efternamn måste ha ett värde');
       errors.push(setError(lastname, 'Fyll på fälten'))
    } 
    else if (lastnameValu.length < 2)   {
       console.log('Efternamnet måste ha mer än två bokstäver');
        errors.push(setError(lastname, 'Efternamnet måste fyllas korrekt'))
    }
    else {
     setSuccess(lastname)
    }



    const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,6}$/
  if (emailValue === ''){
      console.log('email måste ha ett värde');
     errors.push(setError(email, 'Fyll på fältet'))
    }
    else if(!regEx.test(emailValue)){
        console.log('email måste fyllas korrekt');
        errors.push(setError(email, 'email är ogiltig'))

    }
    else {
      setSuccess(email)
    }


    if (passwordValue === ''){
        console.log('password måste ha ett värde');
        errors.push(setError(password, 'fylla på fältet'))
    }
    else if(passwordValue.length < 6){
        console.log('Lösenordet måste fyllas korrekt');
        errors.push(setError(password, 'Lösenordet är ogiltig'))

    }
    else {
     setSuccess(password)
    }


    if (repeatPasswordValue === ''){
        console.log('repeatpassword måste ha ett värde');
        errors.push(setError(repeatPassword, 'fyll på fältet'))
    }
    else if (passwordValue !== repeatPasswordValue){
        console.log('password matchar inte varandra');
      errors.push(setError(repeatPassword, 'Lösenordet stämmer inte överens!'))
    }
    else {
      setSuccess(repeatPassword)
    }
    
    if (!checkbox.checked){
        console.log('checkbox måste kryssas');
        errors.push(setError(checkbox , 'kryssa in '))
    } 
    else{
        setSuccess(checkbox)
    }
  
    return errors

}



const setError = (input, message)=>{ 
    const inputGroup = input.parentElement
    const small = inputGroup.querySelector('small')
    inputGroup.classList.add('error')

    inputGroup.classList.remove('success')
    errorMessage.classList.remove('d-none')

    small.innerText = message;  
    
}  


const setSuccess= (input)=>{ 
    const inputGroup = input.parentElement
    const small = inputGroup.querySelector('small')
    small.innerText = '';

    inputGroup.classList.remove('error')
    errorMessage.classList.add('d-none')
    inputGroup.classList.add('success')
}
