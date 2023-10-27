import React from 'react';

function PageTitle({title}) {

    return (
        <div>
            <div className={`text-center text-4xl font-semibold pb-10`}>
                <h1>{title}</h1>
            </div>
        </div>
  );
}

export default PageTitle;