import React from 'react'
import '../../globals.css'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

const Login = () => {
  function onChange(value) {
    console.log("Captcha value:", value);
  }
  
  return (
    <main class="h-screen grid place-content-center bg-white">

    <div class=" w-screen grid place-content-center">
    <div class="flex items-center w-full space-x-4 p-6  text-black">
        {/* <h1 class="text-white">Hello</h1> */}

        <div class=" p-6 border-r-2">
              <div class="mr-20">
                <img src='../Logo.svg' class="h-full"/>
              </div>
        </div>

        <div class=" p-6 ">
            <div class=" p-6 w-96 ">
              <form  >
                  {/* <input type='text' placeholder='Email-id'  class="p-2 w-full rounded-md text-black"/>
                  <input type='text' placeholder='Username'  class="p-2 w-full rounded-md text-black"/> */}
                   <Box
                      // component="form"
                      sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                      }}
                      noValidate
                      autoComplete="off"
                    ></Box>
                  <div class="py-3 ">
                  <TextField variant="outlined" type="email" fullWidth label="Email" required size='small' name="email"/>
                    </div> 
                 
                  <div class="py-3">
                  <TextField variant="outlined" type="password" fullWidth label="Password" required size='small' name="password"/>
                  </div>


                  <div class="w-full mt-12   flex justify-center">
                    <button type="button" class="p-2 w-6/12 rounded-lg border-2 bg-[#5D8BF4] text-white">Login</button>
                  </div>
                  
                  <div class="w-full mt-7 flex justify-center text-sm">
                    Not yet Registered? <a href='./signup' class="text-[#98BCF4] "> &nbsp; Register now</a>
                  </div>
              </form>
            </div> 
        </div>

      </div>

    </div>
     
    </main>
  )
}

export default Login