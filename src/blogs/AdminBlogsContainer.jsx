import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useGetBlogs from "../hooks/useGetBlogs";
import useRemoveBlogs from "../hooks/useRemoveBlogs";

function AdminBlogsContainer({ setEditOpenPage, setBlogsId }) {
  const { data: blogs } = useGetBlogs();
  const blogList = blogs?.blogs || [];
  const [visibleBlogs, setVisibleBlogs] = useState({});
  const { removeBlog } = useRemoveBlogs();
  console.log(blogs);

  const toggleShowContent = (id) => {
    setVisibleBlogs((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleDeleteBlog = (id) => {
    removeBlog(id);
  };

  const handleEditBlog = (id) => {
    console.log("Editing blog with ID:", id);
    setBlogsId(id);
  };

  return (
    <>
      {blogList.map((blog) => (
        <motion.div
          key={blog.id}
          className="flex flex-col w-full bg-[#222] rounded-[20px] mt-[20px] overflow-hidden cursor-pointer font-Nunito"
          animate={{ height: visibleBlogs[blog.id] ? "auto" : "70px" }}
          transition={{ duration: 0.3 }}
          onClick={() => toggleShowContent(blog.id)}
        >
          <div className="flex h-[70px] py-[8px] px-[16px] items-center gap-[10px] justify-between w-full">
            <h3 className="text-[#C4C4C4] font-Nunito text-sm font-bold leading-normal uppercase ">
              {blog.title}
            </h3>
            <motion.img
              src="/icons/service-arrow.svg"
              alt="arrow"
              className="transition-transform"
              animate={{ rotate: visibleBlogs[blog.id] ? -90 : 0 }}
              transition={{ duration: 0.3 }}
            />
          </div>

          <AnimatePresence>
            {visibleBlogs[blog.id] && (
              <motion.div
                className="flex flex-col gap-[10px] mt-4 overflow-hidden"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-4">
                  <div className="flex items-center gap-[10px] justify-between mb-[20px]">
                    <div className="flex gap-[10px] items-center">
                      <motion.img
                        src="/icons/adminTrashcan_svg.svg"
                        alt="delete"
                        className="cursor-pointer w-[30px] h-[30px] hover:scale-110 transition-transform"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteBlog(blog.id);
                        }}
                      />
                      <motion.img
                        src="/icons/adminEdit_svg.svg"
                        alt="edit"
                        className="cursor-pointer w-[30px] h-[30px] hover:scale-110 transition-transform"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleEditBlog(blog.id);
                          setEditOpenPage(true);
                        }}
                      />
                    </div>
                  </div>
                  <p className="text-[#C4C4C4] text-[18px] ">
                    {blog.description}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </>
  );
}

export default AdminBlogsContainer;
