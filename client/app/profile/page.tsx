"use client"
import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import Protected from '../hooks/useProtected';
import Heading from '../utils/Heading';
import Header from '../components/Header';
import Profile from "../components/Profile"
type Props = {};

const Page: FC<Props> = (props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(5);
  const [route, setRoute] = useState('Login');
  const {user}=useSelector((state:any)=>state.auth)

  return (
    <div>
      <Protected>
        {/* Content that should be protected */}
        <Heading title={`${user?.name}`} 
        description="A Complete written guidance place" keywords="NDA CDS AFCAT WRITTEN " />
        <Header open={open} setOpen={setOpen} activeItem={activeItem} setRoute={setRoute} route={route} />
        <Profile user={user}/>
      </Protected>
    </div>
  );
};

export default Page;
