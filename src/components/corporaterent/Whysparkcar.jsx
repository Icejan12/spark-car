import React from 'react'

const Whysparkcar = ({ data }) => {
    return (
        <div className='mt-3 mb-5'>
            <h2 className='text-center fw-600 pt-3' style={{ color: "#0CAA4B", letterSpacing: "-1.5px" }}>WHY RENT FROM SPARK CAR?
            </h2>
            <p className='text-center mt-3 mb-4' style={{ fontSize: "27px" }}>Trusted by 200+ Corporate Clients All Across Nepal
            </p>
            <div className='d-flex gap-1 justify-content-between'>
                {data.map((value) => (
                    <div className='text-center'>
                        <div className='text-center mb-3'>
                            <img src={value.img} alt="" style={{ height: "120px" }} />
                        </div>
                        <h5 className='fw-600'>{value.title}</h5>
                        <p className='text-grey fs-15 lh-lg' style={{ width: "450px" }}>{value.content}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Whysparkcar