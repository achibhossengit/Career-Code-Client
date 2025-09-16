import { Suspense } from "react";
import { myApplicationsPromise } from "../../api/applicationsApi";
import useAuth from "../../hooks/useAuth";
import ApplicationsTable from "./ApplicationsTable";

const MyApplications = () => {
  const { user } = useAuth();

  console.log(user);

  return (
    <div>
      <h2 className="text-xl font-bold text-center">
        this is my applications page
      </h2>
      <Suspense fallback={'loading your applications'}>
        <ApplicationsTable
          myApplicationsPromise={myApplicationsPromise(user.email, user.accessToken)}
        ></ApplicationsTable>
      </Suspense>
    </div>
  );
};

export default MyApplications;
