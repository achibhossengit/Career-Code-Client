import { Suspense } from "react";
import useAuth from "../../hooks/useAuth";
import ApplicationsTable from "./ApplicationsTable";
import useApplicationApi from "../../api/useApplicationApi";

const MyApplications = () => {
  const { user } = useAuth();
  const { myApplicationsPromise } = useApplicationApi();
  
  return (
    <div>
      <h2 className="text-xl font-bold text-center">
        this is my applications page
      </h2>
      <Suspense fallback={"loading your applications"}>
        <ApplicationsTable
          myApplicationsPromise={myApplicationsPromise(user.email)}
        ></ApplicationsTable>
      </Suspense>
    </div>
  );
};

export default MyApplications;
