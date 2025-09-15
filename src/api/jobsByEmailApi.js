export const jobsByEmailPromise = (email) => {
  return fetch(`http://localhost:3000/jobs/applications?email=${email}`, {
    credentials: "include",
  }).then((res) => res.json());
};
