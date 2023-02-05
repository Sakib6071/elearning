import React, { useEffect, useState } from 'react';

const useJuniorClassDetail = () => {
    const [subjects,setSubjects]=useState([])
    useEffect(()=>{
        fetch('/juniorClassDetail.json')
        .then(res=>res.json())
        .then(data=>setSubjects(data))
    },[])
    return [subjects,setSubjects]
};

export default useJuniorClassDetail;