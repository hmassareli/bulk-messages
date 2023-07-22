import { Link } from "react-router-dom";
import { Alarm } from "src/assets/alarm";
import { Message } from "src/assets/message";
import { Settings } from "src/assets/settings";

export const Wrapper = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="bg-grayLight h-full grow flex flex-col">
      <div className="bg-green  shadow-md h-10 flex items-center p-4 w-full">
        <Link to="/send">
          {" "}
          <p className="text-white">Disparo de mensagens</p>
        </Link>
      </div>
      <div className="flex grow justify-between">
        <div className="bg-white w-14 h-full ">
          <div className=" flex bg-grayLight hover:bg-grayLight hover:cursor-pointer justify-center w-14 h-14">
            <Message className="text-grayDark w-7" />
          </div>
          <div className="hover:bg-grayLight hover:cursor-pointer flex justify-center w-14 h-14">
            <Alarm className="text-grayDark w-7" />
          </div>
          <div className=" flex hover:bg-grayLight hover:cursor-pointer justify-center w-14 h-14">
            <Settings className="text-grayDark w-7" />
          </div>{" "}
        </div>
        <div className="bg-white w-96 h-full flex flex-col items-center grow mx-6 pt-4">
          {children}
        </div>
      </div>
    </div>
  );
};
