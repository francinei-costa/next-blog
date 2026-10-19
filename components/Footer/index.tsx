import { io } from "next/cache";
import Link from "next/link";
import { Suspense } from "react";

export function Footer() {
  return (
    <footer className="pb-16 text-center">
      <p>
        <span>
          Copyright &copy;
          <Suspense fallback={null}>
            <CurrentYear />
          </Suspense>
        </span>{' - '}
        <Link href="/">The Blog</Link>
      </p>
    </footer>
  );
}

async function CurrentYear() {
  await io();
  return <>{new Date().getFullYear()}</>;
}
