const instagramPage = {
    username: "sumanth.prabhas",
    name: "Sumanth Prabhas",
    posts: "693",
    followers: "449K",
    following: "642",
    bio: "chill undu 🥂\nAnitha Reddy, Mallareddy ❤️",
    link: "youtube.be/f08qrhR-IbU",
    profilePic: "https://i.pinimg.com/1200x/1a/16/55/1a1655c7688c00e22934c3df819b8be9.jpg"
  };
  const highlights = [
    {
      title: "Success🥂",
      img: "https://images.filmibeat.com/ph-big/img_og/godari-gattupaina-movie-teaser-launch-stills1767360698.jpg"
    },
    {
      title: "Team🍾",
      img: "https://th.bing.com/th/id/OIP.SVo4BI6oXr17IrDHnivRJgHaFj?w=234&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"
    },
    {
      title: "GodariGat..📽️",
      img: "https://th.bing.com/th?id=OIF.X52n1BHSEnnI%2btVHFjxY7g&w=170&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"
    }
    
  ];

  return (
    <div className="bg-black text-white min-h-screen flex justify-center">
      
      <div className="w-full max-w-md p-4">

        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-xl cursor-pointer">く</p>
          <h2 className="font-semibold text-lg">
            {instagramPage.username} <span className="text-blue-500">✔</span>
          </h2>
          <p className="text-xl cursor-pointer">⋮</p>
        </div>

        {/* Profile + Stats */}
        <div className="flex items-center justify-between mb-6">
<div>
    <img
            src={instagramPage.profilePic}
            alt="profile"
            className="w-20 h-20 rounded-full border-2 border-gray-500"
          />
</div>
          

          <div>
            <div>
              <p>{instagramPage.name}</p>
          </div>
            <div className="flex flex-row gap-6 text-center w-[90%]">
            <div>
              <p className="font-semibold">{instagramPage.posts}</p>
              <p className="text-gray-400 text-sm cursor-pointer">posts</p>
            </div>

            <div>
              <p className="font-semibold">{instagramPage.followers}</p>
              <p className="text-gray-400 text-sm cursor-pointer">followers</p>
            </div>

            <div>
              <p className="font-semibold">{instagramPage.following}</p>
              <p className="text-gray-400 text-sm cursor-pointer">following</p>
            </div>
          </div>
          </div>

        </div>

        {/* Bio */}
        <div className="mb-4">
          
          <p className="text-sm whitespace-pre-line">{instagramPage.bio}</p>
          <p className="text-blue-400 text-sm cursor-pointer">{instagramPage.link}</p>
        </div>

        {/* small chips */}
          <div className="flex gap-2 mt-2 mb-3 flex-wrap">
            <span className="bg-black border border-gray-50 px-3 py-1 rounded-full text-xs cursor-pointer">
              @ sumanth.prab...
            </span>
            <span className="bg-black border border-gray-50 px-3 py-1 rounded-full text-xs cursor-pointer">
              💬 Supra Club 🔥
            </span>
          </div>
      


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

        
  


        

      </div>
    </div>
  );


export default App;