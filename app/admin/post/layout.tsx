import { MenuAdmin } from '@/components/admin/MenuAdmin';
import { requireLoginSessionOrRedirect } from '@/lib/login/manage-login';

export const instant = false;

type AdminPostLayoutProps = {
  children: React.ReactNode;
};

export default async function AdminPostLayout({
  children,
}: Readonly<AdminPostLayoutProps>) {
  await requireLoginSessionOrRedirect();

  return (
    <>
      <MenuAdmin />
      {children}
    </>
  );
}
