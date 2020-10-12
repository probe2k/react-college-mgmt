import React from 'react';
import './App.css';
import Main from './components/main';
import { Link } from 'react-router-dom';
import { Content, Header, Layout, Navigation } from 'react-mdl';

function App() {
  return (
    <div className="parent-tag">
      <Layout fixedHeader>
        <Header className="header-color" title={<Link style={{ textDecoration: 'none', color: 'white' }} to="/">College Management / <span><strong>XYZ</strong></span></Link>} scroll>
          <Navigation>
            <Link to="/admin"><strong>Admin</strong></Link>
          </Navigation>
        </Header>
        <Content>
          <div className="page-content" />
          <Main />
        </Content>
      </Layout>
    </div >
  );
}

export default App;
