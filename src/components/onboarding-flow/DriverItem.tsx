import Car from '../icons/Car';
import Driver from '@/types/Driver.type';
import UserIcon from '../icons/UserIcon';

type DriverItemProps = {
  data: Driver;
  onClick?: () => void;
  review?: boolean;
};
const DriverItem: React.FC<DriverItemProps> = ({ data, onClick, review }) => {
  return (
    <div
      onClick={onClick}
      className={
        `rounded-lg p-4 flex items-center gap-4 text-white min-h-[80px] ` +
        (review ? 'bg-[#406E8F]' : 'bg-[#23476B] cursor-pointer')
      }
    >
      <UserIcon />
      <div>
        <p className="font-raleway">{`${data.firstName} ${data.lastName}`}</p>
        {!review && <p className="font-raleway opacity-60">{data.license}</p>}
      </div>
    </div>
  );
};

export default DriverItem;
