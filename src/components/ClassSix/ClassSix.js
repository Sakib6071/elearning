import React from 'react';
import useJuniorClassDetail from '../../useHooks/useJuniorClassDetail';
import JuniorClassDetail from '../JuniorClassDetail/JuniorClassDetail';

const ClassSix = () => {
    const [subjects,setSubjects] = useJuniorClassDetail([])
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mx-10 my-5'>
            {
                subjects.map(subject=><JuniorClassDetail 
                    key={subject.id}
                    subject={subject}
                    classLevel="Six"
                    ></JuniorClassDetail>)
            }
        </div>
    );
};

export default ClassSix;