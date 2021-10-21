import React from 'react';
import WorkResumeTitleData from './WorkResumeTitleData';
import './WorkResumeTitle.css';
import CardContentHolder from '../cardContentHolder/CardContentHolder';
import CardButton from '../cardButton/CardButton';
import ProfilePicture from '../profilePicture/ProfilePicture';

export default function WorkResumeTitle(props: { data: WorkResumeTitleData }) {
    const { person } = props.data;
    return <CardContentHolder className='workResumeCard'>
        <ProfilePicture imgUrl={person.profilePictureUrl}></ProfilePicture>
        <div className='content'>
            <div>
                <div className='personName'>{person.name}</div>
                <div className='personRole'>{person.role}</div>
                <address className='personAddress'>
                    {person.adress}
                </address>
            </div>
            <div className='personSocial'>
                <ul>
                    {person.social.map(social => {
                        return <li key={social.href}>
                            <CardButton {...social}></CardButton>
                        </li>;
                    })}
                </ul>
            </div>
        </div>
    </CardContentHolder>;
}