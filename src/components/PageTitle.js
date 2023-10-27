import React from 'react';

function PageTitle({title, subtitle}) {

    return (
        <div>
            <div className={`text-center pb-10`}>
                {title && (
                    <h1 className='text-4xl font-semibold '>{title}</h1>
                )}
                {subtitle && (
                    <h2 className='text-2xl pt-2'>{subtitle}</h2>
                )}
            </div>
        </div>
  );
}

export default PageTitle;