import React from 'react';
import NavMain from '../components/NavMain';
import StatusPage from '../components/StatusPage';
import Footer from '../components/Footer';
import '../scss/style-guide.scss';

export default class MainLayout extends React.Component {
  render() {
    const {
      children,
      location,
    } = this.props;
    const pathClass = location.pathname.replace(/\//g, '');
    const classNames = `docSearch-content docs-wrap ${pathClass}`;
    const renderFooter = location.pathname !== '/api-v3' ? <Footer /> : null;

    return (
      <div className={classNames}>
        <StatusPage />
        <NavMain />
        {children()}
        {renderFooter}
      </div>
    );
  }
}