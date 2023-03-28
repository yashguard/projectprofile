import React from "react";

function User(Profile) {
  console.log(Profile.skills);
  return (
    <>
      <div className="profile-box row">
        <div className="w-50 profile-content">
          <div className="w-100">
            <h1>{Profile.name}</h1>
            <h4>{Profile.title}</h4>
            <span>Skills which I know :</span>
            {Profile.skills.map((v) => {
              console.log(v);
              return (
                <>
                  <ul>
                    <li className="skill">{v}</li>
                  </ul>
                </>
              );
            })}
          </div>
        </div>
        <div className="w-50 profile-image">
          <div className="w-100">
            <img src={Profile.img} />
          </div>
        </div>
      </div>
    </>
  );
}

export default User;
