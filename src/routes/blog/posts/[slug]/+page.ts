import { getPostBySlug } from '$lib/utils';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	try {
		const resolvedPost = await getPostBySlug(params.slug);

		const post = {
			slug: params.slug,
			title: resolvedPost.metadata.title || 'Untitled',
			date: resolvedPost.metadata.date?.split('T')[0] || new Date().toISOString().split('T')[0],
			readTime: resolvedPost.metadata.readTime || '5 min read',
			excerpt: resolvedPost.metadata.excerpt || '',
			content: resolvedPost.content
		};

		return { post };
	} catch (err) {
		throw error(404, 'Post not found');
	}
}
