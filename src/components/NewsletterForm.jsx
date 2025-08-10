import { useEffect, useState } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('pokumaa_newsletter_ok') === '1') setDone(true);
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    // MOCK POST – simulate network
    await new Promise(r => setTimeout(r, 600));
    localStorage.setItem('pokumaa_newsletter_ok', '1');
    setDone(true);
    setLoading(false);
  };

  if (done) return <p className="text-green-700 font-medium">Aitäh liitumast!</p>;

  return (
    <form onSubmit={onSubmit} className="flex gap-2 justify-center">
      <input
        aria-label="E-post"
        type="email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        required
        className="border rounded px-3 py-2"
        placeholder="Sinu e-post"
      />
      <button aria-label="Liitu uudiskirjaga" disabled={loading}
        className="bg-green-600 hover:bg-green-700 text-white rounded px-4 py-2">
        {loading ? 'Saadan…' : 'Liitu'}
      </button>
    </form>
  );
}
