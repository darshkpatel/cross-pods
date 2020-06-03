import useSwr from 'swr';
import { Button } from 'grommet';

const fetcher = (url) => fetch(url).then((res) => res.json());

const RoomLink = () => {
  const { data, error } = useSwr('/api/rooms/create', fetcher);
  if (error) return <div> Failed to create room</div>;
  if (!data) return <div>Creating Room</div>;
  if (data) {
    const link = `https://videolink2me.com/o/${data.short_id}`;
    return (
      <Button href={link} label="Join Room" target="_blank" />
    );
  }
};

export default RoomLink;
