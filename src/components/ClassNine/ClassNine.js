import React from 'react';
import useSeniorClassDetail from '../../useHooks/useSeniorClassDetail';
import SeniorClassDetail from '../SeniorClassDetail/SeniorClassDetail';

const ClassNine = () => {
    const [subjects] = useSeniorClassDetail([])
    return (
        <>
        <p className='text-center text-green-700 font-semibold text-5xl my-14'>Take Your Course</p>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mx-10 mt-5 mb-10'>
            {
                subjects.map(subject=><SeniorClassDetail 
                    key={subject.id}
                    subject={subject}
                    classLevel="Nine"
                    ></SeniorClassDetail>)
            }
        </div>
        </>
    );
};

export default ClassNine;