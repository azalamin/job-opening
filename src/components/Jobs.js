import React, { useEffect, useState } from "react";
import Loading from "./Loading";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("http://refertest.pythonanywhere.com/job/openings")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data?.data);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="px-6 md:px-12 mt-20 pb-20">
      <h3 className="text-center text-4xl font-bold">Grab Your JOB</h3>
      <p className="text-center text-lg">Opening for everyone</p>
      {jobs.map(
        ({ id, designation, skills, company, location, min_experience }) => (
          <div
            data-aos="zoom-out-down"
            data-aos-duration="400"
            key={id}
            style={{ boxShadow: "0px 10px 40px 5px black" }}
            className="card bg-gray-900 text-white mt-20"
          >
            <div className="md:flex justify-between items-center p-10">
              <div className="md:w-[20%]">
                <h2 className="text-xl">{designation}</h2>
                <p>Company: {company}</p>
                <p>Location: {location}</p>
              </div>
              <div className="md:w-[40%]">
                <h2 className="">Required Skills</h2>
                <p>
                  {skills.map((skill, index) => (
                    <span key={index}>{skill}, </span>
                  ))}
                </p>
                <small>
                  Minimum Experience:
                  {min_experience === 0
                    ? "Fresher Opening"
                    : min_experience + " year"}
                </small>
              </div>
              <div className="flex justify-end">
                <button className="btn btn-primary">Apply Now</button>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Jobs;
