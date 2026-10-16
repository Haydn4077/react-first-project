export interface DiamondCardProps {
  id: number;
  image: string;
  productName: string;
  price: string;
  sale?: boolean;
}

const data: DiamondCardProps[] = [
  {
    id: 1,
    image: "src/assets/pexels-the-glorious-studio-10475791.jpg",
    productName: "Princess",
    price: "1,350",
  },
  {
    id: 2,
    image: "src/assets/pexels-the-glorious-studio-10475793.jpg",
    productName: "Swan",
    price: "1,420",
  },
  {
    id: 2,
    image: "src/assets/pexels-the-glorious-studio-10475794.jpg",
    productName: "Ice Lake",
    price: "1,780",
    sale: true,
  },
];

export default data;
