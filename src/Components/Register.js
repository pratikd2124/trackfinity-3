import React from 'react'

const Register = () => {
  return (
    <>
    <div class="container w-50 mx-auto text-center mt-5 d-flex flex-column justify-content-center mb-5">       
    <a href="/student-register" class="block visible py-4 px-8 mb-4 text-xs font-semibold tracking-wide leading-none text-white bg-blue-500 rounded cursor-pointer sm:mr-3 sm:mb-0 sm:inline-block">Register For Student
              </a>
              <a href="/student-teacher" class="block visible py-4 px-8 mb-4 text-xs font-semibold tracking-wide leading-none text-white bg-blue-500 rounded cursor-pointer sm:mr-3 sm:mb-0 sm:inline-block">Register For Teacher
              </a>
              <a href="/student-university" class="block visible py-4 px-8 mb-4 text-xs font-semibold tracking-wide leading-none text-white bg-blue-500 rounded cursor-pointer sm:mr-3 sm:mb-0 sm:inline-block">Register For University
    </a>
    </div>
    </>
  )
}

export default Register