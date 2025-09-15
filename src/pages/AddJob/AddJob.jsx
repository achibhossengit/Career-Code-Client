import axios from "axios";
import Swal from "sweetalert2";

const AddJob = () => {
  const handleAddNewJob = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // process salary range
    const { min, max, currency, ...newJob } = data;
    newJob.salaryRange = {
      min: Number(min),
      max: Number(max),
      currency,
    };

    // process requirements & responsibilities
    newJob.requirements = newJob.requirements
      .split(",")
      .map((req) => req.trim());
    newJob.responsibilities = newJob.responsibilities
      .split(",")
      .map((req) => req.trim());

    // now send data to the backend
    axios
      .post("http://localhost:3000/jobs", newJob)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <h2 className="text-4xl font-bold text-center text-gray-700 py-5">
        Create A New Job
      </h2>

      <form onSubmit={handleAddNewJob} className="flex justify-center">
        <div className="bg-base-200 w-xl p-4 space-y-5">
          {/* Basic info */}
          <fieldset className="fieldset border-gray-400 rounded-box border p-4">
            <legend className="fieldset-legend">Basic Info</legend>

            <label className="label">Title</label>
            <input
              type="text"
              name="title"
              className="input w-full"
              placeholder="My awesome page"
            />

            <label className="label">Job Type</label>
            <select
              name="jobType"
              defaultValue="Select Job Type"
              className="select"
            >
              <option disabled={true}>Select Job Type</option>
              <option value="On Site">On Site</option>
              <option value="Remote">Remote</option>
              <option value="Hybrid">Hybrid</option>
            </select>

            <label name="category" className="label">
              Job Category
            </label>
            <select defaultValue="Select Job Category" className="select">
              <option disabled={true}>Select Job Category</option>
              <option value="IT/ Delopement">IT/ Delopement</option>
              <option value="Finance">Finance</option>
              <option value="Chemist">Chemist</option>
            </select>

            <label className="label">Application Deadline</label>
            <input
              type="date"
              name="applicationDeadline"
              className="input w-full"
              placeholder="Application Deadline"
            />
          </fieldset>

          {/* Job Details */}
          <fieldset className="fieldset border-gray-400 rounded-box border p-4">
            <legend className="fieldset-legend">Job Details</legend>

            <label className="label">Requirements</label>
            <textarea
              name="requirements"
              className="textarea w-full"
              placeholder="Job Requirements (Seperate by comma)"
            ></textarea>

            <label className="label">Responsibilities</label>
            <textarea
              name="responsibilities"
              className="textarea w-full"
              placeholder="Job responsibilities (Seperate by comma)"
            ></textarea>

            <label className="label">Description</label>
            <textarea
              name="description"
              className="textarea w-full"
              placeholder="Job Description"
            ></textarea>
          </fieldset>

          {/* Salary Range */}
          <fieldset className="fieldset border-gray-400 rounded-box border p-4">
            <legend className="fieldset-legend">Salary Range</legend>

            <label className="label">Min Salary</label>
            <input
              type="number"
              name="min"
              className="input w-full"
              placeholder="Enter Min Salary"
            />

            <label className="label">Max Salary</label>
            <input
              type="number"
              name="max"
              className="input w-full"
              placeholder="Enter Max Salary"
            />

            <label className="label">Currency</label>
            <select
              name="currency"
              defaultValue="Select Job Type"
              className="select"
            >
              <option disabled={true}>Select Currency</option>
              <option value="USD">USD</option>
              <option value="BDT">BDT</option>
              <option value="RUP">RUP</option>
            </select>
          </fieldset>

          {/* Company Info */}
          <fieldset className="fieldset border-gray-400 rounded-box border p-4">
            <legend className="fieldset-legend">Company Info</legend>

            <label className="label">Company Name</label>
            <input
              type="text"
              name="company"
              className="input w-full"
              placeholder="Microsoft"
            />

            <label className="label">Location</label>
            <input
              type="text"
              name="location"
              className="input w-full"
              placeholder="Silicon Valey"
            />

            <label className="label">Logo URL</label>
            <input
              type="url"
              name="company_logo"
              className="input w-full"
              placeholder="https://microsoft.com/logo"
            />
          </fieldset>

          {/* HR Info */}
          <fieldset className="fieldset border-gray-400 rounded-box border p-4">
            <legend className="fieldset-legend">HR Info</legend>

            <label className="label">Name</label>
            <input
              type="text"
              name="hr_name"
              className="input w-full"
              placeholder="Santano kazi"
            />

            <label className="label">Email</label>
            <input
              type="email"
              name="hr_email"
              className="input w-full"
              placeholder="hello@example.com"
            />
          </fieldset>

          <input
            type="submit"
            className="btn btn-primary w-full"
            value="Add New Job"
          />
        </div>
      </form>
    </div>
  );
};

export default AddJob;
