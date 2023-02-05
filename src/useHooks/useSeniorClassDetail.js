import React, { useEffect, useState } from 'react';

const useSeniorClassDetail = () => {
    const [subjects,setSubjects]=useState([])
    useEffect(()=>{
        fetch('/seniorClassDetail.json')
        .then(res=>res.json())
        .then(data=>setSubjects(data))
    },[])
    return [subjects,setSubjects]
};

export default useSeniorClassDetail;