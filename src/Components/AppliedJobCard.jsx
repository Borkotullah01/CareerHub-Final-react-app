import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import { GrLocation } from "react-icons/gr";
import { AiOutlineDollar } from "react-icons/ai";
const AppliedJobCard = ({job}) => {
    const { id, logo, job_title, company_name, remote_or_onsite, job_type, location, salary } = job;
    return (
        <div>
            <div className="grid grid-cols-1">
                <div className="flex gap-6 border m-2 p-5 rounded-md">
                    <div className="grid justify-center items-center w-60 h-40 bg-[#F4F4F4] rounded-lg">
                        <img src={logo} alt="" />
                    </div>
                    <div className="flex flex-col justify-between">
                        <p className="text-2xl font-bold">{job_title}</p>
                        <p className="text-xl text-[#757575] font-semibold">{job_title}</p>
                        <div className="flex gap-4">
                            <Button outline gradientDuoTone="purpleToBlue">{remote_or_onsite}</Button>
                            <Button outline gradientDuoTone="purpleToBlue">{job_type}</Button>
                        </div>
                        <div className="flex gap-5">
                            <p className="flex gap-1 items-center"> <GrLocation></GrLocation> {location}</p>
                            <p className="flex gap-1 items-center"><AiOutlineDollar></AiOutlineDollar> Salary : {salary}</p>
                        </div>
                    </div>
                    <div className="flex flex-grow justify-end items-center mr-10">
                        <Link to={`/job/${id}`}>
                        <button className="btn text-white bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppliedJobCard;