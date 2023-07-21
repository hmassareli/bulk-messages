import { Textarea } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "../App.css";
function App() {
  return (
    <>
      <div className="bg-gray h-full grow flex flex-col">
        <div className="bg-green  shadow-md h-10 flex items-center p-4 w-full">
          <Link to="/send">
            {" "}
            <p className="text-white">Disparo de mensagens</p>
          </Link>
        </div>
        <div className="flex grow justify-between">
          <div className="bg-white w-40 h-full">disparar mensagens</div>
          <div className="bg-white w-96 h-full flex flex-col items-center grow mx-6 pt-4">
            Insira os números que deseja enviar
            <Textarea
              className="border mt-4 border-zinc-400 rounded-md p-2 h-32 w-[720px]"
              size={"md"}
              placeholder="Números de whats app para enviar sua mensagem"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
