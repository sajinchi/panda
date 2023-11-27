import SignUp from '@/components/auth/signup'
import Footer from '@/components/footer'
import NavBar from '@/components/navBar'
import React from 'react'

const Signup = () => {
  return (
    <div className="bg-[#151841] h-auto space-y-5 ">
    <NavBar />
    <div className="flex items-center justify-center m-20">
      <SignUp />
    </div>
    <Footer />
  </div>
  )
}

export default Signup
