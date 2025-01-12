import RestaurantCardSkeleton from "./RestaurantCardSkeleton";

export default function RestaurantListSkeleton() {
  return (
    <div className="flex w-screen">
      <div className="grid w-full grid-cols-2 md:grid-cols-3 gap-4 ">
        {Array(9)
          .fill("")
          .map(() => {
            return <RestaurantCardSkeleton key={Math.random()} />;
          })}
      </div>
    </div>
  );
}
