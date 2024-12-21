export const FilterData = (searchInput, allRestaurants) => {
    const FilteredData = allRestaurants.filter((restaurant) => {
        return restaurant?.info?.name?.toLowerCase()?.includes(searchInput.toLowerCase());
    })
    return FilteredData;
};