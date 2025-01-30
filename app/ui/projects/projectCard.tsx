
/*
This is the project card that will display the user data in 
a friendly and pretty way.
*/

//! what params SHOULD we take in

interface ProjectParams {
  data : {
    imageUrls : string[],
    projType : string,
    projName : string,
    projDesc : string,
  }
}


const ProjectCard  = ({data} : ProjectParams) => {
  return (
    <div className={"flex flex-col justify-center items-center border-2 rounded-lg bg-white w-1/2 h-[]"}>
      <h3 className={"text-3xl font-extrabold align-top"}>{data.projName}</h3>
      {data.imageUrls.map((image, index) => (
        <img
        key={index + 1}
        src={image}
        className={"w-24 h-36"}
        />
      ))}
      <p>
        {data.projDesc}
      </p>
      <p>{data.projType}</p>
    </div>
  )
}
export default ProjectCard;
