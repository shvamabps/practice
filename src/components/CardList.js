import React from 'react';
import GCard from './GCard';

const CardList = (props) => (
    <div>
        {props.profiles.map(profile => <GCard key={profile.id} {...profile} />)}
    </div>
);


export default CardList;