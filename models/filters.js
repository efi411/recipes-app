class Filters {
  constructor(
    isGlutenFree,
    isVegan,
    isVegetarian,
    isLactoseFree,
    isDairy,
    isMeat,
    isDessert
  ) {
    this.isGlutenFree = isGlutenFree;
    this.isVegan = isVegan;
    this.isVegetarian = isVegetarian;
    this.isLactoseFree = isLactoseFree;
    this.isDairy = isDairy;
    this.isMeat = isMeat;
    this.isDessert = isDessert;
  }
}

export default Filters;
