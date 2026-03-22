import Image from 'next/image';
import { getBadgeUrl } from '@/app/config';

export default function Footer() {
  return (
    <footer className="px-4 sm:px-6 lg:px-8 py-12 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto text-center space-y-6">
        <div className="flex justify-center">
          <Image
            src={getBadgeUrl('made', 'white')}
            alt="Made by Human"
            width={360}
            height={120}
            className="h-16 w-auto dark:hidden"
          />
          <Image
            src={getBadgeUrl('made', 'black')}
            alt="Made by Human"
            width={360}
            height={120}
            className="h-16 w-auto hidden dark:block"
          />
        </div>
        <div className="text-sm text-zinc-600 dark:text-zinc-400 space-y-2">
          <p>This project is open source under the MIT License.</p>
          <p>Share, remix, and build upon it — and remember to credit the humans who made it.</p>
          <p className="mt-4">
            Made by{' '}
            <a
              href="https://iamjarl.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-900 dark:text-zinc-100 underline hover:text-zinc-600 dark:hover:text-zinc-400 font-medium"
            >
              IAMJARL
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
