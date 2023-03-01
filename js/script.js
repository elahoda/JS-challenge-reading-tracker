const currentlyReading = {
  title: "The Fifth Season",
  author: "N.K. Jemisin",
  series: "Broken Earth Trilogy",
  pages: 512,
  publicationDate: "August 4th, 2015",
  currentChapter: 3,
  totalChapters: 23
};
console.log(currentlyReading.title);
console.log(currentlyReading["pages"]);
currentlyReading.awards = `Hugo Award for Best Novel (2016)`;
console.log(currentlyReading.awards);

currentlyReading.updateChapter = function (chapterNum) {
  this.currentChapter = chapterNum;
};
currentlyReading.updateChapter(22);
console.log(currentlyReading.currentChapter);
