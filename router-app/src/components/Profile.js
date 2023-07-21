import React from 'react';
import {useParams} from 'react-router-dom';

const profile = {
    go:{
        name:"고기천",
        job:"의적"
    },
    hong:{
        name:"홍길동",
        job:"의적"
    }
};

const Profile = () => {
    // url 파라미터 받아주기
    const params = useParams();

    const selectedProfile = profile[params.firstName];

    return (
        <div>
            <p>{params.firstName}</p>
            {selectedProfile ? (
                <div>
                    <h2>{selectedProfile.name}</h2>
                    <h2>{selectedProfile.job}</h2>
                </div>
            ) : (
                <p>notExist profile</p>
            )}
        </div>
    );
}

export default Profile