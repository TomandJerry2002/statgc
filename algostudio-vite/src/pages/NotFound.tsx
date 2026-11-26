import '@/index.css';
import { LinkButton } from '@/components/ui';
import { DASH } from '@/lib/hosts';

export default function NotFound({ inApp }: { inApp?: boolean }) {
  return (
    <div className={inApp ? 'grid place-items-center py-24' : 'grid min-h-dvh place-items-center bg-canvas px-4'}>
      <div className="flex max-w-sm flex-col items-center gap-3 text-center">
        <h1 className="m-0 text-2xl font-bold">{inApp ? 'This deal isn’t here' : 'Page not found'}</h1>
        <p className="m-0 text-sm font-medium text-muted">{inApp ? 'It may have been deleted, or it belongs to another account.' : 'Check the address, or go back to the start.'}</p>
        {/* "/" is the website home on flowgc.co (and a single host) and the app home on app.flowgc.co. */}
        {inApp ? <LinkButton to={(DASH === '/' ? '' : DASH) + '/deals'}>Back to deals</LinkButton> : <a href="/" className="text-sm font-semibold">Go to FlowGC</a>}
      </div>
    </div>
  );
}
