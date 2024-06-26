import BinarySearch from "@/components/Binarysearch";
import BubbleSort from "@/components/Bubblesort";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <h3>Hi!</h3>
      <BubbleSort />
      <BinarySearch />
    </>
  );
}
