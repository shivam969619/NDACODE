import React from "react";
import AdminSidebar from "@/app/components/Admin/Sidebar/AdminSidebar";
import Heading from "@/app/utils/Heading";
import CourseAnalytics from "@/app/components/Admin/Analytics/CourseAnalytics";
import DashboardHeader from "@/app/components/Admin/DashboardHeader";
type Props = {};

const page = (props: Props) => {
  return;
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
        <CourseAnalytics />
      </div>
    </div>
  </div>;
};

export default page;
