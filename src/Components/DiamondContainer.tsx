import DiamondCard from "./DiamondCard";
import type { DiamondCardProps } from "../assets/data/data"; //Import the interface as a type

//Create a new interface for an array of DiamondCardProps
//The imported interace is an object interface
//And data is an array which needs an array interface
interface DiamondContainerProps {
  data: DiamondCardProps[];
}

export default function DiamondContainer({ data }: DiamondContainerProps) {
  return (
    <div className="DiamondContainer">
      {data.map((listing) => (
        <DiamondCard key={listing.id} {...listing} />
      ))}
    </div>
  );
}
