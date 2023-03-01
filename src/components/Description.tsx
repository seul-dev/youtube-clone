import { useState } from 'react';

type Props = {
  children: React.ReactNode;
};

export default function Description({ children }: Props) {
  const [isShowDetail, setIsShowDetail] = useState(false);

  const handleClick = () => {
    setIsShowDetail(!isShowDetail);
  };
  return (
    <button
      onClick={handleClick}
      className="whitespace-pre-wrap bg-gray_active/50 rounded-lg p-5 w-full hover:bg-gray_active/40 text-left"
    >
      <div className={isShowDetail ? '' : 'line-clamp-4'}>{children}</div>
      <p className="font-bold mt-3">
        {isShowDetail ? 'Show less' : 'Show more'}
      </p>
    </button>
  );
}
