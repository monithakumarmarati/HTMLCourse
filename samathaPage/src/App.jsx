
import { BsBell } from "react-icons/bs";
import { BsGrid3X3Gap } from "react-icons/bs";
import { BiMoviePlay } from "react-icons/bi";
import { HiOutlineArrowPathRoundedSquare } from "react-icons/hi2";
import { BsPersonSquare } from "react-icons/bs";


    function App() {

  const samathapage = {
    username: "samatharuthprabhuoff",
    name: "samatha",
    posts: "1,795",
    followers: "38M",
    following: "947",
    bio: " #whatever your capabilities,you must stretch them to the limit",
    profilePic: "https://tse1.explicit.bing.net/th/id/OIP.wuo9xF2X2xgnquSgc6fozwHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    link: ""
  };
  const highlights = [
    {
      title: "Tralala",
      img: "https://www.thestatesman.com/wp-content/uploads/2023/12/IMG_1520.png"
    },
    {
      title: "zoy",
      img: "https://img1.exportersindia.com/product_images/bc-full/2024/5/10295302/02--114932-1716186282_7436768_2112694.jpg"
    },
    {
      title: "Take20",
      img: "https://images.squarespace-cdn.com/content/v1/69452ffc6b568628e6ce87d3/1771501810270-24653JQFQWJ48FIEG2YN/Take-20-Exercise-Intro.png"
    },
    {
      title: "secert alcheminds",
      img: "https://th.bing.com/th/id/R.18c9bd4b95bd97a07ed611711ac43c45?rik=33zP1TfCw5aq5g&riu=http%3a%2f%2fsecretalchemist.com%2fcdn%2fshop%2ffiles%2fLogo-SA_40e615d0-4478-4351-a127-417a3a3cf8c3.webp%3fv%3d1655459682&ehk=7N9150DSMu2OmPRpDZLa6ekRzGcyvD5Ps2wdCTaXoOw%3d&risl=&pid=ImgRaw&r=0"
    },
     
    
  ];

  const posts = [
    "https://i.pinimg.com/736x/d9/67/35/d96735421db94af62a94f9e93a7a208b.jpg",
    "https://www.gethucinema.com/wp-content/uploads/2021/12/Samantha-126.jpg",
    "https://preview.redd.it/samantha-prabhu-khusi-movie-promotion-photoshoot-v0-lwgh0fmiahib1.jpg?width=1080&format=pjpg&auto=webp&s=c0e2b6b4953f97e89b65818135f059902e20e8a8",
    "https://www.wallsnapy.com/img_gallery/2019-samantha-wallpapers-download-6653439.jpg",
    "https://static.toiimg.com/thumb/imgsize-23456,msid-100301118,width-600,resizemode-4/100301118.jpg",
    "https://tse2.mm.bing.net/th/id/OIP.C9vJzfel4uTi3TRxX5kn7wHaLH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    "https://images.timesnownews.com/photo/msid-153408298/153408298.jpg",
    "https://content.tupaki.com/h-upload/2025/02/08/687110-snapinstapp476723581183790044041425191102819435493522039n1080.jpg",
    "https://tse1.mm.bing.net/th/id/OIF.i3BReKy7FzEJuRp1aFf8Eg?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
  ];

  return (
    <div className="bg-black text-white min-h-screen flex justify-center">
      
      <div className="w-full max-w-md p-14">

        {/* Header */}
<div className="flex justify-between items-center mb-6">
  <p className="text-2xl cursor-pointer">く</p>

  <h2 className="font-semibold text-lg flex items-center gap-1">
    {samathapage.username}
    <img
      src="https://img.icons8.com/?size=96&id=2sZ0sdlG9kWP&format=png"
      alt="verified"
      className="w-5 h-5"
    />


  </h2>
   <BsBell />
  <p className="text-xl cursor-pointer">⋮</p>
</div>

        {/* proflie*/}
<div className="flex items-center mb-6 gap-6">

  {/* Profile Image */}
  <img
    src={samathapage.profilePic}
    alt="profile"
    className="w-20 h-20 rounded-full border-2 border-gray-500"
  />

  {/* post + Name */}
  <div className="flex flex-col">

    {/* Name */}
    <p className="mb-2">{samathapage.name}</p>

    {/* post */}
    <div className="flex gap-6 text-center w-50%">
      <div>
        <p className="font-semibold">{samathapage.posts}</p>
        <p className="text-gray-400 text-sm">posts</p>
      </div>

      <div>
        <p className="font-semibold">{samathapage.followers}</p>
        <p className="text-gray-400 text-sm">followers</p>
      </div>

      <div>
        <p className="font-semibold">{samathapage.following}</p>
        <p className="text-gray-400 text-sm">following</p>
      </div>
    </div>

  </div>

</div>

        {/* Bio */}
        <div className="mb-4 mt-4">
          
          <p className="text-sm whitespace-pre-line">{samathapage.bio}</p>
          
          
        </div>

       
          {/* FOLLOWED BY */}
          <p className="text-sm mt-2 mb-2">
            Followed by <span className="font-semibold">monitha_kumar</span>{" "}
            and <span className="font-semibold">sowmya_reddy</span>
          </p>
      


        {/* Buttons */}
        <div className="flex gap-2 mb-6">
          <button className="bg-gray-700 px-10 py-1 rounded-md font-semibold flex-1 cursor-pointer">
            Following 
          </button>
          <button className="bg-gray-700 px-10 py-1 rounded-md flex-1 cursor-pointer">
            Message
          </button>
          
          <button className="bg-gray-700 px-5 py-1 rounded-md flex-1 cursor-pointer">
            
          </button>
        </div>
        {/* Highlights */}
        <div className="flex gap-4 overflow-x-auto pb-2">

          {highlights.map((item, i) => (
            <div key={i} className="flex flex-col items-center">

             {/* Story detalis */}
              <div className=" w-16 h-16 rounded-full border-1 bg-gray-400">
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
        {/* icons */}
        <div className="flex justify-around  border-gray-700 py-2 w-90 h-10 gap-4 text-2xl">
           <BsGrid3X3Gap />
          <BiMoviePlay />
          <HiOutlineArrowPathRoundedSquare />
          <BsPersonSquare />


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
     
