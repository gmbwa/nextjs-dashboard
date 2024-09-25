import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';

export default function Page() {
  return (
    <div>
      <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
        <strong className="text-red-500"> Welcome to Acme.</strong> <br/>This is the example for the{' '}
        <a href="https://nextjs.org/learn/" className="text-blue-500">
          Next.js Learn Course,
        </a><br/>
        brought to you by Vercel.


      </p>
      <Link
        href="/login"
        className="flex items-center gap-5 self-start m-5 rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
      >
        <span>Log in</span> <ArrowRightIcon className="w-5" />
      </Link>

      <Link
        href="/items"
        className="flex items-center gap-5 self-start m-5 rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
      >
        <span>todo Items </span> <ArrowRightIcon className="w-5" />
      </Link>

    </div>
  );
}
