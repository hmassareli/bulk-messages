import { Button, Textarea } from "@chakra-ui/react";
import { getFormattedNumbers } from "Utilities/phoneNumbers";
import { useState } from "react";
import { Edit } from "src/assets/edit";
import { Wrapper } from "../Wrapper";
import { NumberTag } from "./NumberTag";

export const BulkMessager = () => {
  const [numbersString, setNumbersString] = useState("");
  const [validatedNumbers, setValidatedNumbers] = useState<
    string[] | undefined
  >();
  const [isEditing, setIsEditing] = useState(false);
  const onValidateNumbers = () => {
    setIsEditing(false);
    const numbersArray = getFormattedNumbers(numbersString, "lineBreak");
    validatedNumbers && setNumbersString(validatedNumbers?.join("\n"));
    setValidatedNumbers(numbersArray.numbers);
  };
  return (
    <Wrapper>
      <div className="flex w-full p-10 flex-col items-start">
        <p className="text-large text-left font-semibold">
          Disparo de mensagens em massa
        </p>
        <p className="text-left">
          Insira as informações necessárias e clique em enviar mensagens
        </p>

        <p className="text-base mt-4 font-semibold">Destinatários</p>
        {validatedNumbers && !isEditing ? (
          <div className="border mt-2 border-zinc-400 rounded-md p-2 h-32 max-h-32 w-[720px] max-w-full relative">
            <Edit
              onClick={() => setIsEditing(true)}
              className="absolute top-4 right-2 hover:cursor-pointer"
            />

            {validatedNumbers.map((number) => (
              <NumberTag key={number} number={number} />
            ))}
          </div>
        ) : (
          <Textarea
            onChange={(e) => {
              setNumbersString(e.target.value);
            }}
            value={numbersString}
            className="border mt-2 border-zinc-400 rounded-md p-2 h-32 max-h-32 w-[720px] max-w-full"
            size={"md"}
            placeholder="Números de whats app para enviar sua mensagem"
          />
        )}

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
