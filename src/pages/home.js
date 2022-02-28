import React from "react";
import PageWrap from "../components/pagewrap";
import Header from "../parts/home/header";
import Navbar from '../components/navbar';
import Bloghome from "../parts/home/blog";
import Recent from "../parts/home/recentlistings";
import Footer from "../components/footer";
import ScrollToTop from "../components/ScrollToTop";


function Home() {
  return (
    <>
    <Navbar />
    <PageWrap>
        <Header />
        <br/>

        <Recent />

        <br />


        <Bloghome />
        <br/>
        

        
    </PageWrap>
    <Footer />
        <ScrollToTop />
    </>
  );
}

export default Home;