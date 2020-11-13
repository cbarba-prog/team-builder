import React from 'react';

const List = (props) => {
    const {team} = props
    return (
        <div className='team-container'>
            <h2>The Team</h2>
            {team.map((teammate, index) => { 
                return (
                    <div className="teammate" key={index}>
                        <h2>{teammate.name}</h2>
                        <p>{teammate.email}</p>
                        <p>{teammate.role}</p>
                    </div>
                )
            })}

        </div>
      );
}
 
export default List;