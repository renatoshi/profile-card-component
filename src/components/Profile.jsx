import imgSquare from "../images/bg-pattern-card.svg";
import photo from "../images/image-victor.jpg";

export const Profile = () => {
  return (
    <main className="rounded-2xl font-KumbhSans flex w-100 flex-col items-center justify-center p-auto borde bg-white z-10">
      <header className="flex items-center justify-center relative">
        <img src={imgSquare} alt="imgSquare" className="rounded-t-xl w-full" />
        <div className="border p-1 absolute flex border-white items-center justify-center bg-white bottom-[-54px] rounded-full">
          <img src={photo} alt="photo" className="rounded-full" />
        </div>
      </header>

      <div className="mt-10 pt-7 flex items-center justify-center flex-col">
        <h3 className="font-bold text-lg tracking-wider text-VeryDarkDesaturatedBlue">
          Victor Crest
          <span className="font-normal text-DarkGrayishBlue">{""} 26</span>
        </h3>

        <p className="font-normal text-DarkGrayishBlue pt-1 pb-6 text-sm">
          London
        </p>
      </div>

      <div className="border border-opacity-10  border-DarkGrayishBlue w-full"></div>

      <div className="flex flex-row space-x-11 md:space-x-11 pt-5 pb-5 pr-5">
        <div className="flex items-center justify-center flex-col gap-1 ">
          <h3 className="font-bold text-VeryDarkDesaturatedBlue text-lg tracking-wider">
            80K
          </h3>
          <p className="font-light text-DarkGrayishBlue text-[10px] tracking-widest">
            Followers
          </p>
        </div>

        <div className="flex items-center justify-center flex-col gap-1">
          <h3 className="font-bold text-VeryDarkDesaturatedBlue text-lg tracking-wider">
            803K
          </h3>
          <p className="font-light text-DarkGrayishBlue text-[10px] tracking-widest">
            Likes
          </p>
        </div>

        <div className="flex items-center justify-center flex-col gap-1">
          <h3 className="font-bold text-VeryDarkDesaturatedBlue text-lg tracking-wider">
            1.4K
          </h3>
          <p className="font-light text-DarkGrayishBlue text-[10px] tracking-widest">
            Photos
          </p>
        </div>
      </div>
    </main>
  );
};
