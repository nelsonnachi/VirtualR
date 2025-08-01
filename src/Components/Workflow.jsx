import { checklistItems } from "../Constant/index";
// import codingimg from "../assets/codeimg.jpg";
import code3 from '../assets/code3.jpg';
import { BiCheckCircle } from "react-icons/bi";

const Workflow = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl mb-10 sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
        Accelarate your{" "}
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          coding workflow.
        </span>
      </h2>
      <div className="flex flex-wrap justify-center">
        <div className="p-2 w-full lg:w-1/2">
          <img src={code3} alt="" />
        </div>
        <div className="pt-12 w-full lg:w-1/2">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex mb-12">
              <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                <BiCheckCircle className="text-orange-700" />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                <p className="text-md text-neutral-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Workflow;
