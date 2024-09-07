import React, { useEffect } from "react";
import { useGetOrderAnalyticsQuery } from "@/redux/features/analytics/analyticsApi";
import { styles } from "@/app/styles/style";
import { useGetUsersAnalyticsQuery } from "@/redux/features/analytics/analyticsApi";
import {
  AreaChart,
  CartesianGrid,
  Area,
  ResponsiveContainer,
  XAxis,
  Legend,
  LineChart,
  Line,
  Tooltip,
  YAxis,
} from "recharts";
import Loader from "../../Loader/Loader";
const data: any = [];
type Props = {
  isDashboard?: boolean;
};

export default function OrderAnalytics({ isDashboard }: Props) {
  const { data, isLoading } = useGetOrderAnalyticsQuery({});
  const analyticsData: any = [];
  data &&
    data.orders.last12Months.forEach((item: any) => {
      analyticsData.push({
        name: item.name,
        Count: item.count,
      });
    });
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={isDashboard ? "h-[30vh]" : "h-screen"}>
          <div
            className={isDashboard ? "mt-[0px] pl-[40px] mb-2" : "mt-[50px]"}
          >
            <h1
              className={`${styles.title} ${
                isDashboard && "!text-[20px]"
              } px-5 !text-start`}
            >
              Orders Analytics
            </h1>
            {!isDashboard && (
              <p className={`${styles.label}px-5`}>
                Last 15 months analytics data ;
              </p>
            )}
          </div>
          <div
            className={`w-full ${
              !isDashboard ? "h-[90%]" : "h-full"
            } flex items-center justify-center`}
          >
            <ResponsiveContainer
              width={isDashboard ? "100%" : "90%"}
              height={isDashboard ? "100%" : "50%"}
            >
              <LineChart
                width={500}
                height={300}
                data={analyticsData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                {!isDashboard && <Legend />}
                <Line type="monotone" dataKey="Count" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </>
  );
}
