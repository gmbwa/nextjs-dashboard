import '@/app/ui/global.css';
import { LightBulbIcon } from '@heroicons/react/24/outline';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">

      <body>
        <main className="flex min-h-screen flex-col p-6">
          <div className="flex h-40 shrink-0  rounded-lg bg-blue-500 p-4 md:h-30 ">
            {/* <AcmeLogo /> */}<LightBulbIcon className="w-20 h-20" />
          </div>

          <div className="mt-4 flex grow  gap-4 md:flex-row">
              {children}
          </div>
        </main>
      </body>
    </html>
  );
}
