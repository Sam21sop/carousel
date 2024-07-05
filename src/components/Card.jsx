import React from 'react'
import { FaLinkedin } from 'react-icons/fa6';

const Card = (props) => {

    const { data } = props;

    return (
        <>
            <div className="max-w-sm border rounded-t-lg shadow">
                <div className="flex justify-center py-1">
                    <img
                        className="rounded-t-lg object-cover"
                        src={data.img}
                        alt="image"
                    />
                </div>
                <div className="px-4 py-2">
                    <a
                        href={data.linkedInUrl}
                        className="flex justify-between items-center"
                    >
                        <h5 className=" py-1 text-2xl font-bold tracking-tight capitalize">
                            {data.name}
                        </h5>
                        <span className="font-bold">
                            <FaLinkedin/>
                        </span>
                    </a>
                    <p className=" font-normal text-wrap">
                        {
                            data.about
                        }
                    </p>
                </div>
            </div>

        </>
    )
}

export default Card