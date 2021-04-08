import React from 'react';
import styled from 'styled-components';
import theme from '../defaultTheme';
import CssBaseline from '../components/CssBaseline/CssBaseline';

const StyledStyleGuideRenderer = styled.div`
  > .wrapper {
    * {
      font-family: ${theme.font.main.regular};
    }
    > .sidebar {
      width: 12rem;
      height: 100vh;
      position: fixed;
      border-right: 1px solid lightgray;
      > .header {
        padding: 1rem;
        border-bottom: 1px solid lightgray;
        > .title {
          font-size: 1.25rem;
        }
        > .version {
          font-size: 1rem;
        }
      }
    }
    > .content {
      margin-left: 12rem;
      .rsg--root-13 {
        padding: 2rem;
        border-bottom: 1px solid lightgray;
      }
      > .footer {
        text-align: center;
      }
    }
  }
`;

const StyleGuideRenderer = ({
  children,
  title,
  version,
  homepageUrl,
  components,
  toc,
  // hasSidebar,
}) => (
  <StyledStyleGuideRenderer>
    <CssBaseline />
    <main className="wrapper">
      {/* {hasSidebar && ( */}
      <div className="sidebar">
        <div className="header">
          <h1 className="title">{title}</h1>
          {version && <h2 className="version">{version}</h2>}
        </div>
        {/* <span className="description">
            CoEfficient Labs UI Component Library for React
          </span> */}
        {toc}
      </div>
      {/* )} */}
      <div className="content">
        {children}
        {components}
        <footer className="footer">Created by the CoLabs Team</footer>
      </div>
    </main>
  </StyledStyleGuideRenderer>
);

export default StyleGuideRenderer;
