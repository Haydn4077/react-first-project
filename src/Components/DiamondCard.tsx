interface diamondCardProps {
  image: string;
  productName: string;
  price: string;
  sale?: boolean;
}
export default function DiamondCard(props: diamondCardProps) {
  return (
    <div className="DiamondCard">
      <img src={props.image} alt="" width="200" />
      <h2>{props.productName}</h2>
      <p>{props.price}</p>
      <p style={{ color: "red", fontWeight: "bolder" }}>
        {props.sale && "SALE"}
      </p>
    </div>
  );
}
