// const searchFilter = (arr, target) => {
// const filterArray = arr.filter((rest) =>{

// })

// }
export function handleLoadMenu(prev) {
  return prev + 10;
}

export function sidebarHandleFunction(location) {
  // const  = useLocation();
  return location === "/" ? true : false;
}

export const handleCloseModelRef = (modelRefCurrent, eTarget, closeModel) => {
  //
  modelRefCurrent.value === eTarget;
  //
  modelRefCurrent.current, ": modelRefCurrent";
  //
  "eTarget: ", eTarget;
  //
  "closeModel: ", closeModel;

  if (modelRefCurrent.current === eTarget) {
    //
    modelRefCurrent.current === eTarget.target;
    closeModel();
  }
};
