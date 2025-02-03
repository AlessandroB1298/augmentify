/*
 * @param {string[]} imageUrls, a string array of our images  
 * @param {number} vibrance, essentially how much rotation on each image in the array 
 * This function will take in some imageUrls, and add rotations on each of them
 */
import Image from "next/image"
export default function RotateImages(imageUrls : string[], vibrance : number){

    return(
        <div>
            {imageUrls.map((image, index) => (
                <Image
                src={image}
                height={100}
                key = {index + 1}
                width ={100}
                alt={"some image"}
                style={{ transform: `rotate(${vibrance})` }}
                />
            ))}
        </div>
    )

}