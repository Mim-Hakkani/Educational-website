import React from 'react';
import notfound from '../images/error.png'

const NotFound = () => {
    return (
        <div className="my-5 py-5">
            <img src={notfound} alt="Not found page"
            
            style={{

                margin:'0 auto',
                display:'block'

            }}></img>

            <h1 style={{
                    fontSize: '73px',
                    fontFamily: 'cursive',
                    color: 'steelblue',
                    textAlign: 'center',
                    marginTop: '50px'
            }}>Page Not Found</h1>
        </div>
    );
};

export default NotFound;