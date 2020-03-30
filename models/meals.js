class Meal {
  constructor(
    id,
    chef,
    title,
    complexity,
    image,
    duration,
    ingredients,
    steps,
    filters
  ) {
    this.id = id;
    this.chef = chef;
    this.title = title;
    this.image = image;
    this.ingredients = ingredients;
    this.steps = steps;
    this.duration = duration;
    this.complexity = complexity;
    this.filters = filters;
  }
}

export default Meal;
