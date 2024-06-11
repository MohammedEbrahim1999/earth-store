import React from 'react'
import Bannar from './HomeComponent/Bannar/Bannar.jsx';
import Poster from './HomeComponent/Poster/poster.jsx'
import Opinions from './HomeComponent/opinions/opinion.jsx';
import Widget from './HomeComponent/widget/widget.jsx';
import Serve from './HomeComponent/Services/serve.jsx';
const Home = () => {
  return (
    <>
       <Bannar />
       <Poster />
       <Opinions />
       <Widget />
       <Serve />
    </>
  )
}

export default Home
