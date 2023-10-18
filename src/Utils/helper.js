export function filterList(searchText, allRestaurantList) {
  const filterData = allRestaurantList.filter((rest) =>
    rest?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );
  console.log(filterData);
  return filterData;
}
