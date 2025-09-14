import { useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const ApplyJob = () => {
  const { id: jobId } = useParams();
  const { user } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedIn = form.linkedIn.value;
    const github = form.github.value;
    const resume = form.resume.value;

    const application = {
      jobId,
      applicant: user.email,
      linkedIn,
      github,
      resume,
    };

    axios
      .post("http://localhost:3000/applications", application)
      .then((res) => {
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
      <h1 className="text-xl font-bold  text-center">
        You are applying job for {jobId}
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex justify-center items-center my-5"
      >
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <label className="label">Linked in Profile</label>
          <input
            type="url"
            name="linkedIn"
            className="input"
            placeholder="https://linkedin/achibhossen"
          />

          <label className="label">Github Profile</label>
          <input
            type="url"
            name="github"
            className="input"
            placeholder="https://github/acbhibhossengit"
          />

          <label className="Resume">Author</label>
          <input
            type="url"
            name="resume"
            className="input"
            placeholder="Your Resume link"
          />

          <input
            className="btn btn-primary"
            type="submit"
            value="Application Submit"
          />
        </fieldset>
      </form>
    </div>
  );
};

export default ApplyJob;
