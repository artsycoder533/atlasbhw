type Props = {
  text: string;
};

const AnnouncementBanner = ({ text }: Props) => {
  return (
    <div className="font-bold bg-secondary-accent text-white font-xl  w-96 p-4">
      <p>{text}</p>
    </div>
  );
};

export default AnnouncementBanner;
