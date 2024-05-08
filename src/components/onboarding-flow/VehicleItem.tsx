import Vehicle from '@/types/Vehicle.type';
import Car from '../icons/Car';

type VehicleItemProps = {
  data: Vehicle;
  onClick?: () => void;
  review?: boolean;
};
const VehicleItem: React.FC<VehicleItemProps> = ({ data, onClick, review }) => {
  return (
    <div
      onClick={onClick}
      className={
        `rounded-lg p-4 flex items-center gap-4 text-white min-h-[80px] ` +
        (review ? 'bg-[#406E8F]' : 'bg-[#23476B] cursor-pointer')
      }
    >
      <Car />
      <div>
        <p className="font-raleway">{`${data.year} ${data.make} ${data.model}`}</p>
        {!review && <p className="font-raleway opacity-60">${data.value}</p>}
      </div>
    </div>
  );
};

export default VehicleItem;
