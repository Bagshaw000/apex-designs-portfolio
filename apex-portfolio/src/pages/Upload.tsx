// // import { getProject } from "../../supabase";
// import { CLIENT_RENEG_LIMIT } from "tls";
// import Footer from "../pageComponent/Footer";
// import Header from "../pageComponent/Header";
// import { createClient } from "@supabase/supabase-js";
// import { ChangeEvent, useEffect, useRef, useState, useTransition } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlus } from "@fortawesome/free-solid-svg-icons";
// import { v4 as uuidv4 } from "uuid";
// import imageCompression from "browser-image-compression";

// const supabase = createClient(
//   import.meta.env.VITE_SUPABASE_URL,
//   import.meta.env.VITE_SUPABASE_ANON_KEY
// );

// function Upload() {
 

//   function uploadData() {}
//   return (
//     <>
//       <div className="relative font-outfit">
//         <Header />
//         <div className="h-[100vh] mt-[100px] w-[100vw]  bg-white">
//           <h1 className="text-black text-center mt-[150px]">Portfolio</h1>

//           <div className="mx-auto w-fit mt-[20px]">
//             <form action="" method="post">
//               <input
//                 type="text"
//                 name="client"
//                 id=""
//                 placeholder="Client"
//                 disabled={isPending}
//               />
//               <input
//                 type="file"
//                 name="logo"
//                 id=""
//                 placeholder="logo"
//                 disabled={isPending}
//               />
//               <input
//                 type="text"
//                 name="desc"
//                 id=""
//                 placeholder="Fill a brief prject description"
//                 disabled={isPending}
//               />
//               <input
//                 type="file"
//                 name="cover"
//                 id=""
//                 placeholder="Choose the cover image"
//                 onChange={handleCoverImageChange}
//                 disabled={isPending}
//               />
//               <input
//                 type="file"
//                 multiple
//                 accept="image/*"
//                 name=""
//                 ref={imageInputRef}
//                 id="Choose the project files"
//                 onChange={handleProjectImagesChange}
//                 hidden
//                 disabled={isPending}
//               />
//               <button
//                 type="button"
//                 className="h-[50px] w-[170px] bg-amber-500 px-[20px] mx-auto rounded-[50px] flex flex-row justify-between items-center"
//                 onClick={() => imageInputRef.current?.click()}
//                 disabled={isPending}
//               >
//                 Select Images
//               </button>
//               {projectImages.length > 0 && (
//                 <div>
//                   <h3>Selected Images:</h3>
//                   <ul>
//                     {projectImages.map((url, index) => (
//                       <img src={url} key={url} width={300} height={300}></img>
//                     ))}
//                   </ul>
//                 </div>
//               )}

//               <button
//                 type="submit"
//                 className="h-[50px] w-[170px] bg-amber-500 px-[20px] mx-auto rounded-[50px] flex flex-row justify-between items-center"
//                 onClick={handleUpload}
//               >
//                 <div>
//                   <FontAwesomeIcon icon={faPlus} />
//                 </div>
//                 {isPending ? "Uploading..." : "Upload Images"}
//               </button>
//             </form>
//           </div>
//         </div>
//         <Footer />
//       </div>
//     </>
//   );
// }

// export default Upload;

// type portfolio = {
//   id: string;
//   key_word: string;
//   client: string;
//   logo: string;
//   description: string;
//   cover_image: string;
//   other_image: string;
// };

// export async function convertBlobUrlToFile(blobUrl: string) {
//   const response = await fetch(blobUrl);
//   const blob = await response.blob();
//   const fileName = Math.random().toString(36).slice(2, 9);
//   const mimeType = blob.type || "application/octet-stream";
//   const file = new File([blob], `${fileName}.${mimeType.split("/")[1]}`, {
//     type: mimeType,
//   });
//   return file;
// }

// type UploadProps = {
//   file: File;
//   bucket: string;
//   folder?: string;
// };
// export async function uploadImage({ file, bucket, folder }: UploadProps) {
//   const fileName = file.name;
//   const fileExtension = fileName.slice(fileName.lastIndexOf(".") + 1);
//   const path = `${folder ? folder + "/" : ""}${uuidv4()}.${fileExtension}`;

//   try {
//     file = await imageCompression(file, {
//       maxSizeMB: 1,
//     });
//   } catch (error) {
//     console.error(error);
//     return { imageUrl: "", error: "Image upload failed" };
//   }
//   const { data, error } = await supabase.storage
//     .from(bucket)
//     .upload(path, file);

//   if (error) {
//     return { imageUrl: "", error: "Image upload failed" };
//   }
//   const imageUrl = `${import.meta.env
//     .VITE_SUPABASE_URL!}/storage/v1/object/public/${bucket}/${data?.path}`;
//   return { imageUrl, error: "" };
// }
