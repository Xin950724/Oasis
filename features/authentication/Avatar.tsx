import React from "react";
import Image from "next/image";

interface AvatarProps {
  image: string | null | undefined;
  name: string | null | undefined;
}

const Avatar: React.FC<AvatarProps> = ({ image, name }) => {
  return (
    <div className="flex gap-[10px] items-center font-medium text-[14px] text-gray-600">
      <div className="rounded-full w-7 h-7 relative">

      <Image
        src={image || "/default-user.jpg"}
        alt={name || "user-image"}
        fill
        sizes="28px"
        className="rounded-full outline-2 outline-gray-100 object-cover object-center"
        />
        </div>
      <span>{name}</span>
    </div>
  );
};

export default Avatar;
