import LogIn from '@/components/auth/login'
import Footer from '@/components/footer'
import NavBar from '@/components/navBar'
import React from 'react'

const Login = () => {
  return (
    <div className="bg-[#151841] h-auto space-y-5 ">
      <NavBar />
      <div className="flex items-center justify-center m-20">
        <LogIn />
      </div>
      <Footer />
    </div>
  )
}

export default Login
