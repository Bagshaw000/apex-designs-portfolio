import React from "react";

function About() {
  return (
    <>
      <div className="text-[#000000] px-[10vw] mb-[20px]">
        <div className="my-16">
          <h1 className="text-4xl font-thin">
            <b className="font-medium">Discover Our</b> Agency
          </h1>
        </div>
        <div className="text-sm ">
          <h6 className="mb-[35px] text-[#42424298]">
            At <b>Apex Designs</b>, creativity meets strategy. We are a
            passionate collective of visionaries, innovators, and
            problem-solvers driven to turn ideas into impactful realities. With
            expertise spanning design and digital marketing, our diverse talents
            blend seamlessly to craft compelling solutions that elevate your
            brand and engage your audience. Together, we build experiences that
            inspire and deliver measurable success for every client we serve
          </h6>

          <h6 className="text-[#42424298]">
            Collaboration fuels everything we create. Our strength lies in the
            dynamic synergy sparked by diverse perspectives coming together.
            This vibrant exchange of ideas fosters an atmosphere of boundless
            creativity, where innovation flourishes. By channeling our
            collective expertise, we deliver extraordinary solutions that go
            beyond expectations and drive lasting impact.
          </h6>
        </div>
      </div>

      <div className="px-[10vw] flex flex-row justify-start items-center my-[60px]">
        <div className="w-[60px] h-[60px]  min-w-[60px] bg-gray rounded-[40px] mr-[20px]">
          <div></div>
        </div>
        <div className="min-w-[200px]">
          <span className="text-[#000000] text-wrap font-light ">
            <b className="font-medium">Passionately Creating</b> Design Wonders:{" "}
            <b className="font-medium">Unleashing</b> Boundless Creativity
          </span>
        </div>
      </div>

      <div className=" w-[80vw] h-[400px] bg-greyam mx-[auto] mb-[60px]"></div>
      <div>
        <div>
          <span>
          
            Professionals focused on helping your brand grow and move forward
          </span>
        </div>
      </div>
    </>
  );
}

export default About;
