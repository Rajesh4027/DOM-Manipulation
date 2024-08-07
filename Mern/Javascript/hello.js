        // console.log(0&&3)
        // console.log(3&&3)
        // console.log(undefined&&3)

        // console.log(0||3)
        // console.log(3||3)
        // console.log(undefined||0)

        // let name = prompt("enter the number")


        // // console.log(name,typeof name)

        // if(name%2===1){
        //     console.log("odd number")
        // }
        // else{
        //     if(name%2===0)
        //     {
        //         console.log("even number")
        //     }
        // }

        let num = Number(prompt("Enter the number"))

        if(num>=0 && num!=""){
            console.log("positive number")
        }
        else{
            if(num==""){
                console.log("empty value enter again")
            }
            else{
                if(num<=-1){
                    console.log("negative number")
                }
                else{
                    console.log("invalid")
                }
            }
        }

        