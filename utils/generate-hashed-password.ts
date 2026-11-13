import { hashPassword } from '@/lib/login/password-hashing';

(async () => {
  const minhaSenha = '0304fcc'; // NÃO ESQUECER DE APAGAR SUA SENHA DAQUI
  const hashDaSuaSenhaEmBase64 = await hashPassword(minhaSenha);

  console.log({ hashDaSuaSenhaEmBase64 });
})();

// terminal: npx tsx utils/generate-hashed-password.ts
