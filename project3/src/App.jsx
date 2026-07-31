
    function App() {

  const instagramPage = {
    username: "ysjagan",
    name: "YS Jagan Mohan Reddy",
    posts: "6,348",
    followers: "1.7M",
    following: "1",
    bio: "President, YSR Congress Party",
    link: "@ysrcongress",
    Seclink: "🔗twitter.com/ys jagan and 3 more",
    profilePic: "https://th.bing.com/th/id/OIP.WWDK510wdUF7RQYg4y9edAHaHa?w=202&h=202&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
  };
  const highlights = [
    {
      title: "YSRCP",
      img: "https://tse1.mm.bing.net/th/id/OIP.jvcHK-vDE2j-ZIUfV0jyWQHaHW?r=0&pid=ImgDet&w=178&h=176&c=7&dpr=1.5&o=7&rm=3"
    },
    {
      title: "Telegram",
      img: "https://th.bing.com/th/id/OIP.hNpDNQXvKnbdLAwDzh5MawHaFj?w=251&h=187&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"
    },
    {
      title: "Highlights",
      img: "https://th.bing.com/th/id/OIP.dPWHI2HZAKEHCX3jNNI5gAHaG4?w=128&h=150&c=6&r=0&o=7&dpr=1.5&pid=1.7&rm=3"
    },
    {
      title: "Ralley",
      img: "https://bsmedia.business-standard.com/_media/bs/img/article/2019-01/09/full/1547023015-9962.jpg"
    },
    {
      title: "Meetings",
      img: "https://th.bing.com/th/id/OIP.nacaAMUrUOVSs6ErPQ5Z9wHaGi?w=190&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"
    }

    
  ];

  const posts = [
    "https://www.bing.com/th/id/OIP.oO7hHqLF2EzGy9ooxWSfvAHaJj?w=193&h=248&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=ImgAns&rm=2",
    "https://th.bing.com/th/id/OIP.xfxWZ2ODBI1wML-GUArsDwHaNK?w=187&h=333&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    "https://th.bing.com/th/id/OIP.M4X4UwmpQ1UxatPr1Ma-XgHaKH?w=202&h=277&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    "https://th.bing.com/th/id/OIP._B63CVrxn3b6rd6dZRZavQHaEc?w=202&h=121&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    "https://jaganannaconnects.com/gallery/cm-ys-jagan/uploads/1696246657_9.jpg",
    "https://tse1.explicit.bing.net/th/id/OIP.ITIyvPw-RfP1dNzAwM0Q3gHaFj?r=0&pid=ImgDet&w=178&h=133&c=7&dpr=1.5&o=7&rm=3",
  ];

  return (
    <div className="bg-black text-white min-h-screen flex justify-center">
      
      <div className="w-full max-w-md p-4">

        {/* Header */}
<div className="flex justify-between items-center mb-6">
  <p className="text-xl cursor-pointer">く</p>

  <h2 className="font-semibold text-lg flex items-center gap-1">
    {instagramPage.username}
    <img
      src="https://img.icons8.com/?size=96&id=2sZ0sdlG9kWP&format=png"
      alt="verified"
      className="w-5 h-5"
    />


  </h2>
   
   <p className="text-xl cursor-pointer">🔔</p>
  <p className="text-xl cursor-pointer">⋮</p>
</div>

        {/* Profile + Stats */}
<div className="flex items-center mb-6 gap-6">

  {/* Profile Image */}
  <img
    src={instagramPage.profilePic}
    alt="profile"
    className="w-20 h-20 rounded-full border-2 border-gray-500"
  />

  {/* Stats + Name */}
  <div className="flex flex-col">

    {/* Name */}
    <p className="mb-2">{instagramPage.name}</p>

    {/* Stats */}
    <div className="flex gap-6 text-center w-50%">
      <div>
        <p className="font-semibold">{instagramPage.posts}</p>
        <p className="text-gray-400 text-sm">posts</p>
      </div>

      <div>
        <p className="font-semibold">{instagramPage.followers}</p>
        <p className="text-gray-400 text-sm">followers</p>
      </div>

      <div>
        <p className="font-semibold">{instagramPage.following}</p>
        <p className="text-gray-400 text-sm">following</p>
      </div>
    </div>

  </div>

</div>

        {/* Bio */}
        <div className="mb-4 mt-4">
          
          <p className="text-sm whitespace-pre-line">{instagramPage.bio}</p>
          <p className="text-blue-400 text-sm cursor-pointer">{instagramPage.link}</p>
          <p className="text-gray-400 text-sm cursor-pointer">{instagramPage.Seclink}</p>
        </div>

        {/* small chips */}
          <div className="flex gap-2 mt-2 mb-3 flex-wrap">
            <span className="bg-black border border-gray-50 px-3 py-1 rounded-full text-xs cursor-pointer">
              @ ysjagan
            </span>
            <span className="bg-black border border-gray-50 px-3 py-1 rounded-full text-xs cursor-pointer">
              💬 YS Jagan Moh...
            </span>
          </div>

          {/* FOLLOWED BY */}
          <p className="text-sm mt-2 mb-2">
            Followed by <span className="font-semibold">nikhilsiddhu111</span>{" "}
            and <span className="font-semibold">_akshayareddyyy</span>
          </p>
      


        {/* Buttons */}
        <div className="flex gap-2 mb-6">
          <button className="bg-blue-500 px-7 py-1 rounded-md font-semibold flex-1 cursor-pointer">
            Follow
          </button>
          <button className="bg-gray-800 px-7 py-1 rounded-md flex-1 cursor-pointer">
            Message
          </button>
          <button className="bg-gray-800 px-7 py-1 rounded-md flex-1 cursor-pointer">
            Email
          </button>
          <button className="bg-gray-800 px-7 py-1 rounded-md flex-1 cursor-pointer">
            <img src="https://www.svgrepo.com/show/442103/contact-new-symbolic.svg"></img>
          </button>
        </div>
        {/* Highlights */}
        <div className="flex gap-4 overflow-x-auto pb-2">

          {highlights.map((item, i) => (
            <div key={i} className="flex flex-col items-center">

              {/* Story Ring */}
              <div className="w-16 h-16 rounded-full p-[2px] bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 cursor-pointer">
                <img
                  src={item.img}
                  alt=""
                  className="w-full h-full rounded-full object-cover border-2 border-black"
                />
              </div>

              <p className="text-xs mt-1">{item.title}</p>

            </div>
          ))}

        </div>
        {/* TABS */}
        <div className="flex justify-around border-t border-gray-700 py-2">
          <span><img src="https://www.svgrepo.com/show/497149/grid-1.svg" className="w-5 h-5"></img></span>
          <span><img src="https://www.svgrepo.com/show/530376/movie.svg" className="w-5 h-5"></img></span>
          <span>
            🔁
          </span>
          <span>
            👤
          </span>

        </div>

        {/* POSTS GRID */}
        <div className="grid grid-cols-3 gap-[2px]">
          {posts.map((img, i) => (
            <img key={i} src={img} className="w-full h-32 object-cover" />
          ))}
        </div>

        
  


        

      </div>
    </div>
  );
}

export default App;
     
