import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredIds } from "../Utility/LocalStorage";
import AppliedJobCard from "./AppliedJobCard";

const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);

    useEffect(()=>{
        if (jobs.length> 0) {
           const storedJobIds = getStoredIds();
           const jobApplied = []
           for (const id of storedJobIds) {
            const job = jobs.find(job=>job.id === id)
            if (job) {
                jobApplied.push(job)
            }
           }
           setAppliedJobs(jobApplied)
           setDisplayJobs(jobApplied)
        }
    },[jobs])
    console.log(appliedJobs);

    const handleJobsFilter = filter => {
        if (filter === 'all') {
            setDisplayJobs(appliedJobs)
        } else if (filter === 'remote') {
            const remoteJobs = appliedJobs.filter(job=>job.remote_or_onsite === 'Remote');
            setDisplayJobs(remoteJobs);
        }else if (filter === 'onsite') {
            const onsiteJobs = appliedJobs.filter(job=>job.remote_or_onsite === 'Onsite');
            setDisplayJobs(onsiteJobs);
        }
    }
    return (
        <div>
            
            <h1 className="text-5xl text-center font-bold">Applied Jobs {appliedJobs.length}</h1>
            <div>
                <details className="dropdown">
                  <summary className="m-1 btn">Filter By</summary>
                  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li onClick={()=> handleJobsFilter('all')}><a>All</a></li>
                    <li onClick={()=> handleJobsFilter('remote')}><a>Remote</a></li>
                    <li onClick={()=> handleJobsFilter('onsite')}><a>Onsite</a></li>
                  </ul>
                </details>
            </div>
            <div className="py-10">
            {
                displayJobs.map(job=><AppliedJobCard key={job.id} job={job}></AppliedJobCard>)
            }
            </div>
        </div>
    );
};

export default AppliedJobs;