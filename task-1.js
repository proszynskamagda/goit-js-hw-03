function slugify(title) {
  const lowerCaseTitle = title.toLowerCase();
  const slug = lowerCaseTitle.split(" ").join("-");

  return slug;
}
