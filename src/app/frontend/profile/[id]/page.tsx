import React from 'react';

const UserProfile = ({ params }: any) => {
  return (
    <>
      <div className='text-2xl text-white items-center text-center'>
        <h1 className='text-sm m-2'>Profile</h1>
        <hr />
        <p className='text-4xl m-2'>Profile page of {params.id}</p>
      </div>
    </>
  );
};

export default UserProfile;
