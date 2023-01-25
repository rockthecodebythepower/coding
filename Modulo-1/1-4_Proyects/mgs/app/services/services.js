export const getData = async (param) => {
  try {
    const data = await fetch(`http://localhost:8080/${param}`);
    const dataJSON = await data.json();
    return dataJSON;
  } catch (error) {
    console.log("Error:", error);
  }
};
