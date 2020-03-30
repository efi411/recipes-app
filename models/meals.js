class Meal {
    constructor(
      id,
      maker,
      title,
      complexity,
      image,
      duration,
      ingredients,
      steps,
      Filters
    ) {
      this.id = id;
      this.maker = maker;
      this.title = title;
      this.image = image;
      this.ingredients = ingredients;
      this.steps = steps;
      this.duration = duration;
      this.complexity = complexity;
      this.Filters = Filters;

    }
  }
  
  class Filters{
    constructor(
        isGlutenFree,
        isVegan,
        isVegetarian,
        isLactoseFree,
        isMilky,
        isMeaty,
        isDessert
    ){
        this.isGlutenFree = isGlutenFree;
        this.isVegan = isVegan;
        this.isVegetarian = isVegetarian;
        this.isLactoseFree = isLactoseFree;
        this.isMilky = isMilky;
        this.isMeaty = isMeaty;
        this.isDessert = isDessert;
    }

  }
  export default Meal;
  export default Filters;

  