//
//! > By itsR4wand
//* (c) 2024
//

// import json data
const importRoadmapsData = async (language) => {
  try {
    const roadmaps = await Promise.all([
      import(`./${language}/html5.json`),
      import(`./${language}/css3.json`),
      import(`./${language}/javascript.json`),
      import(`./${language}/flutter.json`)
    ]).then(data => data.map(item => item.default));

    return {
      html5: roadmaps[0],
      css3: roadmaps[1],
      javascript: roadmaps[2],
      flutter: roadmaps[3]
    };
  } catch (error) {
    console.error('Error loading JSON data:', error);
    return null;
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