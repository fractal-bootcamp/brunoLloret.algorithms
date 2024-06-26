import BinarySearch from "@/components/Binarysearch";
import BubbleSort from "@/components/Bubblesort";
import SearchThatIsLinear from "@/components/Linearsearch";
import Image from "next/image";
import MergeSortVisualizer from "@/components/Merge-sort";

export default function Home() {

  const initialArray = [8, 3, 1, 7, 0, 10, 2, 5, 6, 4, 9, 12, 15, 11, 13];
  return (
    <>
      <div>
        <h2>Algorithms</h2>
      </div>

      {/* <BubbleSort />
      <BinarySearch />
      <SearchThatIsLinear /> */}
      <MergeSortVisualizer array={initialArray} />
    </>
  );
}
