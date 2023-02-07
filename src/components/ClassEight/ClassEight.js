import React from 'react';
import useJuniorClassDetail from '../../useHooks/useJuniorClassDetail';
import JuniorClassDetail from '../JuniorClassDetail/JuniorClassDetail';

const ClassEight = () => {
    const [subjects,setSubjects] = useJuniorClassDetail([])
    return (
        <>
        <p className='text-center text-green-700 font-semibold text-5xl my-14'>Take Your Course</p>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mx-10 mt-5 mb-10'>
            {
                subjects.map(subject=><JuniorClassDetail 
                    key={subject.id}
                    subject={subject}
                    classLevel="Eight"
                    ></JuniorClassDetail>)
            }
        </div>
        </>
    );
};

export default ClassEight;