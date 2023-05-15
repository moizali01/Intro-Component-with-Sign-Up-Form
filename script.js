
// console.log(submit) 

const emailFormat = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

// console.log("hello")
document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete")
    {
        // console.log("Ready state")
        initApp();
    }
})

const fieldsList = ["First Name", "Last Name", "Email", "Password"]

const initApp = () =>{
    const form = document.querySelector(".form1");
    const submit = document.getElementById("submit")
    submit.addEventListener("click", (event) => {
        event.preventDefault();
        const input = form.querySelectorAll("input")
        const errorText = form.querySelectorAll(".error-text")
        const formData = {};

        input.forEach((inputElement) => {
            // console.log(inputElement.name, ": ", inputElement.value)
            formData[inputElement.name] = inputElement.value;
        });
        console.log(formData);
        const length = Object.keys(formData).length
        for (let i = 0; i < length-1; i++) {
            const keys = Object.keys(formData)
            const values = Object.values(formData)
            // console.log(keys[i],": ",values[i])
            if (values[i] === "")
            {
                input[i].classList.add("error")
                errorText[i].innerHTML = `${fieldsList[i]} cannot be empty`;
                if (i == 2)
                {
                    input[i].placeholder = "email@example/com"
                }
            }
            else
            {
                input[i].classList.remove("error")
            }

            if (i == 2 && !values[i].match(emailFormat)){
                input[i].classList.add("error")
                errorText[i].innerHTML = `${fieldsList[i]} format not correct`;
                input[i].placeholder = "email@example/com"
            }
            
        }
    })

}

// console.log(texts)