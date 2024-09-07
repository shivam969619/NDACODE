import React from "react";
import AdminSidebar from "@/app/components/Admin/Sidebar/AdminSidebar";
import Heading from "@/app/utils/Heading";
import UserAnalytics from "../../components/Admin/Analytics/UserAnalytics";
import DashboardHeader from "@/app/components/Admin/DashboardHeader";
type Props = {};

const page = (props: Props) => {
  return (
    <div>
      page
      <Heading
        title="Elearning Admin"
        description="Elearning si al platform "
        keywords="Programing MERN"
      />
      <div className="flex">
        <div className="1500px:w-[16%] w-1/5">
          <AdminSidebar />
        </div>
        <div>
          <DashboardHeader />
          <UserAnalytics />
        </div>
      </div>
    </div>
  );
};

export default page;
