import SingleBookmark from "../SingleBookmark";

const BookmarkCart = ({ bookmark,reding }) => {
    return (
        <div>
            <h3 className='text-purple-700 text-lg font-medium text-center bg-purple-100 py-4 rounded-lg'>Spent time on read : {reding} min</h3>
            <div className='bg-slate-200 mt-5 pb-5 rounded-lg'>
                <h5 className='ml-8 py-5 text-xl font-medium'>Bookmarked Blogs :{bookmark.length}</h5>
                <div>
              {
                bookmark.map((singleBookmark, id) => <SingleBookmark singleBookmark={singleBookmark} key={id} ></SingleBookmark>)
              }
                </div>
            </div>
        </div>
    );
};

export default BookmarkCart;