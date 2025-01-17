export default function Error() {
  return (
    <div className="grid place-content-center bg-white px-4">
      <div className="text-center">
        <p className="text-2xl font-bold tracking-tight  sm:text-4xl">
          No meals found.
        </p>
        <p className="mt-4 text-gray-500">But you can try :</p>
        <ul className="grid grid-cols-5 gap-5 mt-10 text-gray-500">
          <li>Beef</li>
          <li>Chicken</li>
          <li>Lamb</li>
          <li>Pasta</li>
          <li>Pork</li>
          <li>Seafood</li>
          <li>Vegan</li>
          <li>Vegetarian</li>
          <li>Breakfast</li>
          <li>Goat</li>
        </ul>
      </div>
    </div>
  );
}
