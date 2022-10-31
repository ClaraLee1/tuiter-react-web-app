import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProfileComponent = () => {
    const profile = useSelector( state => state.profile );
    let navigate = useNavigate();
    const routeChange = () => {
        let path = `edit-profile`;
        navigate(path);
    }

    return (
        <>
            <div className="position-relative">
                <div className="row">
                    <i className="col col-2 bi bi-arrow-left fs-4 fw-bold mt-2"></i>
                    <div className="col col-8"><span className="fs-5 fw-bold">{profile.name}</span>
                    <div className="text-secondary">6,114 Tuits</div></div>
                </div>
                <img width="100%" src={`/images/${profile.bannerPicture}`}/>
                <div className="row">
                    <div className="col col-8">
                        <img className="position-absolute float-start rounded-circle bottom-0 start-0 ms-3"
                             height="100px" src={`/images/${profile.profilePicture}`}/>
                    </div>
                    <div className="col col-4">
                        <br/>
                        <button type="button" className="btn btn-light float-end fw-bold rounded-pill" onClick={routeChange}> Edit Profile</button>
                    </div>
                </div>
            </div>
            <div>
                <div className="fs-4 fw-bold">{profile.name}</div>
                <div className="text-secondary">{profile.handle}</div>
                <br/>
                <div>{profile.bio}</div>
                <div className="text-secondary mt-3">
                    <i className="bi bi-geo-alt"></i><span>{profile.location}</span>
                    <i className="bi bi-balloon ps-2"></i><span>Born {profile.dateOfBirth}</span>
                    <i className="bi bi-calendar3 ps-2"></i><span>Joined {profile.dateJoined}</span>
                </div>
                <div className="mt-3">
                    <span class="fw-bold">{profile.followingCount}</span> <span class="text-secondary">Following</span>
                    <span class="fw-bold ps-2">{profile.followersCount}</span> <span class="text-secondary">Followers</span>
                </div>
            </div>
        </>
    );
}

export default ProfileComponent;