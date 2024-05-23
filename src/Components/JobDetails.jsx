import { useLoaderData, useParams } from "react-router-dom";
import { PiCurrencyCircleDollarLight } from "react-icons/pi";
import { TbCalendarUser } from "react-icons/tb";
import { TbPhoneCall } from "react-icons/tb";
import { AiOutlineMail } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";
// react Toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveIds } from "../Utility/LocalStorage";

const JobDetails = () => {
    const jobs = useLoaderData();
    const {jobId} = useParams();
    const intJobId = parseInt(jobId)
    const job = jobs.find(job=> job.id === intJobId)
    console.log(job);
    const { job_description, job_responsibility, educational_requirements, experiences, contact_information, salary, job_title,  } = job;

    const handleJobApply = () =>{
        toast("Applied Successfully");
        saveIds(intJobId);
    }

    return (
        <div className="space-y-6 py-14">
            <h1 className="text-center text-4xl font-bold">Jobs Details</h1>
            <div className="grid gap-5 md:grid-cols-5">
                <div className="border col-span-3 rounded-sm p-6 space-y-5 bg-gradient-to-r from-[#7e8ffe10] to-[#9873ff14]">
                    <p className="text-base text-[#757575]">
                        <span className="font-extrabold text-black">Job Description: </span>
                        {job_description}
                    </p>
                    <p className="text-base text-[#757575]">
                        <span className="font-extrabold text-black">Job Responsibility: </span>
                        {job_responsibility}
                    </p>
                    <p className="text-base text-[#757575]">
                        <span className="font-extrabold text-black">Educational Requirements: </span>
                        <br></br>
                        {educational_requirements}
                    </p>
                    <p className="text-base text-[#757575]">
                        <span className="font-extrabold text-black">Educational Requirements: </span>
                        <br></br>
                        {experiences}
                    </p>
                </div>
                <div className="col-span-2">
                    <div className="border rounded-sm p-6 space-y-5 bg-gradient-to-r from-[#7e8ffe10] to-[#9873ff14]">
                        <h1 className="text-xl font-extrabold">Job Details</h1>
                        <hr />
                        <div className="space-y-2">
                            <div className="flex gap-2 items-center">
                                <p className="text-xl"><PiCurrencyCircleDollarLight></PiCurrencyCircleDollarLight></p>
                                <span className="font-bold">Salary : </span>
                                {salary}
                            </div>
                            <div className="flex gap-2 items-center">
                                <p className="text-xl"><TbCalendarUser></TbCalendarUser></p>
                                <span className="font-bold">Job Title : </span>
                                {job_title}
                            </div>
                        </div>
                        <h1 className="text-xl font-extrabold">Contact Information</h1>
                        <hr></hr>
                        <div className="space-y-2">
                            <div className="flex gap-2 items-center">
                                <p className="text-xl"><TbPhoneCall></TbPhoneCall></p>
                                <span className="font-bold">Phone : </span>
                                {contact_information.phone}
                            </div>
                            <div className="flex gap-2 items-center">
                                <p className="text-xl"><AiOutlineMail></AiOutlineMail></p>
                                <span className="font-bold">Email : </span>
                                {contact_information.email}
                            </div>
                            <div className="">
                                <p className="flex gap-2 items-center">
                                <GrLocation></GrLocation>
                                <span className="font-bold">Address : </span>
                                </p>
                                {contact_information.address}
                            </div>
                        </div>
                    </div>
                    <div className="pt-6">
                        <button onClick={handleJobApply} className="w-full btn text-white bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">Apply Now</button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;