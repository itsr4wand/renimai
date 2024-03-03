//
//! > By itsR4wand
//* (c) 2024
//
//! Function to import JSON data for roadmaps based on the specified language
//* @param {string} language - The language code
//* @returns {Object} - Object containing roadmaps data for HTML5, CSS3, JavaScript, and Flutter
//

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

//! Function to get roadmaps data for a specific language
//* @param {string} language - The language code
//* @returns {Object} - Roadmaps data for the specified language
//
const getRoadmapsData = async (language) => {
  try {
    const roadmapData = await importRoadmapsData(language);
    return roadmapData;
  } catch (error) {
    // Handle error if JSON data loading fails
    console.error('Error loading JSON data:', error);
    return null;
  }
}

export default getRoadmapsData