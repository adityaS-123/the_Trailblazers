import React from 'react'
import '../page.css'

const LandingPage = () => {
  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="flex gap-5 items-center justify-start p-5">
        <img src="/profile.png" width={100}/>
        <div className="flex flex-col items-start gap-1">
          <p className="text-3xl">Welcome Back</p>
          <p className="text-5xl">Rakesh Kumar</p>
        </div>
      </div>
      <div className="flex w-full justify-start items-center p-10 landing-page-bg">
        <div className="flex flex-col">
          <p className="font-extrabold text-4xl text-[#2e90f5]">
            NOT FEELING WELL ?
          </p>
          <button className="bg-[#2e90f5] hover:scale-105 hover:shadow-lg duration-100 text-white font-bold py-4 text-2xl">
            BOOK APPOINTMENT
          </button>
        </div>
      </div>
      <div className="flex p-10 flex-col w-full gap-5 items-start">
        <h1>Upcoming Appointments</h1>
        <table className="w-full border-2 border-spacing-2 border-collapse">
          <thead>
            <tr className="text-xl">
              <th className="border-2 border-slate-400">Profile</th>
              <th className="border-2 border-slate-400">Token No</th>
              <th className="border-2 border-slate-400">Date</th>
              <th className="border-2 border-slate-400">Time</th>
            </tr>
          </thead>
          <tr>
            <td className="border-2 border-slate-400">Dr. Aashish</td>
            <td className="border-2 border-slate-400">TOD21</td>
            <td className="border-2 border-slate-400">10 Mar 2024</td>
            <td className="border-2 border-slate-400"> 1.30 p.m.</td>
          </tr>
        </table>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
    <div>
      adwawd
    </div>
      </div>
      <div className="fixed bottom-8 flex hover:scale-110 hover:shadow-lg duration-100 items-center justify-center right-8 rounded-full w-20 h-20 bg-green-500">
        <img src="/chatbot.png" width={85}/>
      </div>
    </div>
  )
}

export default LandingPage
