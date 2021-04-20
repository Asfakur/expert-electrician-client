import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Comment from '../Comment/Comment';
import Header from '../Header/Header';
import RecentWorks from '../RecentWorks/RecentWorks';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <Reviews></Reviews>
            <RecentWorks></RecentWorks>
            <Comment></Comment>
            <Footer></Footer>
        </div>
    );
};

export default Home;