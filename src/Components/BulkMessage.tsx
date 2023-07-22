import { Button, Textarea } from "@chakra-ui/react";
import { getFormattedNumbers } from "Utilities/phoneNumbers";
import { useState } from "react";
import { Wrapper } from "./Wrapper";

export const BulkMessager = () => {
  const [numbersString, setNumbersString] = useState("");
  const onValidateNumbers = () => {
    getFormattedNumbers(numbersString, "lineBreak");
  };
  return (
    <Wrapper>
      <div className="flex w-full p-10 flex-col items-start">
        <p className="text-large text-left font-semibold">
          Disparo de mensagens em massa
        </p>
        <p>Insira as informações necessárias e clique em enviar mensagens</p>

        <p className="text-base mt-4 font-semibold">Destinatários</p>
        <Textarea
          onChange={(e) => {
            setNumbersString(e.target.value);
            console.log(e.target.value);
          }}
          value={numbersString}
          className="border mt-2 border-zinc-400 rounded-md p-2 h-32 max-h-32 w-[720px] max-w-full"
          size={"md"}
          placeholder="Números de whats app para enviar sua mensagem"
        />

        <Button
          onClick={onValidateNumbers}
          className="bg-green hover:bg-greenDark text-white px-6 py-3 rounded-lg mt-4 font-semibold"
        >
          Validar números
        </Button>
      </div>
    </Wrapper>
  );
};
