import ReactPlayer from "react-player";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";

const ModalVideo = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex items-center gap-2 cursor-pointer">
          <button className="relative w-[35px] h-[35px] bg-white rounded-full flex items-center justify-center shadow-2xl shadow-accent">
            <Image
              src="/assets/play-button.svg"
              width={26}
              height={26}
              alt=""
            />
          </button>
          <span className="text-sm font-primary">Watch Video</span>
        </div>
      </DialogTrigger>
      <DialogContent>
        <ReactPlayer
          width={"100%"}
          height={"100%"}
          url="https://www.youtube.com/watch?v=h4iNwkagju4"
          muted
        />
      </DialogContent>
    </Dialog>
  );
};

export default ModalVideo;
