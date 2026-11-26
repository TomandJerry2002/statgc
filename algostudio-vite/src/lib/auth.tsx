import { useEffect, useState, type ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from './supabase';
import { DASH } from './hosts';

type Status = 'loading' | 'in' | 'out';

/**
 * Renders children only for a signed-in user.
 * While the session loads it shows a small loader (not the login page),
 * so returning from Google doesn't flash the login card.
 */
export function RequireSession({ children }: { children: ReactNode }) {
  const [status, setStatus] = useState<Status>('loading');
  const navigate = useNavigate();

  useEffect(() => {
    let alive = true;
    let unsub = () => {};
    try {
      const sb = supabase();
      // getSession waits for the client to finish reading the OAuth redirect.
      sb.auth.getSession().then(({ data, error }) => {
        if (error) console.error(error);
        if (alive) setStatus(data.session ? 'in' : 'out');
      });
      const { data } = sb.auth.onAuthStateChange((event, session) => {
        if (!alive) return;
        if (event === 'SIGNED_OUT' || !session) setStatus('out');
        else setStatus('in');
      });
      unsub = () => data.subscription.unsubscribe();
    } catch (e) {
      console.error(e);
      setStatus('out');
    }
    return () => { alive = false; unsub(); };
  }, []);

  useEffect(() => {
    if (status === 'out') navigate('/login', { replace: true });
  }, [status, navigate]);

  if (status !== 'in') return <Loader />;
  return <>{children}</>;
}

/** Where a signed-in user's app lives on the app host: the mobile app on phones, the desktop app otherwise. */
export function appHome(): string {
  return typeof window !== 'undefined' && window.innerWidth < 640 ? '/mobile' : DASH;
}

/** On a phone, the dashboard opens the mobile app instead. Add ?desktop to the URL to keep the desktop app. */
export function PhoneToMobile({ children }: { children: ReactNode }) {
  const navigate = useNavigate();
  const toMobile = appHome() === '/mobile' && !new URLSearchParams(window.location.search).has('desktop');
  useEffect(() => { if (toMobile) navigate('/mobile', { replace: true }); }, [toMobile, navigate]);
  if (toMobile) return <Loader />;
  return <>{children}</>;
}

/** Signs out; RequireSession then sends the user to /login. */
export async function signOut() {
  const { error } = await supabase().auth.signOut();
  if (error) console.error(error);
}

export function Loader() {
  return (
    <div role="status" aria-label="Loading" style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', background: '#F6F4FF' }}>
      <style>{'@keyframes authSpin{to{transform:rotate(360deg)}}'}</style>
      <span style={{ width: 22, height: 22, borderRadius: 999, border: '2px solid rgba(126,101,214,.25)', borderTopColor: '#7E65D6', animation: 'authSpin 700ms linear infinite' }} />
    </div>
  );
}
