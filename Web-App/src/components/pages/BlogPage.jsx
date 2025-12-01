const posts = [
  {
    id: 1,
    title: 'Securing Your Business in the Cloud Era',
    href: '#',
    description:
      'Explore essential cloud security practices and strategies to protect your business data. Learn about encryption, access controls, and compliance frameworks that every modern enterprise should implement.',
    date: 'Dec 15, 2024',
    datetime: '2024-12-15',
    category: { title: 'Cybersecurity', href: '#' },
    author: {
      name: 'Alex Chen',
      role: 'Chief Technology Officer',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    },
  },
  {
    id: 2,
    title: 'The Future of AI in Enterprise Software Development',
    href: '#',
    description: 'Discover how artificial intelligence is transforming software development processes, from automated testing to intelligent code generation. Learn about the tools and techniques shaping the future of enterprise applications.',
    date: 'Dec 8, 2024',
    datetime: '2024-12-08',
    category: { title: 'AI & Development', href: '#' },
    author: {
      name: 'Sarah Johnson',
      role: 'Lead Software Engineer',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    },
  },
  {
    id: 3,
    title: 'Building Scalable Network Infrastructure for Growing Businesses',
    href: '#',
    description:
      'A comprehensive guide to designing and implementing network solutions that grow with your business. Learn about modern networking technologies, performance optimization, and cost-effective scaling strategies.',
    date: 'Nov 28, 2024',
    datetime: '2024-11-28',
    category: { title: 'Network Infrastructure', href: '#' },
    author: {
      name: 'Michael Rodriguez',
      role: 'Cybersecurity Specialist',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
]

export default function BlogPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-3xl">From the blog</h2>
          <p className="mt-2 text-lg/8 text-gray-600">Learn how to grow your business with our expert advice.</p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
                <a
                  href={post.category.href}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {post.category.title}
                </a>
              </div>
              <div className="group relative grow">
                <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">{post.description}</p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4 justify-self-end">
                <img alt="" src={post.author.imageUrl} className="size-10 rounded-full bg-gray-50" />
                <div className="text-sm/6">
                  <p className="font-semibold text-gray-900">
                    <a href={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-gray-600">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
