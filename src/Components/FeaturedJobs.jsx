import { useEffect, useState } from "react";
import SingleJobs from "./SingleJobs";


const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [jobLength, setJobLength] = useState(4);
    useEffect(()=>{
        fetch('jobs.json')
        .then(res=>res.json())
        .then(data=>setJobs(data))
    },[])
    console.log(jobs);
    return (
        <div className="py-14 space-y-6">
            <h1 className="text-5xl text-center font-bold">Featured Jobs</h1>
            <h1 className="text-2xl text-center font-bold">Total Jobs {jobs.length}</h1>
            <p className="text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
                {
                    jobs.slice(0, jobLength).map(job=><SingleJobs key={job.id} job={job}></SingleJobs>)
                }
            </div>
            <div className="text-center">
                <button onClick={()=> setJobLength()} className="btn text-white bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">See All Jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;