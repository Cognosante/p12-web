import React from 'react';

import Header from './header';
import Footer from './footer';

export default function Page(props) {
  return (
    <>
      <Header />
      <main className="d-flex flex-column flex-grow-1">{<props.component />}</main>
      <Footer />
    </>
  );
}
