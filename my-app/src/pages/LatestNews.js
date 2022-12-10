import '../index.css'

const LatestNews = () => {
    return (
        <>
            <div>
                <div className='LN-container-info'>
                    <h1 className='LN-title'>Latest News</h1>
                </div>
                <div className='LN-container'>
                    <div className='jh'>
                        <a href='/pages/LatestNews' className='LN-story-container'> <div className='LN-story-title'>Story #1</div> <div className='LN-story-stitle'>Author</div> <div className='storyimg0'></div></a>
                        <a href='/pages/LatestNews' className='LN-story-container'> <div className='LN-story-title'>Story #2</div> <div className='LN-story-stitle'>Author</div> <div className='storyimg0'></div></a>
                        <a href='/pages/LatestNews' className='LN-story-container'> <div className='LN-story-title'>Story #3</div> <div className='LN-story-stitle'>Author</div> <div className='storyimg0'></div></a>
                    </div>
                </div>
                <div className='LN-BG'></div>
            </div>
        </>
    );
}
 
export default LatestNews;