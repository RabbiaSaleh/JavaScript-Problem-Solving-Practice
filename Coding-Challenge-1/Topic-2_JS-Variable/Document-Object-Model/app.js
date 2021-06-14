function check(){
   //======== access input element
    let inputElement = document.querySelector('input');
    

    //======get input element value
    let inputValue = inputElement.value;
   

    //==== access h1 element
    let headingElement = document.querySelector('h1 > span');

    //==== change content of h1 element
    headingElement.innerHTML= inputValue

    alert('‘The message has been sent on the given number’.')
}
    

