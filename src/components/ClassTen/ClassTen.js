import React from 'react';
import useSeniorClassDetail from '../../useHooks/useSeniorClassDetail';
import SeniorClassDetail from '../SeniorClassDetail/SeniorClassDetail';

const ClassTen = () => {
    const [subjects,setSubjects] = useSeniorClassDetail([])
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mx-10 my-5'>
            {
                subjects.map(subject=><SeniorClassDetail 
                    key={subject.id}
                    subject={subject}
                    classLevel="Ten"
                    ></SeniorClassDetail>)
            }
        </div>
    );
};

export default ClassTen;