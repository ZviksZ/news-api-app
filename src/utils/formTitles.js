export const formTitles = (values) => {
   const titles = []
   Object.keys(values).map(key => {
      if (key !== 'searchType') {
         if (key === 'searchInput') {
            const requestText = `q=${values[key]}`;
            titles.push(requestText)
         } else if (key === 'sourceSelect') {
            const source = `sources=${values[key]}`;
            titles.push(source)
         } else if (key === 'countrySelect') {
            const source = `country=${values[key]}`;
            titles.push(source)
         } else {
            titles.push(values[key])
         }
      }
   })
   
   return titles
}