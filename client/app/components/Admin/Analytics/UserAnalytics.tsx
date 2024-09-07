import React from "react";
import { styles } from "@/app/styles/style";
import { useGetUsersAnalyticsQuery } from "@/redux/features/analytics/analyticsApi";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  Tooltip,
  YAxis,
} from "recharts"; // Import AreaChart and other necessary components from recharts
import Loader from "../../Loader/Loader";

type Props = {
  isDashboard?: boolean;
};

// const analyticsData = [
//   { name: "January 2023", count: 440 },
//   { name: "January 2023", count: 440 },
//   { name: "January 2023", count: 440 },
//   { name: "January 2023", count: 440 },
//   { name: "January 2023", count: 440 },
//   { name: "January 2023", count: 440 },
//   { name: "January 2023", count: 440 },
//   // ... other data entries
// ];

const UserAnalytics = (props: Props) => {
  const { data, isLoading } = useGetUsersAnalyticsQuery({});
  const analyticsData: any = [];
  data &&
    data.users.last12Months.forEach((item: any) => {
      analyticsData.push({ name: item.month, count: item.count });
    });
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div
          className={`${
            !props.isDashboard
              ? "mt-[50px]"
              : "mt-[50px] dark:bg-[#111c43] shadow-sm pb-5 rounded-sm"
          }`}
        >
          <div className={`${props.isDashboard ? "!ml-8 mb-5" : ""}`}>
            <h1
              className={`${styles.title} ${
                props.isDashboard && "!text-[20px]"
              } px-5 !text-start`}
            >
              Users Analytics
            </h1>
            {!props.isDashboard && (
              <p className={`${styles.label} px-5`}>Last 12 months data </p>
            )}
          </div>
          <div
            className={`w-full ${
              props.isDashboard ? "h-[30vh]" : "h-screen"
            } flex items-center justify-center`}
          >
            <ResponsiveContainer
              width={props.isDashboard ? "100%" : "90%"}
              height={!props.isDashboard ? "50%" : "100%"}
            >
              <AreaChart
                data={analyticsData}
                margin={{
                  top: 20,
                  right: 20,
                  left: 20,
                  bottom: 20,
                }}
              >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="count"
                  stroke="#4d62d9"
                  fill="#4d62d9"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </>
  );
};

export default UserAnalytics;
