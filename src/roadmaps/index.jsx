//
//! > By itsR4wand
//* (c) 2024
//

// import json data
const importRoadmapsData = async (language) => {
  try {
    // varible them
    const [html5, css3] = await Promise.all([
      import(`./${language}/html5.json`),
      import(`./${language}/css3.json`)
    ])

    // read them
    return {
      html5: html5.default,
      css3: css3.default
    }
  } catch (error) {
    // if got any error
    console.error('Error loading JSON data:', error)
    return null
  }
}

// usag them
const getRoadmapsData = async (language) => {
  try {
    const roadmapData = await importRoadmapsData(language)
    return roadmapData
  } catch (error) {
    // if got any error
    console.error('Error loading JSON data:', error)
    return null
  }
}

export default getRoadmapsData