import Link from 'next/link';
import Upvote from './Upvote';

export default function BlogPost({ post_id, title, published_at, link, summary, company, logoUrl, supabase, ip }) {
  return (
    <Link href={link} passHref legacyBehavior>
      <a target="_blank" rel="noopener noreferrer" className="block relative max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden md:max-w-2xl m-1 border border-gray-200 hover:border-indigo-500 transition">
        <div className="md:flex mb-10">
          <div className="p-8">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <img src={logoUrl} alt={''} className="h-8 w-8 object-contain" />
                <div className="tracking-wide text-sm text-indigo-500 font-semibold">{company}</div>
              </div>
              <div className="uppercase tracking-wide text-sm">{published_at}</div>
            </div>
            <div className="block mt-1 text-lg leading-tight font-medium">
              {title}
            </div>
            <p className="mt-2 text-gray-500">
              {summary + (".!?".includes(summary.slice(-1)) ? "" : ".")}
            </p>
          </div>
        </div>
        <Upvote postId={post_id} supabase={supabase} userIP={ip} />
      </a>
    </Link>
  );
}
