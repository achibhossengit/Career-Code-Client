import { useLoaderData, useNavigate } from "react-router";

const JobDetails = () => {
  const job = useLoaderData();
  const navigate = useNavigate();

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
    hr_name,
    hr_email,
    company_logo,
  } = job;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-blue-100 shadow-md rounded-md my-10">
      <div className="flex items-center gap-4 mb-6">
        <img
          src={company_logo}
          alt={company}
          className="w-20 h-20 object-contain"
        />
        <div>
          <h2 className="text-3xl font-bold">{title}</h2>
          <p className="text-gray-600">{company}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <p>
            <span className="font-semibold">Location:</span> {location}
          </p>
          <p>
            <span className="font-semibold">Job Type:</span> {jobType}
          </p>
          <p>
            <span className="font-semibold">Category:</span> {category}
          </p>
        </div>
        <div>
          <p>
            <span className="font-semibold">Deadline:</span>{" "}
            {applicationDeadline}
          </p>
          <p>
            <span className="font-semibold">Salary:</span> {salaryRange.min}–
            {salaryRange.max} {salaryRange.currency.toUpperCase()}
          </p>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Job Description</h3>
        <p className="text-gray-700">{description}</p>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Requirements</h3>
        <ul className="list-disc list-inside text-gray-700">
          {requirements.map((req, index) => (
            <li key={index}>{req}</li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Responsibilities</h3>
        <ul className="list-disc list-inside text-gray-700">
          {responsibilities.map((res, index) => (
            <li key={index}>{res}</li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">HR Contact</h3>
        <p>
          <span className="font-semibold">Name:</span> {hr_name}
        </p>
        <p>
          <span className="font-semibold">Email:</span> {hr_email}
        </p>
      </div>

      <div className="text-center mt-8">
        <button
          onClick={() => navigate(`/apply-job/${_id}`)}
          className="btn btn-primary"
        >
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default JobDetails;
