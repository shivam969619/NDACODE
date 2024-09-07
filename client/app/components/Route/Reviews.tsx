import { styles } from "@/app/styles/style";
import Image from "next/image";
import React from "react";

type Props = {};
export const reviews = [
  {
    name: "Gene Bates",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    profession: "Student|Cambridge university",
    comment: "jbkasdvjkh bhjkhdv kdgj gajvh ",
  },
  {
    name: "Gene Bates",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    profession: "Student|Cambridge university",
    comment: "jbkasdvjkh bhjkhdv kdgj gajvh ",
  },
  {
    name: "Gene Bates",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    profession: "Student|Cambridge university",
    comment: "jbkasdvjkh bhjkhdv kdgj gajvh ",
  },
  {
    name: "Gene Bates",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    profession: "Student|Cambridge university",
    comment: "jbkasdvjkh bhjkhdv kdgj gajvh ",
  },
  {
    name: "Gene Bates",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    profession: "Student|Cambridge university",
    comment: "jbkasdvjkh bhjkhdv kdgj gajvh ",
  },
];
const Reviews = (props: Props) => {
  return (
    <div className="w-[90%] 800px:w-[85%] m-auto">
      <div className="w-full 800px:flex items-center">
        <div className="800px:w-[50%] w-full">
          <Image
            src={require("../../../public/aerial-view-business-data-analysis-graph_53876-146152.jpg")}
            alt="buisness"
            width={700}
            height={700}
          />
        </div>
        <div className="800px:w-[50%] w-full">
          <h3 className={`${styles.title} 800px:!text-[40px]`}>
            Our Students Are
            <span className="text-gradient">Our Strength</span> <br />
            See What They say about Us
          </h3>
          <br />
          <p className={styles.label}></p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
