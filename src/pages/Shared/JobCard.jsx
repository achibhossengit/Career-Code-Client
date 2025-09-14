import React from "react";
import { Link } from "react-router";

const JobCard = ({ job }) => {
  const {
    _id,
    title,
    location,
    jobType,
    category,
    applicationDeadline,
    salaryRange,
    description,
    company,
    requirements,
    responsibilities,
    status,
    hr_email,
    hr_name,
    company_logo,
  } = job;
  return (
    <div className="card bg-base-300 p-2 w-96 shadow-sm transform transition duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-1 cursor-pointer">
      <div className="flex gap-2 items-center">
        <figure>
          <img className="w-16" src={company_logo} alt="logo" />
        </figure>

        <div>
          <p className="text-3xl font-semibold">{company}</p>
          <p className="text-sm">{location}</p>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">{jobType}</div>
        </h2>
        <p>
          {`(${salaryRange.min} - ${salaryRange.max}) ${salaryRange.currency}`}
        </p>
        <p>{description}</p>
        <div className="card-actions">
          {requirements.map((skill, index) => (
            <div key={index} className="badge badge-outline">
              {skill}
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center pt-5">
            <p className="badge badge-success max-w-30">{applicationDeadline}</p>
            <Link to={`/jobs/${_id}`} className="btn btn-primary btn-sm btn-outine">Apply Now</Link>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
