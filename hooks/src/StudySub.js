import React from 'react';
import { Link, Route, useParams } from 'react-router-dom';
import State from './State';
import Effect from './Effect';

const StudySub = (props) => {
    const content = [];
    const { id } = useParams();

    if(id === 'state'){
        //content.push('<li>'+ id +'입니다.</li>');const content = [];
        content.push(<State></State>);
    } else if(id === 'effect'){
        content.push(<Effect></Effect>);
    }

    return (
        content
    )
};

export default StudySub;