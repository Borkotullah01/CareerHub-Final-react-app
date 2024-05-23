import { Button } from "flowbite-react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const SingleJobs = ({job}) => {
    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
    return (
        <div className="border rounded-md p-6 space-y-3">
            <img src={logo} alt="" />
            <p className="text-2xl font-bold">{job_title}</p>
            <p className="text-xl text-[#757575] font-semibold">{company_name}</p>
            <div className="flex gap-4">
                <Button outline gradientDuoTone="purpleToBlue">{remote_or_onsite}</Button>
                <Button outline gradientDuoTone="purpleToBlue">{job_type}</Button>
            </div>
            <div className="flex gap-3 items-center">
                <p className="">Location: {location}</p>
                <p className="">Salary: {salary}</p>
            </div>
            <div>
            <Link to={`/job/${id}`}>
            <button className="btn text-white bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">View Details</button>
            </Link>
            </div>
        </div>
    );
};
SingleJobs.propTypes = {
    job: PropTypes.object,
}

export default SingleJobs;