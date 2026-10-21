import { formatDatetime, formatDistanceToNow } from '@/utils/format-datetime';

type PostDateProps = {
  dateTime: string;
};

export async function PostDate({ dateTime }: PostDateProps) {
  const distanceToNow = await formatDistanceToNow(dateTime);

  return (
    <time
      className='text-slate-600 text-sm/tight'
      dateTime={dateTime}
      title={distanceToNow}
    >
      {formatDatetime(dateTime)}
    </time>
  );
}
