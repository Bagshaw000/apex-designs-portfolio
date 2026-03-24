export default function HomeService() {
  return (
    <div className="w-[95vw] mx-auto my-[10vh]">
      <h1 className="font-outfit mb-5 text-lg"> Our services</h1>

      <div className="flex flex-wrap justify-between w-[inherit] gap-5 align-middle ">
        <div className="h-[70vh] w-full lg:w-[49%] bg-gray-500 rounded-md p-4 text-white">
          <div className="flex flex-col justify-between h-full">
            <h1 className="font-bold text-5xl">Corporate Branding</h1>

            <h1 className="max-w-[60%]">
              We help organizations articulate who they are through deliberate
              design.
            </h1>
          </div>
        </div>

        <div className="h-[70vh] w-full lg:w-[49%] bg-gray-500 rounded-md p-4 text-white">
          <div className="flex flex-col justify-between h-full">
            <h1 className="font-bold text-5xl">Campaing Design</h1>

            <h1 className="max-w-[60%]">
              We turn strategy into creative momentum 
            </h1>
          </div>
        </div>


        <div className="h-[70vh] w-full lg:w-[49%] bg-gray-500 rounded-md p-4 text-white">
          <div className="flex flex-col justify-between h-full">
            <h1 className="font-bold text-5xl">Design Consulting</h1>

            <h1 className="max-w-[60%]">
              Over 6 years of experience in brand consulting. We evaluate and ensure your brand amplifies the business vision.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
