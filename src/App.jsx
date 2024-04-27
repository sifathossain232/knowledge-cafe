import { useState } from "react"
import Blog from "./Components/Blog/Blog"
import BookmarkCart from "./Components/Bookmark/BookmarkCart"
import Header from "./Components/Header/Header"


function App() {
  const [bookmark, setBook] = useState([]);
  const [reding,setReding] = useState(0);

  const handleToBookmark = (blogInfo) => {
    const newbookmark = [...bookmark, blogInfo]
    setBook(newbookmark)
  }
  const handleToReding = (read) =>{
    console.log(read,'hello');
    const newReding = reding + read;
    setReding(newReding);
  }


  return (
    <div>
      <Header></Header>
      <div className="flex w-[1280px] m-auto my-5 gap-6">
        <div className="w-8/12">
          <Blog handleToBookmark={handleToBookmark} handleToReding={handleToReding}></Blog>
        </div>
        <div className="w-4/12">
          <BookmarkCart bookmark={bookmark} reding={reding}></BookmarkCart>
        </div>
      </div>
    </div>
  )
}

export default App
