import { ZodError, ZodFormattedError, z } from "zod";

// export function getZodErrorMessages<T>(error: ZodFormattedError<T>): string[] {
//   return Object.values(error)
//     .map(field => {
//       if (Array.isArray(field)) return field;
//       return field?._errors || [];
//     })
//     .flat()
//     .filter(Boolean);
// }

export function getZodErrorMessages(
  // Infere dinamicamente o tipo de retorno da nova função utilitária do Zod 4
  error: ReturnType<typeof z.formatError>,
): string[] {
  // 1. Pegamos os erros globais/gerais do formulário (nível raiz)
  const rootErrors = error._errors || [];

  // 2. Extraímos as mensagens de todos os campos filhos
  const fieldErrors = Object.entries(error)
    // Ignoramos a propriedade '_errors' para não duplicar ou quebrar o loop
    .filter(([key]) => key !== "_errors")
    .flatMap(([_, value]) => {
      // No Zod 4, cada campo contém um objeto com a propriedade '_errors'
      if (value && typeof value === "object" && "_errors" in value) {
        return value._errors || [];
      }
      return [];
    });

  // 3. Unimos tudo em uma única lista limpa de strings
  return [...rootErrors, ...fieldErrors].filter(Boolean);
}

