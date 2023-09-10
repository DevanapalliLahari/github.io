function login()
            {
                console.log("Calling login function")
                var userEmail=document.getElementById("email")
                console.log(userEmail.value)
                var userPassword=document.getElementById("password")
                console.log(userPassword.value)
                var userObject=localStorage.getItem("Course12")
                console.log(typeof(userObject))
                console.log(userObject)
                var userData=JSON.parse(userObject)
                console.log(typeof(userData))
                console.log(userData)
                console.log(userData.Email)
                console.log(userData.Password)

               // var errorLogin=document.getElementById('errorLogin')
                //errorLogin.innerHTML=''
                
                if(userEmail.value==userData.email && userPassword.value==userData.password)
                {
                    console.log("Login success")
                  //  window.location.href='Tables and Forms.html'
                }
                else{
                    console.log("Incorrect email or password")
                  //  errorLogin.innerHTML='Incorrect email or password'
                  //  errorLogin.style.color='red'
                }

            }

            let a
            var b


            var arr=[]
            arr=[1,2,3]
            console.log(arr)
            //declaration with initialization
            var number=[2,3,4,5]

            for(let i=0;i<number.length;i++)
            {
                console.log(number[i])
            }
            var dynamicarr=[]
            console.log(dynamicarr)
            dynamicarr.push(1)
            dynamicarr.push(2)//add element at end of the array
            dynamicarr.push(3)
            dynamicarr.push(4)
            console.log(dynamicarr)
            dynamicarr.pop()//remove element at end the array
            console.log(dynamicarr)
            dynamicarr.unshift(6)
            console.log(dynamicarr)
            dynamicarr.unshift(7)//add element at beginning of the array
            dynamicarr.unshift(8)
            dynamicarr.unshift(9)
            console.log(dynamicarr)
            dynamicarr.shift()//remove element at begining of the array
            console.log(dynamicarr)
            dynamicarr.shift()//remove element at begining of the array
            console.log(dynamicarr)



            let x=10
            let y=10

            if(x==y)
            {//== will check the values
                console.log("x is equal to == y")
            }
            let z='10'

            if(x==z)
            {
                console.log("x is equal to == z")
            }
            if(x===y)
            {//=== will check the values and datatype
                console.log("x is equal to === y")
            }
            if(x===z)
            {
                console.log("x is equal to === z")
            }

            const PI=3.14
            console.log(PI)

            let tree={
                "name":"Mango",
                "lifespan":10
            }
            console.log(tree)
            let tree1={
                "name":"Coconut",
                "lifespan":100
            }
            console.log(tree1)

            let trees=[]
            trees.push(tree)
            trees.push(tree1)
            console.log(trees)

            for(let i=0;i<trees.length;i++)
            {
                console.log(trees[i].name)//printing only names in array
            }
            


            