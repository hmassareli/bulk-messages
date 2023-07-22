import { Button, Textarea } from "@chakra-ui/react";
import { Wrapper } from "./Wrapper";

export const BulkMessager = () => {
  return (
    <Wrapper>
      <div className="flex w-full p-6 flex-col items-start">
        <p className="text-large text-left font-semibold">
          Disparo de mensagens em massa
        </p>
        <p>Insira as informações necessárias e clique em enviar mensagens</p>

        <p className="text-base mt-4 font-semibold">Destinatários</p>
        <Textarea
          className="border mt-2 border-zinc-400 rounded-md p-2 h-32 max-h-32 w-[720px]"
          size={"md"}
          placeholder="Números de whats app para enviar sua mensagem"
        />

        <Button className="bg-green text-white px-6 py-3 rounded-lg mt-4 font-semibold">
          Validar números
        </Button>
      </div>
    </Wrapper>
  );
};
