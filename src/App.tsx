import React from 'react';
import './App.css';
import { HeaderButtonProps } from './components/gui/headerButton/HeaderButton';
import HeaderMenu from './components/gui/headerMenu/HeaderMenu';
import PrimaryButton from './components/gui/primaryButton/PrimaryButton';
import SecondaryButton from './components/gui/secondaryButton/SecondaryButton';
import ProjectInfoCard from './components/modelData/projectInfoCard/ProjectInfoCard';
import StackInfoCard from './components/modelData/stackInfoCard/StackInfoCard';

function App() {
  const info = {
    projectTitle: 'Title of Project',
    projectDescription: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt adipisci officiis aspernatur tenetur dicta distinctio excepturi, iste obcaecati error molestiae sit, reprehenderit illo consectetur nulla recusandae, debitis nobis? Facilis, error.',
    techs: [{
      category: 'cat',
      iconName: 'java',
      name: 'Javinha massa'
    }, {
      category: 'cat',
      iconName: 'java',
      name: 'Javinha massa'
    }],
    relatedLinks: [{
      iconName: 'java',
      label: 'Repositório',
      url: '/'
    }]
  };
  const stackInfo = {
    badgeIcon: 'java',
    items: [
      'Tech1', 'Tech2'
    ],
    title: 'Java',
  };
  const btns: HeaderButtonProps[] = [{
    href: 'https://google.com',
    text: 'Google Pesquisa'
  }, {
    href: 'https://github.com',
    text: 'Github'
  }]
  return <>
    <HeaderMenu buttons={btns}></HeaderMenu>
    <div className="wrapper">
      <StackInfoCard stackInfo={stackInfo} highlighColor='orange'></StackInfoCard>
    </div>
    <div className="wrapper">
      <ProjectInfoCard projectInfo={info}></ProjectInfoCard>
    </div>
    <div className="wrapper">
      <PrimaryButton text='Primary Button' href='/'></PrimaryButton>
    </div>
    <div className="wrapper">
      <SecondaryButton text='Secondary Button' href='/'></SecondaryButton>
    </div>
  </>
}

export default App;
