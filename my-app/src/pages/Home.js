import '../index.css'

const Home = () => {
    return (
        <>
            <div className='container'>
                {/* <div className='container-info'>
                    <h1 className='home-title'>To The Moon</h1>
                    <p className='home-stitle'>All your latest stock news.</p>
                </div> */}

                <a href='/stories/StoryOne'>
                    <div className='container-today'>
                        <h2 className='today-title'>Today's Top Story</h2>
                        <h4 className='tt-story-title'>Keep a eye on this one stock</h4>
                        <p className='tt-story-description'>lorem ipsum.</p>
                    </div>
                </a>


                <div className='other-top-stories'>
                    <h2 className='ot-title'>Other Top Stories</h2>
                    <div className='ot-stories'>
                        <a href='/stories/StoryTwo' className='ot-story img1'><div className='link-text'>Mobile Trading. The Future?</div></a>
                        <a href='/' className='ot-story img2'><div className='link-text'>The Daily Board</div></a>
                        <a href='/' className='ot-story img3'><div className='link-text'>What to Watch</div></a>
                    </div>
                </div>

                <div className='home-trend-container'>
                    <h3 className='htrend-title'>Today's Trending Stories</h3>
                    <div className='ht-stories'>
                        <a href='/' className='ht-story img1'><div className='link-text'>Why is New York the Stock Capitial?</div></a>
                        <a href='/' className='ht-story img2'><div className='link-text'>Newspapers?</div></a>
                        <a href='/' className='ht-story img3'><div className='link-text'>What has lead to FaceBook's Demise</div></a>
                        <a href='/' className='ht-story img4'><div className='link-text'>A New Platform?</div></a>
                    </div>
                </div>

                <div className='bg-style-home'></div>
            </div>
        </>
    );
}
 
export default Home;