import React from 'react'

const HospitalSelect = () => {
  return (
    <div className="relative flex flex-col gap-8 w-full">
      <div className="absolute top-10 left-10 py-2 px-20 rounded-full border-black border-2">
        Hamirpur
      </div>
      <div>
      <div className="mt-28">
        <h1>
          SELECT A HOSPITAL
        </h1>
        <h2>
        (अस्पताल का चयन करें)
        </h2>
      </div>
      <div className="flex flex-col gap-5 pt-5 w-full">
        <div className="flex border-black border-2 w-11/12 m-auto rounded-3xl items-center justify-between px-5 py-2">
          <div className="flex flex-col">
              <h3>
                City Hospital
              </h3>
              <p>
                3/5
              </p>
              <p>
                123 street
              </p>
              <p>
                hospital@exmaple.com
              </p>
          </div>
          <button className="bg-[#2e90f5] rounded-full py-2 px-5 text-white hover:scale-105 duration-100 hover:shadow-lg">
            SELECT
          </button>
        </div>
        <div>

        </div>
        <div>

        </div>
      </div>
      </div>
    </div>
  )
}

export default HospitalSelect
