import React from 'react';
import WorkResumeTitleData from './WorkResumeTitleData';
import './WorkResumeTitle.css';
import CardContentHolder from '../../../../components/gui/cardContentHolder/CardContentHolder';
import CardButton from '../../../../components/gui/cardButton/CardButton';

export default function WorkResumeTitle(props: { data: WorkResumeTitleData }) {
    const { data } = props;
    return <CardContentHolder className='workResumeCard'>
        <div className='profilePic'>
            <img src={data.profilePicURL} alt='Profile' />
        </div>
        <div className='content'>
            <div>
                <div className='personName'>{data.personName}</div>
                <div className='personRole'>{data.personRole}</div>
                <address className='personAddress'>
                    {data.personAddress}
                </address>
            </div>
            <div className='personSocial'>
                <ul>
                    {data.personSocial.map(social => {
                        return <li key={social.href}>
                            <CardButton
                                text={social.btnText}
                                href={social.href}
                                svgIconPath={social.svgIcon}
                            ></CardButton>
                        </li>;
                    })}
                </ul>
            </div>
        </div>
    </CardContentHolder>;
}