 {/* Story Ring */}
              <div className=" w-16 h-16 rounded-full p-[2px] bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 cursor-pointer">
                <img
                  src={item.img}
                  alt=""
                  className="w-full h-full rounded-full object-cover border-2 border-black"
                />
              </div>



{/* POSTS GRID */}
        <div className="grid grid-cols-3 gap-[2px]">
          {posts.map((img, i) => (
            <img key={i} src={img} className="w-full h-32 object-cover" />
          ))}
        </div>