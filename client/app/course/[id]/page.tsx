"use client";

import CourseDeatilsPage from "../../components/Course/CourseDeatilsPage";
const Page = ({ params }: any) => {
  return (
    <div>
      <CourseDeatilsPage id={params.id} />
    </div>
  );
};

export default Page;
