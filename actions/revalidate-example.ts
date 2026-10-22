"use server";
import { revalidatePath, revalidateTag } from "next/cache";

export async function revalidateExampleAction(formData: FormData) {
  const path = formData.get("path")?.toString() || "";
  console.log("Revalidating path:", path);
  revalidatePath(path)
  //revalidateTag("randomuser",'max');
}
