function titleCaseEdit(title) {
  title_length = title.length
  title = title.toLowerCase()
  title = title[0].toUpperCase() + title.slice(1, title_length)
  for (let i=0; i < title_length; i++){
    if (title[i-1] === " ")
      title = title.slice(0, i) + title[i].toUpperCase() + title.slice(i+1, title_length)
  }
  return title
}

// Do not edit this line;
module.exports = titleCaseEdit;