import { Avatar, Typography } from "@material-tailwind/react";

function ProfileAvatar({ data = {} }) {
  return (
    <div className="bGLinearGradient w-[20rem] p-4 flex gap-4 rounded-md">
      <Avatar
        src={data.image}
        loading="lazy"
        alt="avatar"
        // variant="rounded"

        size="xxl"
        className=" shadow-md shadow-gray-800"
      />
      <div className=" self-center">
        <Typography className=" font-semibold">{data.name}</Typography>
        <Typography variant="small">{data.status}</Typography>
      </div>
    </div>
  );
}

export default ProfileAvatar;
