import React, { useState } from 'react';
import CommunityCard from '../../components/CommunityCard';
import AddCommunity from '../../components/CreateCommunity';

const UserCommunitiesScreen = ({ communities }) => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div className='button-flex'>
        <button className='create-com-button' onClick={handleShow}>
          Add Community
        </button>
      </div>
      <AddCommunity show={show} setShow={setShow} />
      choose a community! Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Aperiam deleniti animi repellat eligendi praesentium placeat rerum
      itaque, mollitia quasi quidem obcaecati nihil! Aut eaque recusandae ea
      quae aliquam ipsum corporis. <br /> <br />
      <div className='card-flex'>
        {communities &&
          communities.map((c) => <CommunityCard key={c._id} community={c} />)}
      </div>
    </div>
  );
};

export default UserCommunitiesScreen;
