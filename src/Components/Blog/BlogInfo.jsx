import React from 'react';
import { CiBookmark } from 'react-icons/ci';

const BlogInfo = ({ blogInfo,handleToBookmark, handleToReding }) => {
    console.log(blogInfo);
    const { cover, author_img, author, posted_date, reading_time, title, hashtags } = blogInfo;
    return (
        <div>
            <div className='w-full mb-8'>
                <div>
                    <img className='h-[500px] w-[900px] rounded-md' src={cover} alt="" />
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center gap-2 my-3'>
                            <img className='w-[60px] h-[60px] rounded-full' src={author_img} alt="" />
                            <div>
                                <h3 className='text-xl font-medium'>{author}</h3>
                                <p className='opacity-80'>{posted_date}</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-2'>
                            <p>{reading_time} Min read</p>
                            <span className='text-orange-500 cursor-pointer' onClick={()=> handleToBookmark(blogInfo)}><CiBookmark></CiBookmark></span>
                        </div>
                    </div>
                    <h6 className='text-2xl font-medium'>{title}</h6>
                    <p className='opacity-80 text-blue-600 my-2'>{hashtags}</p>
                    <button className='border-none underline text-blue-600 text-base font-semibold' onClick={()=>handleToReding(reading_time)}>Mark as read</button>
                </div>
            </div>
        </div>
    );
};

export default BlogInfo;